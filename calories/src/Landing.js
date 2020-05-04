import React, { Component } from 'react'
import styles from './styles.css'
import Ingredients from './Ingredients'
import Calo from './Calo'
import axios from 'axios'


class Landing extends Component{
    constructor(props){
        super(props);
        this.state = {
            response : [ 
                {
                    id : 'xyz', 
                    req : "4 cups of butter"
                } ,
                {
                    id : 'abc',
                    req : "5 strips of cheese"
                }
            ]  ,
            calories : []     
         }

         this.getData = this.getData.bind(this);
    }

    onClickHandle(){
        { this.state.response.map(i => (
            this.getData(i.req)
        )) }
    }

    
    
    render(){
        console.log(this.state);
        
        return (
            <div>
                <Ingredients response = {this.state.response}/>
                <Calo response = {this.state.calories} />
            </div>
        )
    }
}

export default Landing