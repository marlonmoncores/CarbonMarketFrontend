<template>
  <q-list bordered separator>
    <q-item clickable v-ripple>
      <q-item-section>
        Cliente
        <q-popup-edit
          title="Informe o CPF do cliente"
          v-model="cpf"
          :cover="false">
          <q-input
            :rules="[
              val => (val || '').length === 11 ? true : 'Informe um CPF válido'
            ]"
            v-model="cpf"
            dense autofocus counter />
        </q-popup-edit>
        <q-item-label
          :class="{ 'text-red': !isValid }" overline>
          <q-icon name="edit" :color="isValid ? 'grey' : 'red'" />
          {{ client }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { isEmpty } from 'lodash-es'

export default {
  name: 'Client',
  props: {
    value: String
  },
  computed: {
    cpf: {
      set (value) {
        this.$emit('input', value)
      },
      get () {
        return this.value
      }
    },
    isValid () {
      return this.value.length === 11
    },
    client () {
      return isEmpty(this.value)
        ? 'Não identificado'
        : this.value
    }
  }
}
</script>
