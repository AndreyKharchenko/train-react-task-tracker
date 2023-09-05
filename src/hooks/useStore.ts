import { useContext } from "react";
import { rootStoreContext } from "../store/index";

export const useStore = () => useContext(rootStoreContext);
