import React, { Component } from 'react';
import '../App.css';

import CardList from '../components/Card/CardList/CardList';
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';


class App extends Component {
    constructor() {
        super()
        this.state = {
            Robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ Robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const {Robots, searchField} = this.state;
        const filteredRobots = Robots.filter(Robot => {
            return Robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !Robots.length ? <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                    <CardList Robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }

    }

export default App;