<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Novo produto</div>
      <ProductSelect v-if="!loading" ref="ProductSelect" @input="setProduct" />
      <q-spinner
          v-else
          color="primary"
          size="3em"
        />
      <div class="row q-mt-lg q-col-gutter-sm" v-if="hasProduct">
        <q-input
          class="col-6"
          v-model.number="qtd"
          type="number"
          filled
        />
        <div class="col-6">
          <div class="money">
            {{ product.amount * qtd | money }}
          </div>
        </div>
      </div>
      <div class="q-mt-lg" v-if="hasProduct">
        <q-btn label="Adicionar Produto" @click="save" size="md" class="full-width" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import ProductSelect from './ProductSelect'
import { isEmpty } from 'lodash-es'

export default {
  name: 'NewProduct',
  components: { ProductSelect },
  data () {
    return {
      loading: false,
      product: {},
      qtd: 1
    }
  },
  computed: {
    hasProduct () {
      return !isEmpty(this.product.id)
    }
  },
  watch: {
    qtd (val) {
      if (val <= 0) {
        this.qtd = 1
      }
    }
  },
  methods: {
    setProduct (val) {
      this.product = { ...val }
    },
    save () {
      this.$emit('input', {
        ...this.product,
        qtd: this.qtd
      })

      this.$nextTick(() => {
        this.product = {}
        this.qtd = 1
        this.loading = true

        setTimeout(() => {
          this.loading = false
        }, 500)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.money {
  font-size: 1.5em;
  line-height: 2.5em;
  text-align: right;
}
</style>
