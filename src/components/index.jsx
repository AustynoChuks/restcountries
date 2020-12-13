import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Countries from './countries'
import Country from './country-single'

class Index extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Countries} />
                    <Route exact path="/country/:id" component={Country} />
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = (state)=>({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Index)