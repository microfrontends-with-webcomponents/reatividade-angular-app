/// <reference lib="webworker" />

addEventListener("message", ({ data }) => {
  console.log("dentro do worker:" + data);
  postMessage(data);
});
