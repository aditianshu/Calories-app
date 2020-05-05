import React, { Component } from 'react'
import './styles.css'
import MiniIg from './MiniIg'
import {v4 as uuidv4} from 'uuid'
import AddIng from './AddIng'


class Ingredients extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ing : this.props.response,
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.clearRecepie = this.clearRecepie.bind(this);
    }

    addItem(item){
        console.log(item);
        item = {i : item.ingridient, id : uuidv4()};
        this.setState({
            ing : [...this.state.ing, item]
        })
        this.props.addHandle(item);
    }

    deleteItem(item){
        this.setState ({
            ing : this.state.ing.filter(ingridient => (ingridient.id !== item))
        })
        this.props.handleDelete(item)
    } 


    clearRecepie(){
        this.setState({
            ing : []
        })
        this.props.handleClear()
    }

    render(){
        console.log(this.props);
        return (
                <div className  = 'divOuter'>
                    <div>
                        <h2>Add Ingredients</h2>
                        <p className = "instructions">Add Ingredients in the following ways : 
                            "4 cups of milk", etc. 
                            Add all the nutrients preferrably in the following order <br></br>
                            item count-measure(if relevant)-ingredient
                        </p>
                        <div className = "inList"> 
                            { this.state.ing.map(i => (
                            <MiniIg ing = {i}  handleDeleteClick = {this.deleteItem}/>
                            )) }
                            <AddIng onAdd = {this.addItem}/>
                        </div>
                        <div className = 'buttonsIn'>
                        <button 
                            onClick = {this.props.submitHandle}
                            className = 'btn btnFade'>Submit Recipie
                        </button>
                        <button 
                            onClick = {this.clearRecepie}
                            className = 'btn btnFade'>Clear Recepie
                        </button>
                        </div>
                    </div>
                </div>
        ); 
                
    }
}

export default Ingredients;