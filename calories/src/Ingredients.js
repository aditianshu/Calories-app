import React, { Component } from 'react'
import styles from './styles.css'
import MiniIg from './MiniIg'
import uuidv4 from 'uuid'


class Ingredients extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ing : this.props.response,
            calories : this.props.calories
        };
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    getData(item){
        var response = {id : "hi"};
        const ing = item;
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

      }).then(function (res) {
            this.setState({calories : [...this.state.calories, {res}]});
      });

    }
    

    addItem(item){
        item = {...item, id : uuidv4()};
        this.setState({
            ing : [...this.state.ing, item],
            calories : [...this.state.calories, this.getData(item.i)]
        })
        addHandle(this.state);
    }

    // editItem(item){
    //     const updated = [this.state.ing]
    //     this.setState({
    //         ing : updated
    //     })
    // }

    deleteItem(item){
        const updated = [this.state.ing]
        this.setState({
            ing : updated
        })
    } 


    render(){
        console.log(this.props);
        var a =0;
        return (
            <div>
               { this.state.ing.map(i => (
                   <MiniIg ing = {i}/>
               )) }
                <form>
                    <button>Submit</button>
                </form>
            </div>
        ); 
                
    }
}

export default Ingredients;