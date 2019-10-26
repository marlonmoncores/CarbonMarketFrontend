<template>
  <div id="q-app">
    <q-ajax-bar
      ref="bar"
      position="top"
      color="accent"
      size="15px"
      skip-hijack
    />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
