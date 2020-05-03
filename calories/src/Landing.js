import React, { Component } from 'react'
import styles from './styles.css'
import Ingredients from './Ingredients'
import Calo from './Calo'


class Landing extends Component{
    constructor(props){
        super(props);
        this.state = {
            response = {}
        }
    }
    
    
    render(){

        return (
            <div>
                <Ingredients/>
                <Calo />
            </div>
        )
    }
}

export default Landing