import React from "react";
import useStore from "./_store";

const Index = () => {
  const email = useStore((state) => state.email);
  const writeEmail = useStore((state) => state.writeEmail);
  const checkEmail = useStore((state) => state.checkEmail);

  return (
    <main>
      <div className="flex flex-col gap-5 text-anim">
        <h1>Stay updated!</h1>
        <p className="">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul>
          <li>
            <img src="./icon-list.svg" alt="icon list" />
            Product discovery and building what matters
          </li>
          <li>
            <img src="./icon-list.svg" alt="icon list" />
            Measuring to ensure updates are a success
          </li>
          <li>
            <img src="./icon-list.svg" alt="icon list" />
            And much more!
          </li>
        </ul>
        <form className="flex flex-col gap-3" onSubmit={checkEmail}>
          <div className="flex justify-between">
            <p className="text-dark-slate-grey text-xs font-bold">
              Email address
            </p>
            <p
              className="text-tomato text-xs relative -bottom-10 opacity-0 transition-all ease-in-out duration-500"
              id="error"
            >
              Email address
            </p>
          </div>
          <input
            type="email"
            placeholder="email@company.com"
            className="border border-black w-full py-3 px-6 rounded-lg"
            value={email}
            id="email"
            onChange={writeEmail}
          />
          <input value="Subscribe to monthly newsletter" type="submit" />
        </form>
      </div>
      <div className="md:w-screen md:flex md:items-center md:justify-center img-anim">
        <img
          src="./illustration-sign-up-desktop.svg"
          alt="illustration sign up desktop"
          className="md:hidden"
        />
        <img
          src="./illustration-sign-up-mobile.svg"
          alt="illustration sign up mobile"
          className="md:block hidden relative top-0 -left-0 md:min-w-screen"
        />
      </div>
    </main>
  );
};

export default Index;
