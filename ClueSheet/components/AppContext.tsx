import { Dispatch, createContext, useContext, useReducer } from "react";

type SectionType = {
  label: string;
  options: string[];
};

type GameInfo = SectionType[];

type AppContextType = {
  state: GameInfo;
  dispatch: Dispatch<ACTIONTYPE>;
};

type ACTIONTYPE = { type: "update"; payload: Partial<AppContextType> };

const data = [
  {
    label: "Pessoas",
    options: ["Mustard", "Plum", "Green", "Peacock", "Scarlett", "White"],
  },
  {
    label: "Armas",
    options: [
      "Punhal",
      "Candelabro",
      "Revólver",
      "Corda",
      "Cano de Chumbo",
      "Chave Inglesa",
    ],
  },
  {
    label: "Salas",
    options: [
      "Entrada",
      "Sala",
      "Sala Jantar",
      "Salão Baile",
      "Jardim Inverno",
      "Sala Bilhar",
      "Biblioteca",
      "Escritóro",
    ],
  },
] as GameInfo;

const AppContext = createContext<AppContextType>(null);

function reducer(state: GameInfo, action: ACTIONTYPE): GameInfo {
  switch (action.type) {
    case "update": {
      return { ...state };
    }
    default:
      return { ...state };
  }
}

export function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const state = useContext(AppContext);
  if (typeof state === "undefined") {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return state;
}
