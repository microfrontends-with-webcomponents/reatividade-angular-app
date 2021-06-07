import { IWebWorker } from "./interfaces/IWebWorker";

class WebWorker implements IWebWorker {
  _worker: any;

  constructor() {
    this._worker = (window as any)["GlobalWebWorker"];
  }

  publishMessage(message: any): void {
    this._worker.say(message);
  }
  listenMessage(callback: Function): void {
    this._worker.addEventListener("message", (data: any) => {
      callback(data);
    });
  }
}

export { WebWorker };
