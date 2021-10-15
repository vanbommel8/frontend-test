export default function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, boiler: { ...state.boiler, boilers: action.payload } };

      case 'MATCH_BOILER':
          
          if(state.matchBoiler.arrayProdotti.includes(action.payload)){
    
            const result_array=state.matchBoiler.arrayProdotti.filter((id)=>  

                  id!== action.payload
            )

             console.log(result_array);
            return { ...state, matchBoiler: { ...state.matchBoiler, arrayProdotti:result_array } };

          }else{

           
            return { ...state, matchBoiler: { ...state.matchBoiler,  id:action.payload } }; 
          } 
        /*if (state.product.includes(action.payload)) {
          const result_array = state.product.filter(
            (e) => e !== action.payload
          );
          return { ...state, product: result_array };
        } else {
          return { ...state, product: [...state.product, action.payload] };
        } */

       // return { ...state, matchBoiler: { ...state.matchBoiler, arrayProdotti:[],  id:action.payload } };

   
        
    default:
      return state;
  }
}
