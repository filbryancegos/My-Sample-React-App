import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import './tailwind-ui.min.css'
import User from './components/User';
import Home from './components/Home';
import Nav from './components/Layout/Nav';
import Footer from './components/Layout/Footer';
import Items from './components/Items';
import ItemDetail from './components/ItemDetail';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import Pokemon from './components/Pokemon';
import Timer from './components/Timer';
import Shopping from './components/Shopping';
import ShoppingReducer from './components/ShoppingReducer';
import UseReducer from './components/UseReducer';
import Form from './components/Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Nav/>
					<div className="content container mx-auto">
						<Switch>
							<Route path="/" exact component={Home}></Route>
							<Route path="/user" component={User}></Route>
							<Route path="/items" exact component={Items}></Route>
							<Route path="/items/:id" component={ItemDetail}></Route>
							<Route path="/movies" exact  component={Movies}></Route>
							<Route path="/movies/:id"  component={MovieDetails}></Route>
							<Route path="/pokemon"  component={Pokemon}></Route>
							<Route path="/timer"  component={Timer}></Route>
							<Route path="/shopping"  component={Shopping}></Route>
							<Route path="/shoppingreducer"  component={ShoppingReducer}></Route>
							<Route path="/usereducer"  component={UseReducer}></Route>
							<Route path="/form"  component={Form}></Route>
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
}
export default App;









