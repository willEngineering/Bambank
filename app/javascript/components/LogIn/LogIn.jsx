import React, {Component} from 'react'
import LogInModel from './LogInModel'

class LogIn extends React.Component {
    
    constructor(props) {

        super(props);

        this.state = { error: '' , username: '' ,  password: '' };
    
        this.changeHandlerUser = this.changeHandlerUser.bind(this);
        this.changeHandlerPassword = this.changeHandlerPassword.bind(this);
        this.logInButtonPress = this.logInButtonPress.bind(this);
        this.addUserButtonPress = this.addUserButtonPress.bind(this);
    }

    changeHandlerUser = (event) => {
        this.setState({username: event.target.value});
    }

    changeHandlerPassword = (event) => {
        this.setState({password: event.target.value});
    }

    logInButtonPress = (event) => {
        this.props.logInCommand(this.state.username,this.state.password)
    }

    addUserButtonPress = (event) => {
        this.props.addUserCommand(this.state.username,this.state.password)
    }

    render() {

        const isErrorMessage = this.state.errorMessage != '';
        let errorMessage = ''
            if (isErrorMessage) {
                errorMessage = <h1 style={{color: "red"}}>{this.state.error} </h1>;
            }   


        return(
            <section className="default==1">
                <div className="container">
                    <div className="row">
                        
                        <h1 style={this.props.blueStyle}> Welcome to the Bambank</h1>
                        <p>Written in Ruby on Rails with React and Postgresql</p>                       
                        
                        <h1 style={this.props.blueStyle}>Log In</h1>
                        <p>Please enter username and password and click "Log In" or "Add User" </p>                       

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                           
                            <div>
                                <p>Username</p>
                                <input
                                    type='text'
                                    onChange={this.changeHandlerUser}
                                />
                                <p></p>
                                <button onClick={this.logInButtonPress}>Log In</button>
                            </div>

                            <div>
                                <p>Password</p>
                                <input
                                    type='text'
                                    onChange={this.changeHandlerPassword}
                                />
                                <p></p>
                                <button onClick={this.addUserButtonPress} >Add User</button>
                            </div>
                            
                        </div>

                        <h1 style={this.props.blueStyle}></h1>
                        <p></p>

                        <h1 style={{color: "red"}}>{errorMessage}</h1>                          
                
                    </div> 
                </div>
            </section>
        );
    }

}

export default LogIn