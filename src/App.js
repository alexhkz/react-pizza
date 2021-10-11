import React, {useEffect} from 'react';
import { Route } from 'react-router';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import {Header} from './components';
import {Home, Cart} from './pages';
import { setPizzas } from './redux/actions/pizzas';

const App = () => {

	const dispatch = useDispatch();
	

	useEffect(() => {
		axios.get('http://localhost:3000/db.json')
		.then(({data}) => {
 			dispatch(setPizzas(data.pizzas));
		});
	});

	return (
		<div className="wrapper">
			<Header />
		<div className="content">
			<Route path='/' component={Home} exact/>
			<Route path='/cart' component={Cart} exact/>
		</div>
	</div>
  )
};

export default App;

// const mapStateToProps = state => {
// 	return {
// 		items: state.pizzas.items,
// 		filters: state.filters
// 	}
// };

// const mapDispatchToProps = {
// 	setPizzas
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
