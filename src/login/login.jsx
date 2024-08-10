import React from "react";
import { useRef, useEffect, useState } from "react";
import "../App.css";

function Login() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    setFullName("");
    setEmail("");
    setPassword("");
  }, []);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);

  function signUp() {
    box1.current.style.transform = "translateX(100%)";
    box2.current.style.transform = "translateX(-100%)";
    box3.current.style.transform = "translateX(0%)";
    box4.current.style.transform = "translateX(-100%)";
    box5.current.style.transform = "translateX(0%)";
  }

  function login() {
    box1.current.style.transform = "translateX(0%)";
    box2.current.style.transform = "translateX(0%)";
    box3.current.style.transform = "translateX(100%)";
    box4.current.style.transform = "translateX(0%)";
    box5.current.style.transform = "translateX(100%)";
  }

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(
        "https://65a013a25023b02bfe8b3a4d.mockapi.io/Login"
      );
      const data = await response.json();

      const existingUser = data.find((user) => user.Email === email);
      if (existingUser) {
        alert("There is an account with this email already");
        return;
      }

      const newUser = {
        FullName: fullName,
        Email: email,
        Password: password,
      };

      const postResponse = await fetch(
        "https://65a013a25023b02bfe8b3a4d.mockapi.io/Login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );

      if (postResponse.ok) {
        alert("Your account has been created successfully!");
        setFullName("");
        setEmail("");
        setPassword("");
      } else {
        throw new Error("Failed to create account");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const response = await fetch(
        "https://65a013a25023b02bfe8b3a4d.mockapi.io/Login"
      );
      const data = await response.json();

      const user = data.find(
        (user) => user.Email === email && user.Password === password
      );

      if (user) {
        alert(`Welcome, ${user.FullName}!`);
        window.location.href = "/";
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <>
      <div className="w-[100%] login-img bg-fixed font-font1 flex justify-center h-[100vh] fixed top-0 z-50 bg-[rgb(192,192,192)]">
        <div className="2xl:container flex justify-center items-center w-[100%] h-[100%]">
          <section className="hidden w-[70%] h-[80%] lg:grid items-center">
            <div className="w-[100%] h-[100%] flex justify-center items-center gridArea">
              <div className="w-[100%] h-[40%] md:h-[60%] bg-neutral-800 rounded-md flex opacity-80">
                <article className="w-[50%] h-[100%] flex flex-wrap justify-center content-center gap-7">
                  <h4 className="w-[70%] text-white text-[2rem]">
                    Have an account?
                  </h4>
                  <p className="w-[70%] text-white text-[1rem]">
                    Banjo tote bag bicycle rights, High Life sartorial cray
                    craft beer whatever street art fap.
                  </p>
                  <button
                    onClick={login}
                    className="w-[40%] text-[1.5rem] uppercase border-2 rounded-md text-white hover:bg-slate-400 hover:text-black transition-all duration-300 py-2"
                  >
                    login
                  </button>
                </article>
                <article className="w-[50%] h-[100%] flex flex-wrap justify-center content-center gap-7">
                  <h4 className="w-[70%] text-white text-[2rem]">
                    Do not have an account?
                  </h4>
                  <p className="w-[70%] text-white text-[1rem]">
                    Banjo tote bag bicycle rights, High Life sartorial cray
                    craft beer whatever street art fap.
                  </p>
                  <button
                    onClick={signUp}
                    className="w-[40%] text-[1.5rem] uppercase border-2 rounded-md text-white hover:bg-slate-400 hover:text-black transition-all duration-300 py-2"
                  >
                    sign up
                  </button>
                </article>
              </div>
            </div>
            <div
              ref={box1}
              className="w-[46.3%] h-[60%] lg:h-[100%] shadow-2xl grid drop-shadow-lg gridArea mx-10 bg-white transition-all duration-500 rounded-xl overflow-hidden"
            >
              <article
                ref={box2}
                className="w-[100%] h-[100%] gridArea flex flex-wrap justify-start content-center gap-10 text-[2ewm] p-10 py-20 transition-all duration-500"
              >
                <h4 className="w-[100%] text-[3rem] text-[#269FB7] uppercase flex justify-start items-center">
                  login
                </h4>
                <form onSubmit={handleLogin} className="flex flex-wrap gap-3">
                  <input
                    type="email"
                    className="w-[100%] text-[2rem] border-b-2 border-zinc-300 bg-white px-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    className="w-[100%] text-[2rem] border-b-2 border-zinc-300 bg-white px-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="w-[40%] text-[1.5rem] uppercase rounded-md text-white bg-[#269FB7] hover:bg-black transition-all duration-300 py-2"
                  >
                    login
                  </button>
                </form>
              </article>
              <article
                ref={box3}
                className="w-[100%] h-[100%] gridArea flex flex-wrap justify-start content-center gap-5 text-[2ewm] p-10 py-20 translate-x-[100%] transition-all duration-500"
              >
                <h4 className="w-[100%] text-[3rem] text-[#269FB7] uppercase flex justify-start items-center">
                  sign up
                </h4>
                <form onSubmit={handleSignUp} className="flex flex-wrap gap-3">
                  <input
                    id="inpSign1"
                    type="text"
                    className="w-[100%] text-[2rem] border-b-2 border-zinc-300 bg-white px-3"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                  <input
                    id="inpSign2"
                    type="email"
                    className="w-[100%] text-[2rem] border-b-2 border-zinc-300 bg-white px-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    id="inpSign3"
                    type="password"
                    className="w-[100%] text-[2rem] border-b-2 border-zinc-300 bg-white px-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="w-[40%] text-[1.5rem] uppercase rounded-md text-white bg-[#269FB7] hover:bg-black transition-all duration-300 py-2"
                  >
                    sign up
                  </button>
                </form>
              </article>
            </div>
          </section>
          <section className="grid lg:hidden w-[100%] md:w-[90%] h-[90%]">
            <div className="w-[100%] h-[100%] bg-[rgba(0,0,0,.5)] py-5 rounded-md gridArea flex justify-center items-start">
            </div>
            <div className="w-[100%] flex flex-wrap gridArea justify-center myElement3 items-center overflow-y-scroll">
              <div className="w-[100%] flex justify-around ">
                <button
                  onClick={login}
                  className="px-4 text-[1.5rem] uppercase bg-1 rounded-md text-white hover:shadow-lg hover:shadow-cyan-500 hover:bg-black transition-all duration-300 py-2"
                >
                  login
                </button>
                <button
                  onClick={signUp}
                  className="px-4 text-[1.5rem] uppercase bg-1 rounded-md text-white hover:shadow-lg hover:shadow-cyan-500 hover:bg-black transition-all duration-300 py-2"
                >
                  sign up
                </button>
              </div>
              <div className="w-[95%] md:w-[80%] h-[80%] bg-white rounded-lg grid overflow-hidden myElement3 overflow-y-scroll ">
                <div
                  ref={box4}
                  className="w-[100%] h-[100%] flex gridArea transition-all duration-300 -translate-x-[100%] flex-wrap gridArea justify-center items-center"
                >
                  <form
                    onSubmit={handleLogin}
                    className="w-[100%] md:w-[70%] h-[100%] content-center gap-10 flex flex-wrap "
                  >
                    <h4 className="w-[100%] text-[3rem] text-[#269FB7] uppercase flex justify-center md:justify-start items-center">
                      login
                    </h4>
                    <input
                      type="email"
                      className="w-[100%] text-[2rem] border-b-2 border-zinc-300 bg-white px-3"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      type="password"
                      className="w-[100%] text-[2rem] border-b-2 border-zinc-300 bg-white px-3"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="w-[40%] text-[1.5rem] uppercase rounded-md text-white bg-[#269FB7] hover:bg-black transition-all duration-300 py-2"
                    >
                      login
                    </button>
                  </form>
                </div>
                <div
                  ref={box5}
                  className="w-[100%] h-[100%] flex gridArea transition-all duration-300 translate-x-0 flex-wrap justify-center gridArea items-center "
                >
                  <form
                    onSubmit={handleSignUp}
                    className="w-[100%] md:w-[70%] h-[100%] content-center gap-10 flex flex-wrap "
                  >
                    <h4 className="w-[100%] justify-center text-[3rem] text-[#269FB7] uppercase flex md:justify-start items-center">
                      sign up
                    </h4>
                    <input
                      id="inpSign1"
                      type="text"
                      className="w-[100%] text-[2rem] border-b-2 border-zinc-300 bg-white px-3"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                    <input
                      id="inpSign2"
                      type="email"
                      className="w-[100%] text-[2rem] border-b-2 border-zinc-300 bg-white px-3"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      id="inpSign3"
                      type="password"
                      className="w-[100%] text-[2rem] border-b-2 border-zinc-300 bg-white px-3"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="w-[40%] text-[1.5rem] uppercase rounded-md text-white bg-[#269FB7] hover:bg-black transition-all duration-300 py-2"
                    >
                      sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Login;
