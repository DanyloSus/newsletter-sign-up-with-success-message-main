import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set) => ({
  email: "",
  writeEmail: (e) => {
    set(() => ({ email: e.target.value }));
  },
  checkEmail: (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value)) {
      document.getElementById("email").classList.add("border-tomato");
      document.getElementById("email").classList.add("text-tomato");
      const errorEl = document.getElementById("error");
      errorEl.classList.remove("-bottom-10");
      errorEl.classList.remove("opacity-0");
    } else {
      document.getElementById("email").classList.remove("border-tomato");
      document.getElementById("email").classList.remove("text-tomato");
      const errorEl = document.getElementById("error");
      errorEl.classList.add("-bottom-10");
      errorEl.classList.add("opacity-0");

      const { push } = require("next/router");

      push("./results");
    }
  },
});

store = devtools(store);
store = persist(store, { name: "user_email" });

const useStore = create(store);

export default useStore;
