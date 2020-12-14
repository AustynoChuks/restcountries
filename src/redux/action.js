import axios from 'axios'

export const FetchCountries = ()=>(dispatch)=>{
    axios.get("https://restcountries.eu/rest/v2/all")
    .then((response)=>{
        dispatch({type:"GET_ALL_COUNTRIES_SUCCESS", payload:response.data})
    }).catch(err=>{

    })
}


export const FetchCountry = (code) => (dispatch) => {
    dispatch({ type: "GET_COUNTRY_START" })
    axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
        .then((response) => {
            dispatch({ type: "GET_COUNTRY_SUCCESS", payload: response.data })
        }).catch(err => {
            dispatch({ type: "GET_COUNTRY_ERROR" })
        })
}