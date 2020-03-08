import React, { createContext, useReducer } from "react";
export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: { medium: string; original: string };
  summary: string;
}

interface Iinitial {
  episodes: IEpisode[] | null;
  favourites: IEpisode[] | null;
}

interface IContext {
  state: Iinitial | null;
  dispatch: React.Dispatch<Action> | null;
}

const initialState: Iinitial = {
  episodes: null,
  favourites: null
};

const initialContext: IContext = {
  state: null,
  dispatch: null
};

type Action =
  | { type: "FETCH_DATA"; payload: IEpisode[] }
  | { type: "ADD_FAVOURITES"; payload: IEpisode };

export const Store = createContext<IContext>(initialContext);

const reducer = (state: Iinitial, action: Action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    // case "ADD_FAVOURITES":
    //   return { ...state, favourites: [...state.favourites, action.payload] };
    default:
      return state;
  }
};

export default (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
