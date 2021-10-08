import React, {useEffect, useState} from 'react';
import { Route } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';

import {Header} from './components';
import {Home, Cart} from './pages';
import { setPizzas } from './redux/actions/pizzas';
import store from './redux/store';

// function App() {

// 	useEffect(() => {
// 		axios.get('http://localhost:3000/db.json')
// 		.then(({data}) => {
// 			setPizzas(data.pizzas)
// 		});
// 	}, []);

//   return ;
// }

class App extends React.Component {
	componentDidMount() {
		axios.get('http://localhost:3000/db.json')
		.then(({data}) => {
 			this.props.setPizzas(data.pizzas);
		});
	}

	render() {
		console.log(this.props)
		return (
			<div className="wrapper">
				<Header />
			<div className="content">
				<Route path='/' render={() => <Home items={this.props.items} />} exact/>
				<Route path='/cart' component={Cart} exact/>
			</div>
		</div>
	  )
	}
}

const mapStateToProps = state => {
	return {
		items: state.pizzas.items,
		filters: state.filters
	}
};

const mapDispatchToProps = {
	setPizzas
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
