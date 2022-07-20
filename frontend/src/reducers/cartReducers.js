import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    const actions = {
        [CART_ADD_ITEM]: () => {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.car === item.car);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(
                        x => x.car === existItem.car ? item : x
                    )
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                };
            }
        },
        [CART_REMOVE_ITEM]: () => {
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.car !== action.payload)
            };
        }
    };

    const res = actions[action.type];
    return (res !== undefined) ? res() : state;
};
