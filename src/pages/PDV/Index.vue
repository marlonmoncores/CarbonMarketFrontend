<template>
  <q-page id="pdv-index" class="flex fit">
    <div class="row q-col-gutter-sm full-width">
      <div class="col-7 bg-blue-grey-3 text-white">
        <h1>Tamako Market</h1>
        <div class="items-list">
          <List v-bind="{ items }" />
        </div>
      </div>
      <div class="col-5 q-gutter-sm">
        <h2 class="text-negative">{{ total | money }}</h2>
        <Client v-model="cpf" />

        <hr />

        <NewProduct @input="onNewProduct" />

        <hr>

        <div class="q-m-lg">
          <q-btn @click="save" label="Encerrar Compra" size="lg" color="primary" class="full-width" />
        </div>
      </div>
    </div>
    <DialogSuccess @hide="resetCart" v-if="hasResultData" :data="resultData" />
  </q-page>
</template>

<script>
import { reduce, isEmpty } from 'lodash-es'
import List from './List'
import Client from './Client'
import NewProduct from './NewProduct/Index'
import { randomProducts } from './mock'
import { productBuilder } from './utils'
import DialogSuccess from './DialogSuccess'

export default {
  name: 'PagePDV',
  components: { List, Client, NewProduct, DialogSuccess },
  data () {
    return {
      error: false,
      saving: false,
      resultData: {},
      cpf: this.$store.state.auth.user.cpf || '',
      items: randomProducts(this.$store.state.products)
    }
  },
  computed: {
    total () {
      return reduce(this.items, (acc, current) => {
        return acc + current.total
      }, 0)
    },
    hasResultData () {
      return !isEmpty(this.resultData)
    },
    payload () {
      return {
        'cpf': this.cpf,
        'items': this.items.map(row => {
          return {
            itemId: row.id,
            quantity: row.qtd
          }
        })
      }
    }
  },
  watch: {
    error (val) {
      if (!val || isEmpty(val)) {
        return
      }

      this.$q.notify({
        color: 'red',
        message: val
      })
    },
    saving (val) {
      (val)
        ? this.$q.loading.show({
          message: 'Salvando Carrinho'
        })
        : this.$q.loading.hide()
    }
  },
  methods: {
    onNewProduct (product) {
      this.items.push(productBuilder(product))
    },
    async save () {
      try {
        this.saving = true
        const { data } = await this.$axios.post('/market/user/buy', { ...this.payload })
        this.resultData = data
      } catch (err) {
        this.error = err.message
        console.error(err)
      } finally {
        this.saving = false
      }
    },
    resetCart () {
      this.saving = false
      this.items = []
      this.resultData = {}
    }
  }
}
</script>

<style lang="scss" scoped>
#pdv-index {
  h1, h2 {
    margin: 0;
    padding: 0;
    text-align: center;
    font-weight: bold;
    small {
      font-size: 0.8em;
    }
  }
  h1 {
    font-size: 2em;
    line-height: 2.5em;
  }
  h2 {
    font-size: 2.5em;
    line-height: 3em;
  }
}
</style>
