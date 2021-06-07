import { increment, decrement, reset } from "./counter.actions";
import { createReducer, on } from "@ngrx/store";

export const initialState = 0;
const _counterReducer = createReducer(
  initialState,
  on(increment, (state: any) => state + 1),
  on(decrement, (state: any) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
