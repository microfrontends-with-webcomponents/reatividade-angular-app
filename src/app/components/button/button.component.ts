import { Component } from "@angular/core";
import { Store, Action } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { CustomCommunicationEvents } from "src/utils/CustomCommunicationEvents";
import { IWebWorker } from "src/utils/interfaces/IWebWorker";
import { WebWorker } from "src/utils/WebWorker";
import { CustomBroadcast } from "src/utils/CustomBroadcast";
import { increment, decrement, reset } from "../../store/counter.actions";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
})
export class ButtonComponent {
  _store: Store;
  countSub: Subscription;
  count: number = 0;
  worker: IWebWorker;
  broadName: string = "counter";

  constructor(
    private store: Store,
    private accessStore: Store<{ count: number }>
  ) {
    this._store = store;
    this.worker = new CustomCommunicationEvents();
    this.countSub = accessStore.select("count").subscribe((c: number) => {
      this.count = c;
    });
  }

  onCountChange = (data: any) => {
    if (!!this.worker) {
      this.worker.publishMessage(data);
    }
  };

  increment() {
    this._store.dispatch(increment());
    this.onCountChange({
      type: increment().type,
      payload: this.count,
    });
  }

  decrement() {
    this._store.dispatch(decrement());
    this.onCountChange({ type: decrement().type, payload: this.count });
  }

  reset() {
    this._store.dispatch(reset());
    this.onCountChange({ type: reset().type, payload: this.count });
  }
}
