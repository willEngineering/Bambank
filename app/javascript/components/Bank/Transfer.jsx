import React, {Component} from 'react'

class Transfer extends React.Component {
    
    constructor(props) {

        super(props);



        this.state = { error: '', bambeuros: this.props.bambeuros , secondUser: '', value: ''  };  

        this.changeHandlerUser = this.changeHandlerUser.bind(this);
        this.changeHandlerValue = this.changeHandlerValue.bind(this);
        this.transferButtonPress = this.transferButtonPress.bind(this);
        this.cancelButtonPress = this.cancelButtonPress.bind(this);
    }

    changeHandlerUser = (event) => {
        this.setState({secondUser: event.target.value});
    }

    changeHandlerValue = (event) => {
        this.setState({value: event.target.value});
    }

    transferButtonPress = (event) => {

        if (this.props.username == this.state.secondUser) this.setState({error: 'Please enter username other than your own'});

        else if (!isFinite(String(this.state.value))) this.setState({error: 'Value must be a number'});

        else this.setState({error: ''});

    }

    cancelButtonPress  = (event) => {

        this.props.onTransferCancelModel();

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
                        
                        <h1 style={this.props.blueStyle}> Tranfers {this.props.secondUser}{this.props.username}</h1>
                        <p>In your bank account you currently have:</p>                       
                        
                        <h1 style={this.props.blueStyle}>€{this.state.bambeuros}</h1>
                        <p>Please either enter an Amount and Username and click "Transfer" or click "Cancel" </p>                       

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                           
                            <div>
                                <p>Username</p>
                                <input
                                    type='text'
                                    onChange={this.changeHandlerUser}
                                />
                                <p></p>
                                <button onClick={this.transferButtonPress}>Transfer</button>
                            </div>

                            <div>
                                <p>Amount</p>
                                <input
                                    type='text'
                                    onChange={this.changeHandlerValue}
                                />
                                <p></p>
                                <button onClick={this.cancelButtonPress} >Cancel</button>
                            </div>

                            
                        </div>

                        <h1 style={this.props.blueStyle}></h1>
                        <p></p>

                        {errorMessage}                       
                
                    </div> 
                </div>
            </section>
        );
    }

}

export default Transfer