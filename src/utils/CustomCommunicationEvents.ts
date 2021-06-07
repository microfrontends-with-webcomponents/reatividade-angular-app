import { IWebWorker } from "./interfaces/IWebWorker";

class CustomCommunicationEvents implements IWebWorker {
  _event: any;

  constructor() {}

  publishMessage(message: any): void {
    this._event = new CustomEvent("message", { detail: message });
    window.dispatchEvent(this._event);
  }
  listenMessage(callback: Function): void {
    window.addEventListener("message", ({ data }: any) => {
      callback(data);
    });
  }
}

export { CustomCommunicationEvents };
