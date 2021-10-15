export default function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, boiler: { ...state, boilers: action.payload } };

      case 'MATCH_BOILER':
        return { ...state, matchBoiler: { ...state, showbar : !state.matchBoiler.showbar } };

    default:
      return state;
  }
}
