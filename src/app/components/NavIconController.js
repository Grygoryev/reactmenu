import React from 'react';
import FlowerIcon from './icons/FlowerIcon';
import StadiumIcon from './icons/StadiumIcon';
import CartIcon from './icons/CartIcon';
import SpoonIcon from './icons/SpoonIcon';

class NavIconController extends React.Component {
    render() {
        let icons = Object.values(this.props);
        let currentIcon = icons[0];
       
        switch (currentIcon) {
            case 'FlowerIcon':
                return <FlowerIcon/>
            case 'StadiumIcon':
                return <StadiumIcon/>
            case 'CartIcon':
                return <CartIcon/>
            case 'SpoonIcon':
                return <SpoonIcon/>
        }
    }
}

export default NavIconController;