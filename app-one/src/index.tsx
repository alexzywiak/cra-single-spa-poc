import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import singleSpaReact from "single-spa-react";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.getElementById("app-one") as Element,
});

export const bootstrap = [
  () => {
    // @ts-ignore
    __webpack_public_path__ = "webpackPublicPath";
    return Promise.resolve(true);
  },
  reactLifecycles.bootstrap,
];
export const mount = [reactLifecycles.mount];
export const unmount = [reactLifecycles.unmount];
