import axios from "axios";
const uri = "https://www.breakingbadapi.com/api";
export const characters = {
  state: {
    characters: []
  },
  reducers: {
    fetchedCharacters(state: any, payload: any) {
      return {
        ...state,
        characters: payload
      };
    }
  },
  effects: (dispatch: any) => ({
    fetchCharacter() {
      axios
        .get(`${uri}/characters`)
        .then(async datax => {
          dispatch.characters.fetchedCharacters(await datax.data);
        })
        .catch(err => console.log(err));
    }
  })
};

export default characters;
