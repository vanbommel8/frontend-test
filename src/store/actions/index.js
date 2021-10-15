export default function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, boiler: { ...state.boiler, boilers: action.payload } };

      case 'MATCH_BOILER':

         return {...state,matchBoiler:{arrayProdotti:[...state.matchBoiler.arrayProdotti,action.payload]}}

    default:
      return state;
  }
}
