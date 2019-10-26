<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          Carbon Market
        </q-toolbar-title>

        <div>
          <q-chip icon="person">
            {{ user.cpf }}
          </q-chip>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserLayout',
  computed: {
    ...mapState('auth', ['user'])
  }
}
</script>
