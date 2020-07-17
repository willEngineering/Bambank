import React, {Component} from 'react'

class GeneralProxyToBackEnd extends React.Component {
    
    constructor(props) {

        super(props);
                    
    }

    getListOfTransfers = () =>{
        
        return [
            {
                time: '10:55:55',
                value: '-€30',
                before: '€40',
                after: '€10',
                person:'Adam'
            },
            {
                time: '11:22:33',
                value: '+€40000000000000000000',
                before: '€10',
                after: '+€40000000000000000010',
                person:'Josh'
            },
            {
                time: '11:22:33',
                value: 'This List Is From The Proxy',
                before: 'And',
                after: 'It is',
                person:'Dynamic'
            },
        ];

    }


    logInCommandProxy(username,password){

        //FUNCTION FOR LOG IN       


        return true;
        
    }

    addUserCommandProxy(username,password){

        return true;

        //FUNCTION FOR ADD USER
    }


}

export default GeneralProxyToBackEnd