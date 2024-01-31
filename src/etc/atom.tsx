import { useLocation } from "react-router-dom";
import { atom } from "recoil";

export const DarkMode = atom({
  key: "DarkMode", 
  default: false, 
});
