<template>
  <q-list bordered separator>
    <q-item v-ripple v-for="(item, index) in items" :key="index">
      <q-item-section>
        {{ item.name }}
        <q-item-label overline>{{ item.qtd }}x {{ item.amount }}</q-item-label>
      </q-item-section>
      <q-item-section class="text-white" side>{{ item.total | money }}</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  props: {
    items: Array
  }
}
</script>
