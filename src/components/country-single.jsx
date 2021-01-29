import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { FetchCountry } from '../redux/action'
import { FaLongArrowAltLeft} from 'react-icons/fa'
import { moneyFormat } from '../lib'
class Country extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            country_code: this.props.match.params.id
        }
    }

    getCountry = ()=>{
        this.props.getCountry(this.state.country_code)
    }

    componentDidMount(){
        this.getCountry()
    }

    componentWillReceiveProps(props){
        const id = props.match?.params?.id
        if(this.state.country_code != id){
            this.setState({
                country_code:id
            }, this.getCountry)
        }
    }

    compo
    render() {
        let { country, isFetchingSingle } = this.props;
        if (isFetchingSingle) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <h3>Please wait...</h3>
                </div>
            )
        }
        if(country == null){
            return(
                <div style={{textAlign:'center'}}>
                    <h3>Wrong selector</h3>
                </div>
            )
        }
        return(
            <div className="container country-single">
                <div className="back-btn-container">
                    <Link to="/">
                        <FaLongArrowAltLeft/> Back
                    </Link>
                </div>
                <div className="row">
                    <div className="col-2">
                        <img src={country.flag} width="100%"/>
                    </div>
                    <div className="col-2">
                        <h3 style={{paddingLeft:"20px"}}>{country.name}</h3>
                        <div className="row">
                            <div className="col-2">
                                <div className="label">
                                    <b>Native name: </b>
                                    <span>{country.nativeName}</span>
                                </div>
                                <div className="label">
                                    <b>Population: </b>
                                    <span>{moneyFormat(country.population).replace(/\.(0){2}$/, '')}</span>
                                </div>
                                <div className="label">
                                    <b>Region: </b>
                                    <span>{country.region}</span>
                                </div>
                                <div className="label">
                                    <b>Sub Region: </b>
                                    <span>{country.subregion}</span>
                                </div>
                                <div className="label">
                                    <b>Capital: </b>
                                    <span>{country.capital}</span>
                                </div>
                            </div>

                            <div className="col-2">
                                <div className="label">
                                    <b>Top Level Domain: </b>
                                    <span>{country.topLevelDomain[0]}</span>
                                </div>
                                <div className="label">
                                    <b>Currencies: </b>
                                    <span>{country.currencies.map((currency, i)=><span>
                                        {currency.code}({currency.symbol}), 
                                    </span>)}</span>
                                </div>
                                <div className="label">
                                    <b>Languages: </b>
                                    <span>{country.languages.map((lang, i) => <span>
                                        {lang.name}({lang.nativeName}),
                                    </span>)}</span>
                                </div>
                                
                            </div>

                            <div className="col-1">
                                <div className="label">
                                    <b>Border Countries: </b> {country.borders.map((border, i) => <Link onClick={()=>{
                                        this.props.history.push(`/country/${border}`)
                                    }} className="badge">
                                        {border}
                                    </Link>)}
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    country:state.country,
    isFetchingSingle:state.isFetchingSingle
})

const mapDispatchToProps = (dispatch) => ({
    getCountry: (code)=>{
        dispatch(FetchCountry(code))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Country)