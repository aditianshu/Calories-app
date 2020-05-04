import React, { Component } from 'react'
import styles from './styles.css'


class MiniIg extends Component{
    constructor(props){
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            val : this.props.ing.req,
            isEdit : false
        }
    }

    handleEdit(){

    }   
    
    handleDelete(){
        
    }

    render(){
        console.log(this.props);
        
        const daily = {};
        return (
            <div>
                <div>
                    <p>{this.props.ing.req}</p>
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>
        )
    }
}

export default MiniIg;