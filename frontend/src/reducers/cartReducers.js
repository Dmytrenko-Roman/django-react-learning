import { CART_ADD_ITEM } from '../constants/cartConstants';

// const checkItem = (state, action) => {
//     const item = action.payload;
//     const existItem = state.cartItems.find((x) => x.car === item.car);

//     if (existItem) {
//         return {
//             ...state,
//             cartItems: state.cartItems.map(
//                 x => x.car === existItem.car ? item : x
//             )
//         };
//     } else {
//         return {
//             ...state,
//             cartItems: [...state.cartItems, item]
//         };
//     }
// };

export const cartReducer = (state = { cartItems: [] }, action) => {
    // const actions = {
    //     [CART_ADD_ITEM]: checkItem(state, action),
    // };

    // const res = actions[action.type];
    // return (res !== undefined) ? res : state;

    switch (action.type) {
        case CART_ADD_ITEM: {
            const item = action.payload
            const existItem = state.cartItems.find(x => x.product === item.product)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.product === existItem.product ? item : x)
                }

            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        }
        default:
            return state
    }
};
