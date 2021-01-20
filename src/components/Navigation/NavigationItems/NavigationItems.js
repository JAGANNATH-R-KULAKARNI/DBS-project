import React from 'react';
import Classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props)=>
{
return (
    <ul className={Classes.NavigationItems}>
        <NavigationItem link="/" active>BURGER BUILDER</NavigationItem>
        <NavigationItem link="/">CHECKOUT</NavigationItem>
    </ul>
);
};

export default navigationItems;