import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    const treansformedIngredients = Object.keys(props.ingredients).map(
        (igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igkey + i} type={igKey} />;
            });
        }
    );
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {treansformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
