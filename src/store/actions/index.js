export default function reducer(state, action) {

    switch (action.type) {
        case "FETCH_DATA":
            return {...state , boiler: {...state, boilers:[{}]}};

        default:
            return state;
    }
}