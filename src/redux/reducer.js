const initialState = {
    country:null,
    isFetchingSingle:false,
    errorMessage:null,
    countries:[],
    filtered:[],
    mode:"dark"
}

export default function(state=initialState, action){
    switch(action.type){
        case "GET_ALL_COUNTRIES_SUCCESS":
            return { ...state, countries: action.payload, filtered: action.payload}

        case "CHANGE_MODE":
            return { ...state, mode: action.payload }

        case "FILTER_BY_REGION":
            let region = action.payload.toLowerCase().replace(/\s+/, '');
            if (region == "all") return { ...state, filtered:state.countries }
            let regex = new RegExp(region)
            let filtered = state.countries.filter((c) => regex.test(c.region.toLowerCase().replace(/\s+/, '')));
            return {...state, filtered}

        case "FILTER_BY_COUNTRY":
            let country = action.payload.toLowerCase().replace(/\s+/, '');
            let regex2 = new RegExp(country)
            let filtered2 = state.countries.filter((c) => regex2.test(c.name.toLowerCase().replace(/\s+/, '')) || regex2.test(c.capital.toLowerCase().replace(/\s+/, '')));
            return { ...state, filtered:filtered2 }

        case "GET_COUNTRY_START":
            return {...state, isFetchingSingle:true, country:null}

        case "GET_COUNTRY_SUCCESS":
            return { ...state, isFetchingSingle: false, country:action.payload }

        case "GET_COUNTRY_ERROR":
            return { ...state, isFetchingSingle: false, errorMessage:"Unkown Country" }
        default:
            return state;
    }
}