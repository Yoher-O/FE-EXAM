import axios from "axios";
const uri = "https://www.breakingbadapi.com/api";
export const episodies = {
  state: {
    episodies: []
  },
  reducers: {
    fetchedEpisodies(state: any, payload: any) {
      return {
        ...state,
        episodies: payload
      };
    }
  },
  effects: (dispatch: any) => ({
    fetchEpisodies() {
      axios
        .get(`${uri}/episodes`)
        .then(async datax => {
          dispatch.episodies.fetchedEpisodies(await datax.data);
        })
        .catch(err => console.log(err));
    }
  })
};

export default episodies;
