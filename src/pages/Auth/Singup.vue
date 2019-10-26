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
      <q-btn @click="save"
        :disable="!isValid"
        class="full-width"
        label="Cadastrar"
        type="submit"
        color="primary"/>
    </div>
  </q-form>
</template>

<script>
import { isEmpty } from 'lodash-es'

export default {
  name: 'PageSigup',
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
  mounted () {

  },
  methods: {
    async save () {
      this.$q.loading.show({ message: 'Criando usuário' })
      const hide = () => this.$q.loading.hide()

      try {
        await this.$axios.post('/user', {
          cpf: this.cpf,
          password: this.password
        })
        this.$router.replace('/auth/login')
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
