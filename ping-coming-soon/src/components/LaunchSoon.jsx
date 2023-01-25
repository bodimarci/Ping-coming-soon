import React, { useState } from "react";
import logo from "../assets/pinglogo.svg";

const LaunchSoon = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailCheck = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("");
    } else if (!regEx.test(email) && email === "" || email !== "") {
      setMessage("Please provide a valid email address");
       }
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section>
      <div className="my-16 flex justify-center">
        <img src={logo} alt="PING." />
      </div>
      <div className="flex justify-center">
        <h1 className="sm:text-5xl text-3xl font-thin text-[#969696]">
          We are launching{" "}
          <span className="text-[#151F29] font-[700]">soon!</span>
        </h1>
      </div>
      <div className="flex justify-center mt-4">
        <p className="sm:text-lg text-md text-[#151F29] font-libre">
          Subscribe and get notified
        </p>
      </div>
      <div className="sm:flex justify-center mt-8">
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Your email address..."
          className="flex justify-center mx-auto sm:mx-0 font-libre font-[300] text-[#969696] sm:py-4 py-3 pl-8 sm:w-[440px] w-[85%] border-2 border-[#C2D3FF] rounded-full  placeholder:text-[#C2D3FF] mb-8 sm:mb-0"
        />
        <p className="sm:hidden text-[#FF5263] flex-col text-center mt-[-12px] font-libre mb-3 sm:mb-0">
          {message}
        </p>
        <button
          onClick={emailCheck}
          className="bg-[#4F7DF3] rounded-full text-white flex justify-center mx-auto sm:mx-0 sm:ml-3 sm:py-4 py-3 text-center font-[600] shadow-lg shadow-[#C2D3FF] w-[85%] sm:w-[220px]"
        >
          Notify Me
        </button>
      </div>
      {/* desktop */}
      <p className="hidden sm:block text-center text-[#FF5263]">{message}</p>
    </section>
  );
};

export default LaunchSoon;
