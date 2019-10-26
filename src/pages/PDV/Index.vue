<template>
  <q-page id="pdv-index" class="flex fit">
    <div class="row q-col-gutter-sm full-width">
      <div class="col-7 bg-blue-grey-3 text-white">
        <h1>Tamako Market</h1>
        <div class="items-list">
          <List v-bind="{ items }" />
        </div>
      </div>
      <div class="col-5">
        <h2 class="text-negative">{{ total | money }}</h2>
        <Client v-model="cpf" />
        <NewProduct />
      </div>
    </div>
  </q-page>
</template>

<script>
import { reduce } from 'lodash-es'
import List from './List'
import Client from './Client'
import NewProduct from './NewProduct'
import { randomProducts } from './mock'

export default {
  name: 'PagePDV',
  components: { List, Client, NewProduct },
  data () {
    return {
      cpf: '',
      items: randomProducts(this.$store.state.products)
    }
  },
  computed: {
    total () {
      return reduce(this.items, (acc, current) => {
        return acc + current.total
      }, 0)
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
