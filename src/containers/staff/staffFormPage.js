import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchBusinesses, fetchBusiness } from '../../store/actions/businessesActions';
import { saveMember, fetchMember, updateMember } from "../../store/actions/staffActions";
import { fetchStaffPositions } from '../../store/actions/enumTypes'
import StaffForm from '../../components/staff/staffForm'
import PropTypes from 'prop-types';

class StaffFormPage extends React.Component {
    state = {
        business_id: 0,
        redirect: false
    }

    componentDidMount() {
        const { match } = this.props
        if (match.params.id) {
            this.props.fetchMember(match.params.id)
        }
        if (match.params.business_id) {
            this.props.fetchBusiness(match.params.business_id);
        }
        this.props.fetchBusinesses();
        this.props.fetchStaffPositions();
    }

    saveMember = ({ id, business, email, first_name, last_name, position, phone_number }) => {
        if (id) {
            return this.props.updateMember({ id, business, email, first_name, last_name, position, phone_number })
            .then(() => { this.setState({ business_id: business, redirect: true }) });
        } else {
            return this.props.saveMember({ business, email, first_name, last_name, position, phone_number })
            .then(() => { this.setState({ business_id: business, redirect: true }) });
        }
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.redirect 
                    ? <Redirect to={`/business/${this.state.business_id}/staff`} />
                    : <StaffForm member={this.props.member} 
                                 staffPositions={this.props.staffPositions} 
                                 business={this.props.business} 
                                 businesses={this.props.businesses}
                                 saveMember={this.saveMember} />
                }
            </div>
        );
    }
}

StaffFormPage.propTypes = {
    businesses: PropTypes.array.isRequired,
    fetchBusinesses: PropTypes.func.isRequired,
    fetchBusiness: PropTypes.func.isRequired,
    fetchStaffPositions: PropTypes.func.isRequired,
    fetchMember: PropTypes.func.isRequired,
    updateMember: PropTypes.func.isRequired
}

function mapStateToProps(state, props) {
    const { match } = props

    let obj = {
        businesses: state.businesses,
        staffPositions: state.enumTypes,
        business: null,
        member: null
    };

    if (match.params.id) {
        obj.member = state.staff.find(x => x.id === parseInt(match.params.id))
    }

    if (match.params.business_id) {
        obj.business = state.businesses.find(x => x.id === parseInt(match.params.business_id))
    }

    return obj;
}

export default connect(
    mapStateToProps,
    { fetchBusinesses, fetchBusiness, fetchStaffPositions, saveMember, fetchMember, updateMember }
)(StaffFormPage);