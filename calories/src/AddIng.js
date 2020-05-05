import React, { Component } from 'react'
import './styles.css'



class AddIng extends Component{
    constructor(props){
        super(props);
        this.state = {
            ingridient : ''
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(eve){
        this.setState({
            [eve.target.name] : eve.target.value
        })
    }

    handleAdd(eve){
        eve.preventDefault();
        console.log(this.state);
        const item = this.state;
        this.setState({
            ingridient : ''
        })
        this.props.onAdd(item);
    }
    render(){

        return (
            <div className = 'addIng'>
                <form onSubmit = {this.handleAdd}>
                    <input 
                     type = 'text' 
                     name = 'ingridient'
                     id = 'ingridient'
                     value = {this.state.ingridient}
                     onChange = {this.handleChange}
                     className = 'add'
                    />
                    <button className = 'btn btnFade'
                    type = 'submit' >Add it!</button>
                </form>
            </div>
        )
    }
}

export default AddIng;