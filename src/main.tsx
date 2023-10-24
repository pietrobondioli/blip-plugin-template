import App from "@/App";
import "@/global";
import routes from "@/routes";
import { IframeMessageProxy } from "iframe-message-proxy";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ResizeObserver } from "resize-observer";
import TrackingEvents from "./constants/tracking-events";
import reportWebVitals from "./reportWebVitals";
import { track } from "./services/analytics-service";
import { setHeight } from "./services/common-service";

const container = document.getElementById("root") as HTMLElement;

// Resize app in the Portal
const observer = new ResizeObserver(() => {
  setHeight(container.scrollHeight);
});
observer.observe(container);

// handle communication through browser post messages
IframeMessageProxy.listen();

const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
    errorElement: <div>error</div>,
  },
]);

// segment tracking - extension opened
track(TrackingEvents.EXTENSION_OPENED);

root.render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<div>loading...</div>} />
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
