<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn @click="menuToggle" flat round dense icon="menu" />
          Carbon Market
        </q-toolbar-title>

        <div>
          <q-chip small size="sm" color="blue-grey" class="text-white" icon="person">
            {{ user.cpf }}
          </q-chip>
        </div>
      </q-toolbar>
    </q-header>

    <!-- sidebar -->
    <q-drawer
      v-model="menuIsOpen"
      :width="200"
      :breakpoint="700"
      elevated
    >
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <q-separator spaced />
        <q-item to="/app" exact clickable v-ripple>
          <q-item-section>
            Dashboard
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item to="/app/scan" exact clickable v-ripple>
          <q-item-section>
            QRCode Scanner
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <!-- /sidebar -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserLayout',
  data () {
    return {
      menuIsOpen: false
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    menuToggle () {
      this.menuIsOpen = !this.menuIsOpen
    }
  }
}
</script>
