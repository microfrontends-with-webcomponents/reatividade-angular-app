import { StoreModule as StoreModuleCounter } from "@ngrx/store";
import { counterReducer } from "./counter.reducer";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [StoreModuleCounter.forRoot({ count: counterReducer })],
})
export class StoreModule {}
