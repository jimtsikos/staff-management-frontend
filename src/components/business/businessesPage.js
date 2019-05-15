import React from 'react'
import { connect } from 'react-redux'
import BussinessesList from './businessesList';
import PropTypes from 'prop-types'

class BusinessesPage extends React.Component {
    render() {
        return (
            <div className="container">
                <BussinessesList businesses={this.props.businesses} />
            </div>
        );
    }
}

BusinessesPage.propTypes = {
    businesses: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        businesses: state.businesses
    }
}

export default connect(
    mapStateToProps
)(BusinessesPage);