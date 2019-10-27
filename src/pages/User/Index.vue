<template>
  <q-page>
    <div class="flex q-pa-md row items-start q-gutter-md">
      <div class="col-md-6">
        <q-chip class="co2-ship" color="light-blue-9" text-color="white">
          <q-avatar icon="cloud" color="light-blue-10" text-color="white" />
          9999999
        </q-chip>
      </div>
    </div>
    <div class="q-pa-md">
      <q-table
        title="Produtos"
        v-bind="table"
        row-key="id"
      />
    </div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PageIndex',
  computed: {
    ...mapState(['products']),
    table () {
      return {
        columns: [{
          name: 'name',
          label: 'Name',
          field: row => row.name
        }, {
          name: 'amount',
          label: 'Value',
          field: row => row.amount
        }],
        data: [...this.products]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.co2-ship {
  font-size: 3em
}
</style>
