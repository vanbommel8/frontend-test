import {useState,useEffect} from 'react';
 import axios from "axios";

 export function useFechData(url){

   const [category, setCategory] = useState({});

  useEffect(() => {
      async function fetchData() {


          const response = await axios.get(
              url
          );
          setCategory(response.data);
      }

      fetchData()
  }, [url]);


  return [category] ;

 }