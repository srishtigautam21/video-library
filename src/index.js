import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  ModalProvider,
  PlayListProvider,
  WatchLaterProvider,
  CategoryProvider,
} from "./context";

// Call make Server
makeServer();
// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <WatchLaterProvider>
          <PlayListProvider>
            <ModalProvider>
              <CategoryProvider>
                <App />
              </CategoryProvider>
            </ModalProvider>
          </PlayListProvider>
        </WatchLaterProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
