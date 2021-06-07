export interface IWebWorker {
  publishMessage(message: any, type?: string): void;
  listenMessage(callback: Function, type?: string): void;
}
