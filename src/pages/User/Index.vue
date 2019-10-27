<template>
  <q-page>
    <div class="flex q-pa-md row q-gutter-col-md">
      <div class="col-12">
        <div class="row">
          <q-select v-model="filter.year" :options="years" label="Ano" class="col-6" />
          <q-select v-model="filter.month" :options="months" label="Mês" class="col-6" />
        </div>
        <q-separator spaced />
      </div>
      <Summary v-bind="{ current }" :consumption="consumption" />
    </div>
    <div class="q-pa-md">
      <QBtnToggle
      spread
        v-model="current"
        :options="[
          {label: 'Original', value: 'original'},
          {label: 'Sugestão', value: 'suggestion'}
        ]" />
      <q-separator spaced />
      <ProductsTable v-bind="{ current }" :data="products" />
    </div>
  </q-page>
</template>

<script>
import { get } from 'lodash-es'
import { years, months, wait } from './utils'
import Summary from './Summary'
import ProductsTable from './ProductsTable'

export default {
  name: 'PageIndex',
  components: { Summary, ProductsTable },
  data () {
    return {
      current: 'original',
      reportData: {},
      years: [...years],
      months: [...months],
      filter: {
        year: new Date().getFullYear(),
        month: (months[new Date().getMonth()])
      }
    }
  },
  watch: {
    'filter.year': 'loadData',
    'filter.month': 'loadData'
  },
  computed: {
    consumption () {
      return this.baseData.consumption || {}
    },
    baseData () {
      return get(this.reportData, [this.current], {})
    },
    products () {
      return this.baseData.items || []
    },
    columns () {
      return [{
        name: 'name',
        label: 'Name',
        field: row => row.name
      }, {
        name: 'amount',
        label: 'Value',
        field: row => row.amount
      }]
    },
    payload () {
      return {
        ...this.filter,
        month: months.indexOf(this.filter.month) + 1
      }
    }
  },
  methods: {
    async loadData () {
      this.$q.loading.show({
        message: 'Carregando dados'
      })

      await wait()

      try {
        const { data } = await this.$axios.put('/user/report', {
          ...this.payload
        })

        this.reportData = data
      } catch (err) {
        this.$q.notify({
          color: 'red',
          message: err.message
        })
      } finally {
        this.$q.loading.hide()
      }
    }
  },
  mounted () {
    this.loadData()
  }
}
</script>
