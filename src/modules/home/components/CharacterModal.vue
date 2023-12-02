<!-- CharacterModal.vue -->
<template>
  <q-dialog v-model="dialogVisible">
    <q-card style="width: 700px; max-width: 80vw">
      <q-card-section horizontal>
        <q-img class="col-5" :src="character.image" />
        <q-card-section class="scroll">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon color="primary" name="person" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6">
                  {{ character.name }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon color="primary" name="info" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6">
                  {{ character.status }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon color="primary" name="pets" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6">
                  {{ character.species }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon color="primary" name="place" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6">
                  {{ character.origin.name }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <div class="text-h6 q-pt-sm">Episodios</div>
          <q-list>
            <q-item-section>
              <q-item-label
                class="text-h6"
                v-for="episode in character.episode"
                v-bind:key="episode"
              >
                <a target="_blank" :href="episode">{{ episode }}</a>
              </q-item-label>
            </q-item-section>
          </q-list>
          <q-card-actions align="right" class="q-pt-md">
            <q-btn
              color="primary"
              no-caps
              label="Cerrar"
              @click="closeDialog"
            />
          </q-card-actions>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, defineProps, toRefs, watchEffect } from 'vue';
import { Character } from '../../../api/models/api_models';

interface Props {
  character: Character;
}
const props = withDefaults(defineProps<Props>(), {});
const { character } = toRefs(props);
const dialogVisible = ref(false);

const closeDialog = () => {
  dialogVisible.value = false;
};

// Observa cambios en la propiedad character para abrir o cerrar el diálogo
watchEffect(() => {
  dialogVisible.value = !!character.value;
});
</script>

<style lang="scss">
/* Estilos según sea necesario */
</style>
