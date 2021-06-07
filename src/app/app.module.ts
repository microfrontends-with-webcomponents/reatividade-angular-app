import { DoBootstrap, Injector, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ButtonComponent } from "./components/button/button.component";
import { ModalComponent } from "./components/modal/modal.component";
import { StoreModule } from "./store/counter.module";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [AppComponent, ButtonComponent, ModalComponent],
  entryComponents: [AppComponent],
  imports: [BrowserModule, StoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}
  ngDoBootstrap(): void {
    // customElements.define(
    //   "app-root",
    //   createCustomElement(AppComponent, { injector: this.injector })
    // );
  }
}
