import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
class Country extends React.Component {
    render() {
        return(
            <div>Single <Link to="/">Nigeria</Link></div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Country)