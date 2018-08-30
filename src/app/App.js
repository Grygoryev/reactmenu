import React, { Component } from 'react';
import '../scss/main.scss';
import Content from './components/Content';
import Navbar from './components/Navbar';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {name: 'Cart', text: 'Etwas kekwas sekwas pekwas Etwas kekwas sekwas pekwas', id: 1, icon: 'CartIcon', active: false},
                {name: 'Spoon', text: 'Esto Espresso Cofesto Milen Esto Espresso Cofesto Milen Esto Espresso Cofesto Milen ', id: 2, icon: 'SpoonIcon', active: false},
                {name: 'Flower', text: 'Awesome Advanture Awesome Advanture Awesome Advanture Awesome Advanture Awesome Advanture', id: 3, icon: 'FlowerIcon', active: true}, 
                {name: 'Stadium', text: 'Real pEkan goes right to be the rightest Real pEkan goes right to be the rightest', id: 4, icon: 'StadiumIcon', active: false }
            ]
        }
    }

    handleNavClick = (id) => {
        const tabs = this.state.tabs;
        for (let i = 0; i < tabs.length; i++ ) {
            if (tabs[i].id == id) {
                tabs[i].active = true;
            } else tabs[i].active = false;
        }

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