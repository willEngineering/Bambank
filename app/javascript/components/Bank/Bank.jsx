import React, {Component} from 'react'

class Bank extends React.Component {
    
    constructor(props) {

        super(props);

        this.transferButtonPress = this.transferButtonPress.bind(this);

        this.state = { error: ''  };  
    }

    transferButtonPress = (event) => {

        if (this.props.bambeuros == 0) this.setState({error: 'Transfer who? You are broke!'});

        else this.props.onTransferModel();
    }

    transactionHistoryButtonPress  = (event) => {

        this.props.onHistoryModel();

    }

    logOutButtonPress = (event) => {

        this.props.onlogOutModel();
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
                        
                        <h1 style={this.props.blueStyle}> Hi {this.props.username}</h1>
                        <p>In your bank account you currently have:</p>                       
                        
                        <h1 style={this.props.blueStyle}>€{this.props.bambeuros}</h1>
                        <p>Please either click "Transfer", "Transaction History" or "Log Out" </p>                       

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                           
                            <div>                                
                                <p></p>
                                <button onClick={this.transferButtonPress}>Transfer</button>
                            </div>

                            <div>                                
                                <p></p>
                                <button onClick={this.transactionHistoryButtonPress} >Transaction History</button>
                            </div>

                            <div>                               
                                <p></p>
                                <button onClick={this.logOutButtonPress} >Log Out</button>
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

export default Bank