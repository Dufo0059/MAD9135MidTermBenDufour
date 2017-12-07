
import React, {Component} from "react";
import PropTypes from "prop-types";

import Title from "./Title"
import List from "./List"
import DetailProfile from "./Detailprofile"

export default class MainSection extends Component{
    render(){
        return (
            <div className="list">
                <Title/>
                <div>
                    <List contacts={this.props.contactList} selectedProfile={this.props.selectContact}/>
                    <DetailProfile infos={this.props.contact}/>
                </div>
            </div>
        );
    }
} 

MainSection.protoTypes = {
    contactList: PropTypes.array.isRequired,
    selectContact:PropTypes.func.isRequired,
    contact: PropTypes.object  
}