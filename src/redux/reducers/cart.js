const initialState = {
	items: {},
	totalPrice: 0,
	itemsCount: 0
}

const Cart = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_PIZZA_CARD':
			return {
				...state,
				items: {
					[action.payload.id] : [
						...state.items[action.payload.id],
						action.payload
					]
				}
			};
		default:
			return state;
	} 
}

export default Cart;