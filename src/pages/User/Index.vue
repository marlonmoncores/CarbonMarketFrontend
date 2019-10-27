<template>
  <q-page>
    <div class="flex q-pa-md row q-gutter-col-md">
      <div class="row col-12">
        <div class="col-12 col-sm-4">
          <q-chip class="co2-ship" color="light-blue-9" text-color="white">
            <q-avatar icon="cloud" color="light-blue-10" text-color="white" />
            {{ reportData.totalghg | number }}
            <q-tooltip v-model="tooltips.totalghg">
              Geração de CO2
            </q-tooltip>
          </q-chip>
        </div>
        <div class="col-12 col-sm-4">
          <q-chip class="co2-ship" color="light-blue-9" text-color="white">
            <q-avatar icon="directions_car" color="light-blue-10" text-color="white" />
            {{ reportData.km_car | number }}
            <q-tooltip v-model="tooltips.km_car">
              Equivalente em KM de um carro
            </q-tooltip>
          </q-chip>
        </div>
        <div class="col-12 col-sm-4">
          <q-chip class="co2-ship" color="light-blue-9" text-color="white">
            <q-avatar icon="invert_colors" color="light-blue-10" text-color="white" />
            {{ reportData.no_baths }}
            <q-tooltip v-model="tooltips.no_baths">
              Equivalente em banhos tomados
            </q-tooltip>
          </q-chip>
        </div>
      </div>
      <div class="col-12">
        <q-separator spaced />
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
import { years, months, wait } from './utils'

export default {
  name: 'PageIndex',
  data () {
    return {
      tooltips: {
        totalghg: true,
        km_car: true,
        no_baths: true
      },
      reportData: {
        gradeghg: '',
        km_car: 0,
        no_baths: 0,
        totalH2O: 0,
        totalghg: 0
      },
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
    },
    async tour () {
      const { tooltips } = this
      await wait()
      tooltips.totalghg = false
      await wait()
      tooltips.km_car = false
      await wait()
      tooltips.no_baths = false
    }
  },
  mounted () {
    this.loadData()
    setTimeout(() => {
      this.tour()
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.co2-ship {
  font-size: 2em;
  display: flex;
}
@media (min-width: 600px) {
  .co2-ship {
    // display: inline-flex;
  }
}
</style>
