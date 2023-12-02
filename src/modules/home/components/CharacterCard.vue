<template>
  <q-card class="my-card q-mr-lg">
    <q-img :src="character.image">
      <div class="absolute-bottom text-subtitle1 text-center text-bold">
        {{ character.name }}
      </div></q-img
    >
    <q-card-section>
      <div class="text-h5">{{ character.status }}</div>
      <div class="text-subtitle1">{{ character.species }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { Character } from 'src/api/models/api_models';
interface Props {
  character: Character;
}
// default values props
const props = withDefaults(defineProps<Props>(), {});
const { character } = toRefs(props);
</script>

<style lang="scss" scoped>
.my-card {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.my-card:hover {
  transform: scale(1.11);
}
</style>
