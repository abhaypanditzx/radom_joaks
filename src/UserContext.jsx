import {createContext, useState ,useEffect} from "react";
import axios from 'axios';

const ThemeContext = createContext();
export const ContextProvider =({children})=>{

const [data,setData]=  useState([])

 const fetchData = async () => {
      try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        console.log(response.data);
        setData(response.data)

      } catch (error) {
        console.log(error);
      }
    };
useEffect(() => {
    fetchData();
  }, []);
	
const [name, setName] = useState("abhay")
return(
<ThemeContext.Provider value={{name, data, setData ,fetchData} }>
{children}
</ThemeContext.Provider>
	)
}
export default  ThemeContext;
