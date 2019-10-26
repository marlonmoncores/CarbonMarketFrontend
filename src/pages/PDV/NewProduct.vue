<template>
  <div>
    ~
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NewProduct',
  computed: {
    ...mapState(['products'])
  }
}
</script>
