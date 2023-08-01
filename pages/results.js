import React from "react";
import useStore from "./_store";

const Index = () => {
  const email = useStore((state) => state.email);
  console.log(email);

  return (
    <main className="w-[35.4167%] h-[50%] bg-white rounded-3xl flex flex-col items-start p-[64px] gap-7 overflow-hidden text-grey shadow-xl">
      <img src="./icon-success.svg" alt="icon success" />
      <h1 className=" leading-[60px]">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to{" "}
        <span className="text-dark-slate-grey font-bold">{email}</span>. Please
        open it and click the button inside to confirm your subscription
      </p>
      <button
        onClick={() => {
          const { push } = require("next/router");

          push("./");
        }}
      >
        Dismiss message
      </button>
    </main>
  );
};

export default Index;
