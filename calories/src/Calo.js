import React, { Component } from 'react'
import './styles.css'



class Calo extends Component{
    constructor(props){
        super(props);
        this.state = {
            calories : 0.00,
            total_fat : 0.00,
            saturated_fat : 0.00,
            cholestrol : 0.00,
            sodium : 0.00,
            total_carbohydrate : 0.0,
            dietary_fiber : 0,
            sugars : 0.00,
            protein : 0.00,
            potassium : 0.00
        }
        this.calculate = this.calculate.bind(this);
    }
    
    calculate(){
        console.log("Im gonnaaaaa calculate")
        const cal = this.props.response;
        console.log(cal)
        var item = {calories : 0.00,
            total_fat : 0.00,
            saturated_fat : 0.00,
            cholestrol : 0.00,
            sodium : 0.00,
            total_carbohydrate : 0.0,
            dietary_fiber : 0,
            sugars : 0.00,
            protein : 0.00,
            potassium : 0.00}
        for(const i in cal){
                const ing = cal[i]
                console.log(this.state)
                item = {
                calories : item.calories+ ing.nf_calories,
                total_fat : item.total_fat + ing.nf_total_fat,
                saturated_fat : item.saturated_fat + ing.nf_saturated_fat,
                cholestrol : item.cholestrol +ing.nf_cholesterol,
                sodium : item.sodium + ing.nf_sodium,
                total_carbohydrate : item.total_carbohydrate + ing.nf_total_carbohydrate,
                dietary_fiber : item.dietary_fiber + ing.nf_dietary_fiber,
                sugars : item.sugars + ing.nf_sugars,
                protein : item.protein + ing.nf_protein,
                potassium : item.potassium + ing.nf_potassium }
            console.log(item);
            console.log(item.calories);
            console.log(this.state);
            
        }
        this.setState({
            calories : item.calories,
            total_fat : item.total_fat,
            saturated_fat : item.saturated_fat,
            cholestrol : item.cholestrol,
            sodium : item.sodium ,
            total_carbohydrate : item.total_carbohydrate,
            dietary_fiber : item.dietary_fiber,
            sugars : item.sugars ,
            protein : item.protein,
            potassium : item.potassium

        }); 
    }
    
    componentDidMount(){
        this.calculate();
    }

    render(){
           
        
        console.log(this.state);
        const daily = {
            calories : Math.ceil(this.state.calories),
            cholestrol : Math.ceil((this.state.cholestrol/300)*100),
            dietary_fiber :  Math.ceil((this.state.dietary_fiber/28)*100),
            potassium :  Math.ceil((this.state.potassium/4700)*100),
            protein :  Math.ceil((this.state.protein/50)*100),
            saturated_fat :  Math.ceil((this.state.saturated_fat/20)*100),
            sodium :  Math.ceil((this.state.sodium/2300)*100),
            sugars :  Math.ceil((this.state.sugars/50)*100),
            carbohydrates :  Math.ceil((this.state.total_carbohydrates/275)*100),
            fat :  Math.ceil((this.state.total_fat/78)*100)
        };
        return (
            <div className = 'clo'>
               <h3>The Label : </h3>
                <div className = 'calorie'>
                    <p className = 'inName'> <b>Calories :</b> {this.state.calories}</p>
                    <p className = 'inP'><i>%DV</i> : {daily.calories}%</p>
                </div>
                <div className = 'calorie'>
                    <p className = 'inName'><b>Total Fat :</b> {this.state.total_fat}</p>
                    <p className = 'inP'><i>%DV : </i>{daily.fat}%</p>
                </div>
                <div className = 'calorie'>
                    <p className = 'inName'><b>Saturated Fat :</b> {this.state.saturated_fat}</p>
                    <p className = 'inP'><i>%DV :</i> {daily.saturated_fat}%</p>
                </div>
                <div className = 'calorie'>
                    <p className = 'inName'><b>Cholestrol :</b> {this.state.cholestrol}</p>
                    <p className = 'inP'><i>%DV :</i> {daily.cholestrol}%</p>
                </div>
                <div className = 'calorie'>
                    <p className = 'inName'><b>Sodium :</b> {this.state.sodium}</p>
                    <p className = 'inP'><i>%DV : </i>{daily.sodium}%</p>
                </div>
                <div className = 'calorie'>
                    <p className = 'inName'><b>Total Carbohydrates :</b> {this.state.total_carbohydrate}</p>
                    <p className = 'inP'><i>%DV : </i>{daily.carbohydrates}%</p>
                </div>
                <div className = 'calorie'>
                    <p className = 'inName'><b>Dietary Fibre :</b> {this.state.dietary_fiber}</p>
                    <p className = 'inP'><i>%DV : </i>{daily.dietary_fiber}%</p>
                </div>
                <div className = 'calorie'>
                    <p className = 'inName'><b>Sugars : </b>{this.state.sugars}</p>
                    <p className = 'inP'><i>%DV : </i>{daily.sugars}%</p>
                </div>
                <div className = 'calorie'>
                    <p className = 'inName'><b>Protien :</b> {this.state.protein}</p>
                    <p className = 'inP'><i>%DV :</i> {daily.protein}%</p>
                </div>
                <div className = 'calorie'>
                    <p className = 'inName'><b>Potassium : </b>{this.state.potassium}</p>
                    <p className = 'inP'><i>%DV :</i> {daily.potassium}%</p>
                </div>
            </div>
        )
    }
}

export default Calo