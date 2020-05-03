import React, { Component } from 'react'
import styles from './styles.css'
import MiniIg from './MiniIg'


class Ingredients extends Component{
    constructor(props){
        super(props);
        this.state = {
            ing = [{i = "4 cups of butter", id = uuid()}, ]
        }
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(item){
        item = {...item, id : uuid()};
        this.setState({
            ing : [...this.state.ing, item]
        })
    }

    editItem(item){
        const updated = [this.state.ing]
        this.setState({
            ing : updated
        })
    }

    deleteItem(item){
        const updated = [this.state.ing]
        this.setState({
            ing : updated
        })
    }
    
    render(){
        const data = {};

        return (
            <div>
               {this.state.ing.forEach(function(item){
                <MiniIg ing = {this.state.ing[e].i} 
                handleClick = {this.addItem} 
                handleEdit = {this.editItem} 
                handleDelete = {this.deleteItem}/>
              })}
                <Button>+</Button>
            </div>
        )
    }
}

export default Ingredients