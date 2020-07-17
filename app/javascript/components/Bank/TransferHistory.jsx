import React, {Component} from 'react'

class TransferHistory extends React.Component {
    
    constructor(props) {

        super(props);

        this.state = { error: ''  };  
    }

    transferButtonPress = (event) => {

        if (this.props.bambeuros == 0) this.setState({error: 'Transfer who? You are broke!'});
    }

    getList(list){
        
        const MakeList = list.map((item) => (

                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
                    <div>{item.time}</div>
                    <div>{item.value}</div>
                    <div>{item.before}</div>
                    <div>{item.after}</div>
                    <div>{item.person}</div>
                </div>
            )
           
        );

        return MakeList

    }

    backButtonPress = (event) => {
        this.props.onCancelModel();
    }

    render() {

        const listOfTransactions = this.getList(this.props.listOfTransactions);

        const isErrorMessage = this.state.errorMessage != '';
        let errorMessage = ''
            if (isErrorMessage) {
                errorMessage = <h1 style={{color: "red"}}>{this.state.error} </h1>;
            }   

        return(
            <section className="default==1">
                <div className="container">
                    <div className="row">
                        
                        <h1 style={this.props.blueStyle}> Ok {this.props.username}</h1>
                        <p>In your bank account you currently have:</p>                       
                        
                        <h1 style={this.props.blueStyle}>€{this.props.bambeuros}</h1>
                        <p>Please press back to return to account overview</p>                       


                        
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
                                <div>Time</div>
                                <div>Amount</div>
                                <div>Before</div>
                                <div>After</div>
                                <div>Person</div>
                        </div>
                           
                        {listOfTransactions}

                        <p></p>
                        <button onClick={this.backButtonPress} >Back</button>

                        <h1 style={this.props.blueStyle}></h1>
                        <p></p>

                        <h1 style={{color: "red"}}>{errorMessage}</h1>                          
                
                    </div> 
                </div>
            </section>
        );
    }

}

export default TransferHistory