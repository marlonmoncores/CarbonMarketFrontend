<template>
  <q-select
    v-model="model"
    use-input
    input-debounce="0"
    :options="options"
    @filter="filterFn"
    class="full-width"
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey">
          Sem resultados
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script>
import { map, isEmpty, filter, deburr, lowerCase, find } from 'lodash-es'
import { mapState } from 'vuex'

const sanitize = val => lowerCase(deburr(val))

const extractOptions = (products, key) => {
  if (isEmpty(key)) {
    return products
  }

  const val = sanitize(key)

  return filter(products, name => {
    return sanitize(name).includes(val)
  })
}

export default {
  name: 'ProductSelect',
  data () {
    return {
      model: null,
      options: []
    }
  },
  computed: {
    ...mapState(['products']),
    productNames () {
      return map(this.products, 'name')
    },
    selected () {
      return find(this.products, product => {
        return product.name === this.model
      })
    }
  },
  watch: {
    selected (val) {
      this.$emit('input', { ...val })
    }
  },
  methods: {
    filterFn (val, update, abort) {
      return update(() => {
        this.options = extractOptions(this.productNames, val)
      })
    }
  }
}
</script>
