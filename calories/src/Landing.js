import React, { Component } from 'react'
import './styles.css'
import Ingredients from './Ingredients'
import Calo from './Calo'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'


class Landing extends Component{
    constructor(props){
        super(props);
        this.state = {
            response : [ 
                {
                    id : uuidv4(), 
                    i : "4 cups of butter"
                } ,
                {
                    id : uuidv4(),
                    i : "1 cup milk"
                }
            ]  ,
            calories : [] ,
            isSubmitted : false    
         }
         this.addHandle = this.addHandle.bind(this);
         this.deleteItem = this.deleteItem.bind(this);
         this.submitHandle = this.submitHandle.bind(this);
         this.getData = this.getData.bind(this);
         this.clearAll = this.clearAll.bind(this);
    }


    addHandle(item){
        this.setState({
            response : [...this.state.response, item]
        })

    }

    deleteItem(item) {
        this.setState({
            response : this.state.response.filter(it => (it.id !== item))
        })
    }

    submitHandle(){
        
        this.state.response.map(ingr => (
            this.getData(ingr)
        ))
        setTimeout(function () {
            this.setState({isSubmitted: true});
          }.bind(this), 3000)
        
    }

    getData(item){
        console.log(item);
        const ing = item.i;
        console.log("insidee")
        axios({
            url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
            method : 'POST',
            data:  `{ "query": "${ing}" }`,
            headers : {
                'accept': 'application/json',
                'x-app-id': '12d1475f',
                'x-app-key': 'aad28b9d40d73adc91885516582dd481',
                'x-remote-user-id': '0',
                'Content-Type': 'application/json'
            }

      }).then((res) => {
            console.log(res.data.foods[0]);
            console.log(` THIS IS THE SHITZZZZZZZ ${this.state.calories}`);
            
             res = {...res.data.foods[0], id : item.id};
            this.setState({
                    calories : [...this.state.calories, res], 
                    
                });
      });
      console.log(this.state);
      
    }
    clearAll(){
        this.setState({
            response : [],
            calories : [],
            isSubmitted : false
        })
    }
    
    render(){

        console.log(this.state);
        
        return (
            <div>
                <div className = "head">
                    <h1>Nutri-Calculate</h1>
                </div>
                <div className = "wrapper">
                    <div className = "ingridients">
                        <Ingredients
                        response = {this.state.response} 
                        addHandle = {this.addHandle} 
                        submitHandle = {this.submitHandle}
                        handleDelete = {this.deleteItem}
                        handleClear = {this.clearAll}/>
                    </div >
                    <div className = 'label'>
                        <div className = 'container_1'>
                            {this.state.isSubmitted? 
                                (<Calo response = {this.state.calories} /> 
                                ): (
                                <h2>Submit all Ingredients for the final label!</h2>
                                )}
                            <p className = 'instructions'>
                                If the label lists less than 5 percent daily value for a nutrient it is considered low, 
                                while 20 percent or more is high. In general, you want to limit saturated fat, cholesterol, 
                                and sodium, and get enough fiber, vitamins, and minerals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Landing