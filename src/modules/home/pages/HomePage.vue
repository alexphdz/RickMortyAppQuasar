<template>
  <q-page-container :style="{ backgroundColor: background }">
    <q-page>
      <div class="row justify-center q-pt-md">
        <search-input @search="searchLocation" />
        <q-btn
          @click="exploreDatabase"
          class="q-ml-md"
          color="primary"
          padding="md lg"
          no-caps
          size="md"
          rounded
          label="Explorar desde base de datos"
        />
      </div>
      <div v-if="!seeDatabaseData">
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
      </div>
      <div v-else>
        <div v-if="charactersDbList.length != 0">
          <div class="row justify-center q-pt-md">
            <div
              v-for="character in charactersDbList"
              v-bind:key="character.id"
              class="col-2"
            >
              <character-full-card :character="character" />
            </div>
          </div>
        </div>
      </div>
      <character-modal :character="selectedCharacter!" />
    </q-page>
  </q-page-container>
</template>
<script lang="ts" setup>
import {
  Character,
  CharacterCard,
  CharacterFullCard,
  CharacterModal,
  computed,
  exceptionHandler,
  getCharactersFromOwnDatabase,
  getResidents,
  ref,
  SearchInput,
} from '../exports';

const searchText = ref<string>('');
const charactersList = ref<Character[]>([]);
const charactersDbList = ref<Character[]>([]);
const selectedCharacter = ref<Character | null>(null);
const seeDatabaseData = ref<boolean>(false);

const searchLocation = async (query: string) => {
  seeDatabaseData.value = false;
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

const exploreDatabase = async () => {
  seeDatabaseData.value = true;
  try {
    await getCharactersFromDatabase();
  } catch (error) {
    exceptionHandler(error);
  }
};

const getCharactersFromDatabase = async () => {
  const characters = await getCharactersFromOwnDatabase();
  charactersDbList.value = characters;
};
</script>

<style lang="scss">
.search-input {
  font-size: 22px;
}
</style>
