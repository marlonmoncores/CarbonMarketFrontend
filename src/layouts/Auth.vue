<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="background: #24292e" >
      <q-toolbar>
        <q-toolbar-title>
          Carbon Market
        </q-toolbar-title>
        <div>Auth</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <q-tabs class="bg-primary text-white ">
          <q-route-tab
            label="Identifique-se"
            icon="person"
            to="/auth/login"
            exact
          />
          <q-route-tab
            label="Cadastra-se"
            icon="person_add"
            to="/auth/singup"
            exact
          />
        </q-tabs>
        <div class="flex flex-center row">
          <div class="col-12 col-lg-6">
            <router-view />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Auth'
}
</script>
