import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { FetchCountries } from '../redux/action'
import { FaSearch } from 'react-icons/fa'
import Select from './select'
import { moneyFormat } from '../lib'
class Countries extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getCountriesFn()
    }

    searchCountry = (e)=>{
        this.props.filterCountryFn(e.target.value)
    }

    render() {
        return(
            <div className="container">
                <br/><br/>
                <div className="row space-between">
                    <div className="col-2">
                        <div className="input-group">
                            <input className="search input" onChange={this.searchCountry} placeholder="Search by country's name or capital..."/>
                            <span className="icon left">
                                <FaSearch />
                            </span>
                        </div>
                    </div>
                    <div className="col-4">
                        <Select/>
                    </div>
                </div>
                <div className="row">
                    {
                        this.props.countries.map((country, key)=>(
                            <Link to={`/country/${country.alpha2Code}`} className="card" key={key}>
                                <div className="card-container">
                                    {/* <img src={country.flag} width="100%" height={150}/> */}
                                    <div className="img-placeholder" style={{width:'100%', height:'150px', backgroundImage:`URL(${country.flag})`, backgroundSize:'100%', backgroundRepeat:'no-repeat'}}></div>
                                    <div className="placeholder">
                                        <h3>{country.name}</h3>
                                        <p><b>Population</b>: <span>{moneyFormat(country.population).replace(/\.(0){2}$/, '')}</span></p>
                                        <p><b>Region</b>: <span>{country.region}</span></p>
                                        <p><b>Capital</b>: <span>{country.capital}</span></p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    countries: state.filtered
})

const mapDispatchToProps = (dispatch) => ({
    getCountriesFn: ()=>{
        dispatch(FetchCountries())
    },
    filterCountryFn: (text)=>{
        dispatch({ type:"FILTER_BY_COUNTRY", payload:text})
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Countries)