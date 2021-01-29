import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../src/components/layouts/Navbar.js';
import Alert from '../src/components/layouts/Alert.js';
// import Users from '../src/components/users/Users.js';
import User from '../src/components/users/User';
// import Search from '../src/components/users/Search';
// import axios from 'axios';
import About from '../src/components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from '../src/components/pages/Home';
import NotFound from '../src/components/pages/NotFound';
import './App.css';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App'>
						<Navbar />
						<div className='container'>
							<Alert />
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route exact path='/user/:login' component={User} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
