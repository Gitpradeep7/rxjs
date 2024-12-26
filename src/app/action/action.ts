import { createAction } from "@ngrx/store"; 

export const increment = createAction('[component] increment');
export const decrement = createAction('[component] decrement');
export const reset = createAction('[component] reset');