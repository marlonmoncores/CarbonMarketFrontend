<template>
  <q-form>
    <br>
    <q-input
      filled
      type="number"
      v-model="cpf"
      label="Seu CPF *"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Informe seu CPF']"
    />

    <q-input
      filled
      type="password"
      v-model="password"
      label="Sua senha *"
      lazy-rules
    />

    <br>

    <div>
      <q-btn class="full-width" label="Cadastrar" type="submit" color="primary"/>
    </div>
  </q-form>
</template>

<script>
export default {
  name: 'PageSigup',
  data () {
    return {
      cpf: '',
      password: ''
    }
  }
}
</script>
