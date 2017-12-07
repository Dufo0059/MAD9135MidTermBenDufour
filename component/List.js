
import React, {Component} from "react";
import PropTypes from "prop-types";
import Contact from "./Contact"

export default class List extends Component{

    render(){

        return(

            <div className="column list">
                <ul> {
                    this.props.contacts.map(profile =>
                    < Contact 
                    key = {profile.key}
                    id = {profile.id} picture={profile.picture} name = {profile.name} dob={profile.dob} onClick= {this.props.selectedProfile}/>) 
                    }

                </ul>
                </div>
        );

    }
}

List.propTypes = {
    contacts: PropTypes.array.isRequired,
    selectedProfile: PropTypes.func
};
