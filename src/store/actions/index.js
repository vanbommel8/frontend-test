export default function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, boiler: { ...state, boilers: action.payload } };

    default:
      return state;
  }
}
