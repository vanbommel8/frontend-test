export default function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, boilers: action.payload };

    case "MATCH_BOILER":
      if (state.matchBoiler.arrayProdotti.includes(action.payload)) {
        console.log("presente");

        const result_array = state.matchBoiler.arrayProdotti.filter(
          (e) => e !== action.payload
        );

        console.log("array filtro", result_array);
        return {
          ...state,
          matchBoiler: {
            arrayProdotti: result_array,
          },
        };
      } else {
        return {
          ...state,
          matchBoiler: {
            arrayProdotti: [...state.matchBoiler.arrayProdotti, action.payload],
          },
        };
      }

    case "IS_WISHLIST":
      return { ...state, isWishList: !state.isWishList }

    default:
      return state;
  }
}
