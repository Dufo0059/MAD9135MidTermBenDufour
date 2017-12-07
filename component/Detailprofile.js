
import React, {Component} from "react";
import PropTypes from "prop-types";
import {changeName, getAge} from "./util.js";

export default class DetailProfile extends Component{

    render(){
        
        if(!this.props.infos){
            return(
            <div className="profile"> Click one of Contacts List </div>
            )
        } else {
            return (
                
            <div className = "details">
                <h1> {changeName(this.props.infos.name.first+ " " + this.props.infos.name.last)}</h1> 
                <div>
                    <div>Gender: {this.props.infos.gender}</div>
                    <div>DOB: {this.props.infos.dob}  ({getAge(this.props.infos.dob )} years old)</div>
                </div>
                 <hr/>
                 <div> {this.props.infos.location.street} <br/> {this.props.infos.location.city}, {this.props.infos.location.state}<br/>{this.props.infos.location.postcode}</div>
                 <hr/>
                 <div>
                      <div>Email:<a href= {"mailto:" + this.props.infos.email}> {this.props.infos.email} </a></div>
                      <div>Phone: {this.props.infos.cell}</div>
                </div>
                <img src = {this.props.infos.picture.large}/>
            </div>
            )
            }
        }
    }

    DetailProfile.protoTypes = {
        infos: PropTypes.object 
    }