import React from 'react'

import './BurgerIngredient.css'

const burgerIngredient = (props) => {
    let ingredient = null

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div class="BreadBottom"></div>
            break;
        case ('bread-top'):
            ingredient = (
                <div class="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
            )
            break;
        case ('meat'):
            ingredient = <div class="Meat"></div>
            break;
        case ('chesse'):
            ingredient = <div class="Chesse"></div>
            break;
        case ('bacon'):
            ingredient = <div class="Bacon"></div>
            break;
        case ('salad'):
            ingredient = <div class="Salad"></div>
            break;
        default:
            ingredient = null
    }

    return ingredient
}

export default burgerIngredient
