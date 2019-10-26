<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-positive">
      <q-toolbar>
        <q-toolbar-title>
          Carbon Market
        </q-toolbar-title>

        <div>PDV</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'PDVLayout'
}
</script>
