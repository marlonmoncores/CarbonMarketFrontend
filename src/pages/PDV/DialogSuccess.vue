<template>
  <q-dialog v-on="$listeners" v-model="isOpen">
    <q-card>
      <!-- <q-card-section>
        <div class="text-h6">Sucesso</div>
      </q-card-section> -->

      <q-card-section>
        <QBanner class="bg-blue text-white">
          Compra Armazenada com sucesso
        </QBanner>

        <q-separator spaced />

        <q-chip class="co2-ship" color="light-blue-9" text-color="white">
          <q-avatar icon="cloud" color="light-blue-10" text-color="white" />
          {{ data.totalghg | number }}
        </q-chip>

        <q-separator spaced />

        <q-chip class="co2-ship" color="light-blue-9" text-color="white">
          <q-avatar icon="bookmarks" color="light-blue-10" text-color="white" />
          {{ data.gradeghg }}
        </q-chip>

        <q-separator spaced />

        <q-chip class="co2-ship" color="light-blue-9" text-color="white">
          <q-avatar icon="directions_car" color="light-blue-10" text-color="white" />
          {{ data.km_car | number }}
        </q-chip>

        <q-separator spaced />

        <q-chip class="co2-ship" color="light-blue-9" text-color="white">
          <q-avatar icon="invert_colors" color="light-blue-10" text-color="white" />
          {{ data.no_baths }}
        </q-chip>

        <q-separator spaced />

        <q-chip class="co2-ship" color="light-blue-9" text-color="white">
          <q-avatar icon="eco" color="light-blue-10" text-color="white" />
          {{ data.totalH2O | number }}
        </q-chip>

      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'DialogSuccess',
  data () {
    return {
      isOpen: true
    }
  },
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
.co2-ship {
  font-size: 1.5em;
}
</style>
