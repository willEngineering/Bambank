import React, {Component} from 'react'
import GeneralProxyToBackEnd from '../Proxy/GeneralProxyToBackEnd'
import Bank from '../Bank/Bank'
import Transfer from '../Bank/Transfer'
import TransferHistory from '../Bank/TransferHistory'

class LogInModel extends React.Component {
    
    constructor(props) {

        super(props);

        this.state = {showBank: true, showTransferPage: false, showTransferHistoryPage: false };
                    
    }


    onlogOutModel(){
        
        this.props.onlogOutSuccess();

    }

    onHistoryModel(){
        this.setState({showBank: false, showTransferHistoryPage: true})
    }

    onHistoryCancelModel(){
        this.setState({showBank: true, showTransferHistoryPage: false})
    }

    onTransferModel(){
        this.setState({showBank: false, showTransferPage: true})
    }

    onTransferCancelModel(){
        this.setState({showBank: true, showTransferPage: false})
    }
    

    render() {

        let bank = ''
        if (this.props.bankVisible && this.state.showBank)  {
            bank = <Bank {...this.props}   
                    onlogOutModel = {this.onlogOutModel.bind(this)} onHistoryModel = {this.onHistoryModel.bind(this)}
                         onTransferModel = {this.onTransferModel.bind(this)}/>
        }

        let transfer = ''
        if (this.state.showTransferPage) {           
            transfer=  <Transfer {...this.props}  
                onTransferCancelModel = {this.onTransferCancelModel.bind(this)} />
        }

        let transferHistory = ''
        if (this.state.showTransferHistoryPage)  {

            transferHistory=  <TransferHistory {...this.props} bambeuros = {this.props.bambeuros} 
                    listOfTransactions = {this.listTest} onCancelModel = {this.onHistoryCancelModel.bind(this)} 
                                     listOfTransactions = {this.props.generalProxyToBackEnd.getListOfTransfers()}/> 
        }

        return (
        
            <div>

                {bank}

                {transfer}

                {transferHistory}

            </div> 
        )           
    }

}

export default LogInModel