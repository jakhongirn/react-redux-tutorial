import {configureStore} from '@rduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
    reducer: {
        counter: counterReducer
    },
})