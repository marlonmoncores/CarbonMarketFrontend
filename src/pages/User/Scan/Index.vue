<template>
  <q-page class="flex flex-center row">
    <div class="col-12 col-lg-6">
      <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit">
        <div v-if="success" class="info-success">
          Nota processada com sucesso
        </div>
        <div v-if="error" class="info-error">
          {{ error }}
        </div>
        <div v-if="sending" class="info-sending">
          Carregando dados da nota fiscal
        </div>
      </qrcode-stream>
    </div>
    <DialogSuccess @hide="resetData" v-if="hasResultData" :data="resultData" />
  </q-page>
</template>

<script>
import { trim, isEmpty } from 'lodash-es'
import { QrcodeStream } from 'vue-qrcode-reader'
import { parseQRError, wait } from './utils'
import isUrl from 'is-url'
import DialogSuccess from '../../PDV/DialogSuccess'

export default {
  name: 'PageScan',
  components: { QrcodeStream, DialogSuccess },
  data () {
    return {
      resultData: {},
      sending: false,
      success: false,
      camera: 'auto',
      result: null,
      error: ''
    }
  },
  computed: {
    hasResultData () {
      return !isEmpty(this.resultData)
    }
  },
  methods: {
    turnCameraOn () {
      this.camera = 'auto'
    },

    turnCameraOff () {
      this.camera = 'off'
    },
    async onDecode (result) {
      this.result = trim(result)
      this.turnCameraOff()
      await wait()

      if (!isUrl(this.result)) {
        this.error = 'Valor inválido'
        await wait()
        this.error = null
        this.turnCameraOn()
        return
      }

      this.sending = true

      try {
        const { data } = await this.$axios
          .post('http://ea34e09c.ngrok.io/user/buy/code', {
            url: this.result
          })

        this.resultData = data

        this.success = true
      } catch (err) {
        console.error(err)
        this.sending = false
        this.success = false
        this.error = err.message
        await wait(1500)
      } finally {
        this.$nextTick(() => {
          this.sending = false
          this.success = false
          this.error = false
          this.turnCameraOn()
        })
      }
    },
    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        this.error = parseQRError(error)
      }
    },
    resetData () {
      this.resultData = {}
    }
  }
}
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}

.info-success,
.info-error,
.info-sending {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, .8);
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.info-success {
  color: green;
}
.info-error {
  color: red;
}
</style>
