export { ref, computed } from 'vue';
export { getResidents, getCharactersFromOwnDatabase } from '../../api/axios';
import { Character } from '../../api/models/api_models';
import exceptionHandler from '../shared/utils/exceptions/exceptionHandler';
import CharacterCard from '../home/components/CharacterCard.vue';
import CharacterFullCard from '../home/components/CharacterFullCard.vue';
import CharacterModal from '../home/components/CharacterModal.vue';
import SearchInput from '../home/components/SearchInput.vue';

export {
  exceptionHandler,
  CharacterCard,
  CharacterFullCard,
  CharacterModal,
  SearchInput,
  Character,
};
