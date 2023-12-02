<template>
  <q-input
    rounded
    outlined
    v-model="searchText"
    label="Buscar por ID"
    class="search-input"
    bg-color="white"
    @keypress="validateNumberInput"
    @keyup.enter="searchLocation"
  >
    <template v-slot:prepend>
      <q-icon name="search" color="primary" class="cursor-pointer" />
    </template>
    <template v-slot:append>
      <q-icon
        name="close"
        color="primary"
        @click="clearSearch"
        class="cursor-pointer"
      />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const searchText = ref('');
const emit = defineEmits(['search']);

const searchLocation = () => {
  if (searchText.value !== '') {
    emit('search', searchText.value);
  }
};

const clearSearch = () => {
  searchText.value = '';
  emit('search', '');
};

const validateNumberInput = (event: KeyboardEvent) => {
  const isValidInput = /^[0-9\b]+$/.test(event.key);
  if (!isValidInput) {
    event.preventDefault();
  }
};
</script>
