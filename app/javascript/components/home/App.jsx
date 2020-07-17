import React, {Component} from 'react'
import LogInModel from '../LogIn/LogInModel'
import BankModel from '../Bank/BankModel'
import GeneralProxyToBackEnd from '../Proxy/GeneralProxyToBackEnd'


class App extends Component {
    
    constructor(props) {

        super(props);

        this.blueStyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };  


        this.generalProxyToBackEnd = new GeneralProxyToBackEnd();
        this.state = { username: '' , showLogInPage: true , showBankPage: false};  

    }

    onlogInSuccess(username){
        
        this.setState({showLogInPage: false, showBankPage: true, username: username});

    }

    onlogOutSuccess(){
        
        this.setState({showLogInPage: true, showBankPage: false, username: ''});

    }
    
    render() {        

        return (
            <div>

                <LogInModel blueStyle = {this.blueStyle} logInVisible = {this.state.showLogInPage} generalProxyToBackEnd = {this.generalProxyToBackEnd}
                    onlogInSuccess = {this.onlogInSuccess.bind(this)} />
                

                <BankModel bankVisible = {this.state.showBankPage} onlogOutSuccess = {this.onlogOutSuccess.bind(this)} 
                        blueStyle = {this.blueStyle} username = {this.state.username} bambeuros = "100" 
                            generalProxyToBackEnd = {this.generalProxyToBackEnd}/>

                
            </div>           
        )
    }
}
export default App