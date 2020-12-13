import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Countries extends React.Component {
    render() {
        return(
            <div>All countries <Link to="/country/1">Nigeria</Link></div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Countries)