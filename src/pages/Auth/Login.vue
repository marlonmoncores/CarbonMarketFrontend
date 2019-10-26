<template>
  <q-form>
    <br>
    <q-input
      filled
      counter
      type="number"
      v-model="cpf"
      label="Seu CPF *"
      lazy-rules
      :rules="[ val => val && val.length === 11 || 'Informe seu CPF']"
    />
    <br />
    <q-input
      filled
      type="password"
      v-model="password"
      label="Sua senha *"
      lazy-rules
    />

    <br>

    <div>
      <q-btn @click="login"
        :disable="!isValid"
        class="full-width"
        label="Entrar"
        type="submit"
        color="primary"/>
    </div>
  </q-form>
</template>

<script>
import { isEmpty } from 'lodash-es'

export default {
  name: 'PageLogin',
  data () {
    return {
      cpf: '',
      password: ''
    }
  },
  computed: {
    isValid () {
      return !isEmpty(this.password) && this.cpf.length === 11
    }
  },
  methods: {
    async login () {
      this.$q.loading.show({ message: 'Validando seus dados...' })
      const hide = () => this.$q.loading.hide()

      try {
        await this.$axios.post('/auth', {
          cpf: this.cpf,
          password: this.password
        })
        this.$router.replace('/app')
      } catch (err) {
        this.$q.notify({
          color: 'red',
          message: err.message
        })
      } finally {
        hide()
      }
    }
  }
}
</script>
