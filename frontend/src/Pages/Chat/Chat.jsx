import React, { useEffect, useState } from "react";
import style from "./Chat.module.css";
import io from "socket.io-client";
const socket = io("http://localhost:8080");
const Chat = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);
  const [Input, setInput] = useState("");
  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("pong", () => {
      setLastPong(new Date().toISOString());
    });
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  const sendPing = () => {
    socket.emit("ping");
    socket.emit("message", "hello");
  };
  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const onSubmitHandler = () => {
    console.log(Input);
    socket.emit("message", { message: Input, id: "123" });
    setInput("");
  };
  return (
    <div className={style.container}>
      <div className={style.leftdiv}>
        <div className={style.userList}>
        <div className={style.userBox}>
          <div className={style.imgBox}>
            <img src="" alt="" />
          </div>
        </div>
        </div>
      </div>
      <div className={style.rightdiv}>
        <div className={style.sendcontainer}>
          <input value={Input} type="text" onChange={onChangeHandler} />
          <button className={style.Sendbtn} onClick={onSubmitHandler}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
