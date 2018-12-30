import React, {Component} from 'react';

import UIHolder from "../../hoc/UIHolder";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component{

    state={
        ingredients:{
            salad:1,
            bacon:1,
            cheese:2,
            meat:2
        }
    }
    render(){
        return (
            <UIHolder>
                <Burger  ingredients={this.state.ingredients}/>
                <div>Buil Control</div>
            </UIHolder>
            
        )
    }
}
export default BurgerBuilder;