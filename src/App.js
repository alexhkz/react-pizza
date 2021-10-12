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
		// Перенести в редакс и подключить редакс-санк.
		// Следить за фильтрацией и сортировкой и подставлять параметры в юрл из редакс.
		// Сделать имитацию загрузки пицц (которая есть в ЦСС и в ПиццаБлок).
		axios.get('http://localhost:3001/pizzas')
		.then(({data}) => {
 			dispatch(setPizzas(data));
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