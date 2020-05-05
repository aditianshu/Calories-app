import React, { Component } from 'react'
import './styles.css'


class MiniIg extends Component{
    constructor(props){
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            val : this.props.ing.i,
            isEdit : false
        }
    }
    
    handleDelete(e){
        e.preventDefault();
        console.log("here");
        this.props.handleDeleteClick(this.props.ing.id);
    }

    render(){
        return (
            <div>
                <div className = 'listItems'>
                    <p className = 'ingName'>{this.props.ing.i}</p>
                    <button 
                    className = 'btn btnFade'
                    onClick = {this.handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

export default MiniIg;