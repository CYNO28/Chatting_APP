import React, { useRef } from "react";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { VscLock } from "react-icons/vsc";
import { AiOutlineGooglePlus } from "react-icons/ai";

import style from "./Login.module.css";
const Login = () => {
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
                <input type="text" className={style.input} placeholder="Name" />
              </div>
              <div className={style.inputspan}>
                <MdOutlineEmail className={style.icon} />
                <input
                  type="text"
                  className={style.input}
                  placeholder="Email"
                />
              </div>
              <div className={style.inputspan}>
                <VscLock className={style.icon} />
                <input
                  type="text"
                  className={style.input}
                  placeholder="Password"
                />
              </div>
              <button className={style.btn}>SIGN UP</button>
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
                />
              </div>
              <div className={style.inputspan}>
                <VscLock className={style.icon} />
                <input
                  type="text"
                  className={style.input}
                  placeholder="Password"
                />
              </div>
              <p className={style.forgot}>Forgot your password ?</p>
              <button className={style.btn}>SIGN IN</button>
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
