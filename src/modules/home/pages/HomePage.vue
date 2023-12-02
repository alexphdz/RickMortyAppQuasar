<template>
  <q-page-container :style="{ backgroundColor: background }">
    <q-page>
      <div class="row justify-center q-pt-md">
        <search-input @search="searchLocation" />
      </div>
      <div v-if="charactersList.length != 0">
        <div class="row justify-center q-pt-md">
          <div
            v-for="character in charactersList"
            v-bind:key="character.id"
            class="col-2"
          >
            <character-card
              :character="character"
              @click="openCharacterModal(character)"
            />
          </div>
        </div>
      </div>
      <div v-else>
        <div class="row justify-center q-pt-xl">
          <div class="column items-center" style="height: 150px">
            <div class="col">
              <q-icon
                name="sentiment_very_dissatisfied"
                color="primary"
                size="100px"
              ></q-icon>
            </div>
            <div class="col q-pt-md">
              <div class="text-h5 q-mt-md">No se encontraron resultados.</div>
            </div>
          </div>
        </div>
      </div>
      <character-modal :character="selectedCharacter!" />
    </q-page>
  </q-page-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { getResidents } from '../../../api/axios';
import { Character } from '../../../api/models/api_models';
import CharacterCard from '../components/CharacterCard.vue';
import CharacterModal from '../components/CharacterModal.vue';
import SearchInput from '../components/SearchInput.vue';
const searchText = ref<string>('');
const charactersList = ref<Character[]>([]);
const selectedCharacter = ref<Character | null>(null);

const searchLocation = async (query: string) => {
  try {
    searchText.value = query;
    if (query !== '') {
      const locationId = parseInt(query);
      const characters: Character[] = await getResidents(locationId);
      charactersList.value = characters;
    } else {
      charactersList.value = [];
    }
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
  }
};

const background = computed(() => {
  const locationId = searchText.value == '' ? 0 : parseInt(searchText.value);
  if (locationId <= 50) {
    return '#45FFCA';
  } else if (locationId > 50 && locationId < 80) {
    return '#AED2FF';
  } else {
    return '#FC2947';
  }
});

const openCharacterModal = (character: Character) => {
  selectedCharacter.value = character;
};
</script>

<style lang="scss">
.search-input {
  font-size: 22px;
}
</style>
