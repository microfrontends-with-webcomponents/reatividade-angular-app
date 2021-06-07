import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CustomBroadcast } from "src/utils/CustomBroadcast";
import { IWebWorker } from "src/utils/interfaces/IWebWorker";
import { WebWorker } from "src/utils/WebWorker";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styles: [],
})
export class ModalComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select("count");
  }
}
