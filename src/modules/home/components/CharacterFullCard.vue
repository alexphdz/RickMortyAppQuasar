<template>
  <q-card class="my-card q-mr-lg">
    <q-img :src="character.image">
      <div class="absolute-bottom text-subtitle1 text-center text-bold">
        {{ character.name }}
      </div></q-img
    >
    <q-card-section>
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-icon color="primary" name="person" size="20px" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h6">
              {{ character.name }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon color="primary" name="info" size="20px" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle2">
              {{ character.status }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon color="primary" name="pets" size="20px" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle2">
              {{ character.species }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon color="primary" name="place" size="20px" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle2">
              {{ character.origin.name }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
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
  transition: all 0.3s ease-in-out;
}
.my-card:hover {
  transform: scale(1.11);
}
</style>
