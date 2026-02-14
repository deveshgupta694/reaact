import {useState , useEffect} from 'react'


//my coustum hook
function useCurrencyHook(currency){//request for which currency u want data
    const [data, setData] = useState({})//data as object{K -> V} 
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)//data in form of STRING
            .then((res) => res.json())//STRING -> JSON
            .then((res) => setData(res[currency]))//get actual object data from map[currency]
    } ,[currency])//rerendur on changing value of currency
    return data;//return that {K: V}object of that currency type
}

export default useCurrencyHook;