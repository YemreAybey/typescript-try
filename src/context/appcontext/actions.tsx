import axios from "axios";

export const getEpisodes = async () => {
  const episodes = await axios.get(
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
  );
  console.log(episodes.data._embedded.episodes);
  return episodes.data._embedded.episodes;
};

export const add_favourites = (): object => {
  return {
    type: "ADD_FAVOUITES",
    payload: { name: "new episode", id: "new id" }
  };
};
