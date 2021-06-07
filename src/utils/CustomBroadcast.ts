import { IWebWorker } from "./interfaces/IWebWorker";

class CustomBroadcast implements IWebWorker {
  _channels: BroadcastChannel[] = [];

  constructor(name: string) {
    this._channels.push(new BroadcastChannel(name));
  }
  publishMessage(message: any, type?: string): void {
    this._channels.forEach(
      (channel) => channel.name === type && channel.postMessage(message)
    );
  }
  listenMessage(callback: Function, type?: string): void {
    this._channels.forEach((channel) => {
      if (channel.name === type)
        channel.onmessage = (msg) => {
          console.log("Showing details of " + msg.data.payload);
        };
    });
  }
}

export { CustomBroadcast };
