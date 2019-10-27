<template>
  <q-page>
    <div class="flex q-pa-md row q-gutter-col-md">
      <div class="col-md-6 col-12">
        <q-chip class="co2-ship" color="light-blue-9" text-color="white">
          <q-avatar icon="cloud" color="light-blue-10" text-color="white" />
          9999999
        </q-chip>
      </div>
      <div class="col-md-6 col-12">
        <div class="row">
          <q-select v-model="filter.year" :options="years" label="Ano" class="col-6" />
          <q-select v-model="filter.month" :options="months" label="Mês" class="col-6" />
        </div>
      </div>
    </div>
    <div class="q-pa-md">
      <q-table
        title="Produtos"
        v-bind="{ data, columns }"
        row-key="id"
      />
    </div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'
import { years, months } from './utils'

export default {
  name: 'PageIndex',
  data () {
    return {
      years: [...years],
      months: [...months],
      filter: {
        year: new Date().getFullYear(),
        month: (months[new Date().getMonth()])
      }
    }
  },
  computed: {
    ...mapState(['products']),
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
    data () {
      return [...this.products]
    }
  }
}
</script>

<style lang="scss" scoped>
.co2-ship {
  font-size: 3em
}
</style>
