import React from 'react'
import { connect } from 'react-redux'
import BussinessesList from './businessesList';
import PropTypes from 'prop-types'
import { fetchBusinesses } from '../../store/actions/businessesActions'

class BusinessesPage extends React.Component {
    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        return (
            <div className="container">
                <BussinessesList businesses={this.props.businesses} />
            </div>
        );
    }
}

BusinessesPage.propTypes = {
    businesses: PropTypes.array.isRequired,
    fetchBusinesses: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        businesses: state.businesses
    }
}

export default connect(
    mapStateToProps,
    { fetchBusinesses }
)(BusinessesPage);