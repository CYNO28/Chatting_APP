import React, { useRef } from "react";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { VscLock } from "react-icons/vsc";
import { AiOutlineGooglePlus } from "react-icons/ai";

import style from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../../Store/Auth/action";
const Login = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [Input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  function onLogin() {
    dispatch(login(Input));
  }
  function onSignup() {
    dispatch(signup(Input));
  }
  function onChangeHandler(e) {
    setInput({ ...Input, [e.target.name]: e.target.value });
  }

  const ref = useRef();
  const [postion, setpostion] = useState(true);
  function ChangeHandler() {
    if (postion) {
      ref.current.classList.add("goleft");
      ref.current.classList.remove("goright");
    } else {
      ref.current.classList.add("goright");
      ref.current.classList.remove("goleft");
    }
    setTimeout(() => {
      setpostion(!postion);
    }, 700);
  }

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {postion ? (
          <div className={style.rightbox}>
            <h2> Create Account</h2>
            <div className={style.iconbox}>
              <AiOutlineGooglePlus className={style.roundicon} />
            </div>
            <p>or use your email for registration</p>
            <div className={style.form}>
              <div className={style.inputspan}>
                <BiUser className={style.icon} />
                <input
                  type="text"
                  onChange={onChangeHandler}
                  name="name"
                  className={style.input}
                  placeholder="Name"
                />
              </div>
              <div className={style.inputspan}>
                <MdOutlineEmail className={style.icon} />
                <input
                  type="text"
                  className={style.input}
                  placeholder="Email"
                  onChange={onChangeHandler}
                  name="email"
                />
              </div>
              <div className={style.inputspan}>
                <VscLock className={style.icon} />
                <input
                  type="password"
                  className={style.input}
                  placeholder="Password"
                  onChange={onChangeHandler}
                  name="password"
                />
              </div>
              <button onClick={onSignup} className={style.btn}>
                SIGN UP
              </button>
            </div>
          </div>
        ) : (
          <div className={style.leftbox}>
            <h2> Login with us</h2>
            <div className={style.iconbox}>
              <AiOutlineGooglePlus className={style.roundicon} />
            </div>
            <p>or use your email for login</p>
            <div className={style.form}>
              <div className={style.inputspan}>
                <MdOutlineEmail className={style.icon} />
                <input
                  type="text"
                  className={style.input}
                  placeholder="Email"
                  onChange={onChangeHandler}
                  name="email"
                />
              </div>
              <div className={style.inputspan}>
                <VscLock className={style.icon} />
                <input
                  type="password"
                  className={style.input}
                  placeholder="Password"
                  onChange={onChangeHandler}
                  name="password"
                />
              </div>
              <p className={style.forgot}>Forgot your password ?</p>
              <button onClick={onLogin} className={style.btn}>
                SIGN IN
              </button>
            </div>
          </div>
        )}
        <div
          ref={ref}
          className={`${style.overlay}`}
          style={
            postion
              ? { borderRadius: "1rem 0 0 1rem" }
              : { borderRadius: "0 1rem 1rem 0" }
          }
        >
          {postion ? (
            <>
              <div className={style.right}>
                <h2>
                  <span>Hello, Friend!</span>
                </h2>
                <p>
                  <span>Enter your personal details</span>
                </p>
                <p>
                  <span>and start journey with us</span>
                </p>
              </div>
              <button className={style.btn} onClick={ChangeHandler}>
                <span>SIGN IN</span>
              </button>
            </>
          ) : (
            <>
              <div className={style.left}>
                <h2>
                  <span>Welcome , Back!</span>
                </h2>
                <span>To Keep Connecte with us please</span>
                <p>
                  <span>login with your personal info</span>
                </p>
              </div>
              <button className={style.btn} onClick={ChangeHandler}>
                <span>SIGN UP</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
