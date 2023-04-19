import { configureStore } from "@reduxjs/toolkit";
import { personslice } from "./personslice";
import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux/es/exports";
export const store=configureStore(
    {
        reducer:{
            person:personslice.reducer
        }
    }
)

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
