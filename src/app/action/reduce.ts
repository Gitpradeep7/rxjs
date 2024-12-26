import { createReducer, on } from "@ngrx/store";
import { increment,decrement,reset } from "./action";

export const initialcount =0;
export const counterReducer = createReducer(
    initialcount,
    on(increment, (state)=> state +1),
    on(decrement,(state)=> state -1),
    on(reset,(state)=> 0)
)