import React from 'react';

import GIRLS_DATA from './girls.data.js'

class GirlsPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collection: GIRLS_DATA
            
        }
    }

    render(){
        return <div>GIRLS PAGE</div>
    }
}

export default GirlsPage;