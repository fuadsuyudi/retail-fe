import { createStore } from 'redux';
import axios from 'axios';
import { authAction } from './action/authActionType';

const initialState = {
    auth: {
        isLogin: false,
        access: null,
        menus: null,
        layout: 'guest'
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authAction.SET_TOKEN:
            axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'

            return {
                ...state,
                auth: {
                    isLogin: true,
                    access: null,
                    menus: null,
                    layout: 'guest'
                }
            }
    
        default:
            return state
    }
}

export default createStore(authReducer)