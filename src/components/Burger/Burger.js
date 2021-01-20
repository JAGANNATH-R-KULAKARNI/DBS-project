import React from 'react';
import Classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger =(props)=>
{
  let transformedIngredients=Object.keys(props.Ingredients)
  .map(igKey =>
    {
      return [...Array(props.Ingredients[igKey])].map((_,i) =>
      {
        return <BurgerIngredient key={igKey+i} type={igKey} />;
      })
    }).reduce((arr,el) =>{
      return arr.concat(el);
    },[]);

    if(transformedIngredients.length === 0)
    {
      transformedIngredients=<p>Plese start adding the ingredients : ) </p>
    }
    return (
        <div className={Classes.Burger}>
          <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
          <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;