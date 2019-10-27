<template>
  <div class="row col-12">
    <div class="col-12 col-sm-4">
      <q-chip class="co2-ship" :color="colors.content" text-color="white">
        <q-avatar icon="cloud" :color="colors.icon" text-color="white" />
        {{ consumption.totalghg | number }}
        <q-tooltip v-model="tooltips.totalghg">
          Geração de CO2
        </q-tooltip>
      </q-chip>
    </div>
    <div class="col-12 col-sm-4">
      <q-chip class="co2-ship" :color="colors.content" text-color="white">
        <q-avatar icon="directions_car" :color="colors.icon" text-color="white" />
        {{ consumption.km_car | number }}
        <q-tooltip v-model="tooltips.km_car">
          Equivalente em KM de um carro
        </q-tooltip>
      </q-chip>
    </div>
    <div class="col-12 col-sm-4">
      <q-chip class="co2-ship" :color="colors.content" text-color="white">
        <q-avatar icon="invert_colors" :color="colors.icon" text-color="white" />
        {{ consumption.no_baths }}
        <q-tooltip v-model="tooltips.no_baths">
          Equivalente em banhos tomados
        </q-tooltip>
      </q-chip>
    </div>
  </div>
</template>

<script>
import { wait } from './utils'

export default {
  data () {
    return {
      tooltips: {
        totalghg: true,
        km_car: true,
        no_baths: true
      }
    }
  },
  props: {
    current: String,
    consumption: Object
  },
  computed: {
    colors () {
      if (this.current === 'original') {
        return {
          icon: 'orange-10',
          content: 'orange-9'
        }
      }

      return {
        icon: 'light-green-10',
        content: 'light-green-9'
      }
    }
  },
  methods: {
    async tour () {
      const { tooltips } = this
      await wait()
      tooltips.totalghg = false
      await wait()
      tooltips.km_car = false
      await wait()
      tooltips.no_baths = false
    }
  },
  mounted () {
    setTimeout(() => {
      this.tour()
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.co2-ship {
  font-size: 2em;
  display: flex;
}
@media (min-width: 600px) {
  .co2-ship {
    // display: inline-flex;
  }
}
</style>
