export default function reducer(state, action) {

    switch (action.type) {
        case "FECH_DATA":
            return {...state , basket: {...state.basket, opened: !state.basket.opened}};

        case "FILTER_BOOK":
        return {...state,
            filters:{...state.filters,
                category:action.payload,
                filterdBooks: (action.payload==='All')?booksMock: booksMock.filter((book) => book.category ===action.payload)},


        };

        case "FILTER_TITLE":
            return {...state,
                filters:{...state.filters,
                    title:action.payload,
                    filterdBooks: (action.payload.length>0)? booksMock.filter((book) =>
                        book.title.toLowerCase() === action.payload):booksMock},


            };



        default:
            return state;
    }
}