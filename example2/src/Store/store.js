import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/postslice'
import usersReducer from '../features/usersslice'
const store=configureStore({
    reducer:{
        posts:postsReducer,
        users:usersReducer
    }
});
export default store;