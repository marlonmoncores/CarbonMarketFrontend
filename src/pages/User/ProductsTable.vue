<template>
  <q-table
    :title="title"
    v-bind="{ data, columns }"
    :pagination="{ rowsPerPage: 50 }"
    row-key="id"
  />
</template>

<script>
export default {
  props: {
    current: String,
    data: Array
  },
  computed: {
    title () {
      return `Produtos [${this.current}]`
    },
    columns () {
      return [{
        name: 'name',
        label: 'Name',
        field: row => row.item.name
      }, {
        name: 'quantity',
        label: 'Quantidade',
        field: row => row.quantity
      }, {
        name: 'carbon',
        label: 'Carbon',
        field: row => row.item.carbonServing * row.quantity
      }, {
        name: 'water',
        label: 'Water',
        field: row => row.item.waterServing * row.quantity
      }]
    }
  }
}
</script>
