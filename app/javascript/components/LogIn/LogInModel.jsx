import React, {Component} from 'react'
import LogIn from './LogIn'
import GeneralProxyToBackEnd from '../Proxy/GeneralProxyToBackEnd'

class LogInModel extends React.Component {
    
    constructor(props) {

        super(props);
                    
    }


    logInCommand(username,password){
        
        if(this.props.generalProxyToBackEnd.logInCommandProxy(username,password))
            {
                this.props.onlogInSuccess(username);
            }

        

    }

    addUserCommand(username,password){

        if(this.props.generalProxyToBackEnd.addUserCommandProxy(username,password))
            {
                this.props.onlogInSuccess(username);
            }

        

    }

    render() {

        let logIn = ''
        if (this.props.logInVisible)  logIn = <LogIn {...this.props}
                            logInCommand = {this.logInCommand.bind(this)} addUserCommand = {this.addUserCommand.bind(this)}/>

        return (
        
            <div>
                {logIn}
            </div> 
        )           
    }

}

export default LogInModel