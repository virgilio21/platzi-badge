import React from 'react';
import Navbar from '../components/Navbar.js';
import Badge from '../components/Badge.js';
import BadgeForm from '../components/BadgeForm.js';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component{

    render(){

        return(
        <div> 
            <Navbar />   
            <div className="BadgeNew__hero">
                <img className="img-fluid" src={header} alt="logo" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge firstName="Virgilio" lastName="Padron Batun" twitter="virgi_padron" jobTitle="Fronted Developer" avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"/>

                    </div>
                    <div className="col-6">
                        <BadgeForm />
                    </div>
                </div>
            </div>
        </div>     
        )
    }
}

export default BadgeNew;