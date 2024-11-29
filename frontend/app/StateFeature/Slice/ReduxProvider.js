"use client"; // Important for app directory to mark it as a client component

import { Provider } from "react-redux";
import store from "./slice";

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
