import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import {robots} from "../robots.js";
import 'animate.css';
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>  response.json())
        .then(users => this.setState({robots: robots}))
        // .then(users => this.setState({robots: users}))
        // => when using users from the server and not own personal robots!
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { searchfield, robots } = this.state;
        const filteredRobots = robots.filter(robot => {
            return (robot.name.toLowerCase().includes(searchfield.toLowerCase()))
        })
        return (robots.length === 0) ?
            <h1 className="animate__animated animate__pulse animate__infinite infinite, pa4">
                Loading...
            </h1> :
            // Basically an if else statement
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>       
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>   
                        </ErrorBoundry>
                    </Scroll>
                </div>
            ); 
    }
}


export default App;