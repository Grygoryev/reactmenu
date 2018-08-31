import React, { Component } from 'react';
import '../scss/main.scss';
import Content from './components/Content';
import Navbar from './components/Navbar';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {name: 'Cart', text: 'Welcome to your cart. Here you are able to see all products, which are ready to be paid and delievered to you. Just press the button to finish an order.', id: 1, icon: 'CartIcon', isActive: false},
                {name: 'Spoon', text: 'In this section you are able to see the rating of most popular places in this area. Just scroll the feed and pay attention to the bar with small stars in it.', id: 2, icon: 'SpoonIcon', isActive: false},
                {name: 'Flower', text: 'Welcome to the section of most popular culture places to visit in our city. Look at the feed and choose the most interesting place. For more information, just tap on place card.', id: 3, icon: 'FlowerIcon', isActive: true}, 
                {name: 'Stadium', text: 'In case you are fun of sports, this application has also rating of most popular stadiums for different kinds of sports. To choose sport you need, tap on \'filter\' button. ', id: 4, icon: 'StadiumIcon', isActive: false }
            ]
        }
    }

    handleNavClick = (id) => {
        const tabs = this.state.tabs;
        tabs.forEach(tab => tab.isActive = tab.id === id);

        this.setState({
            tabs
        })
    }

    render() {
       return (
            <div className="app">
                <header className="header box">
                    <h1 className="header__title">Main</h1>
                </header>
                <main className="main box">
                   <Content tabs={this.state.tabs}/>
                </main>
                <Navbar tabs={this.state.tabs} handleNavClick={this.handleNavClick}/>
            </div>
       )
    }
}