import {
    CAR_LIST_REQUEST,
    CAR_LIST_SUCCESS,
    CAR_LIST_FAIL,
    CAR_DETAIL_REQUEST,
    CAR_DETAIL_SUCCESS,
    CAR_DETAIL_FAIL,
} from '../constants/carConstants'

export const carListReducer = (state = { cars: [] }, action) => {
    const actions = {
        [CAR_LIST_REQUEST]: { loading: true, cars: [] },
        [CAR_LIST_SUCCESS]: { loading: false, cars: action.payload },
        [CAR_LIST_FAIL]: { loading: false, error: action.payload },
    }

    const res = actions[action.type]
    return (res !== undefined) ? res : state
}

export const carDetailReducer = (state = { car: { reviews: [] } }, action) => {
    const actions = {
        [CAR_DETAIL_REQUEST]: { loading: true, ...state },
        [CAR_DETAIL_SUCCESS]: { loading: false, car: action.payload },
        [CAR_DETAIL_FAIL]: { loading: false, error: action.payload },
    }

    const res = actions[action.type]
    return (res !== undefined) ? res : state
}
