import React, { FC, useState, useEffect } from "react";

import "./room.scss";

export interface RoomProps {
  roomId?: string;
  roomName?: string;
  isUsing?: boolean;
  elapsedMinutes?: number;
}

const Room: FC<RoomProps> = ({
  roomName = "",
  isUsing = true,
  elapsedMinutes = 0
}) => {
  // elapsedMinutes allows more than 61 minutes.
  const hours: number =
    elapsedMinutes > 0 ? Math.floor(elapsedMinutes / 60) : 0;
  const minutes: number = elapsedMinutes > 0 ? elapsedMinutes % 60 : 0;

  let elapsedTimeString = "　";
  if (isUsing) elapsedTimeString = "　";
  else if (hours === 0) elapsedTimeString = `${minutes}分`;
  else elapsedTimeString = `${hours}時間${minutes}分`;

  // 最初だけ隠しておいて、表示アニメーションする
  // Note: react-transition-group@1.x を使う方がよさげ
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    // 細かいことはわからんが、一瞬待ってやらんとうまくいかぬ
    setTimeout(() => {
      setIsShow(true);
    }, 1);
  }, []);

  return (
    <div
      className={`Room ${isUsing ? "-close" : "-open"} ${
        isShow ? "-show" : "-hide"
      }`}
    >
      <div className="Room-leftSide">
        <h1 className="Room-roomName">{roomName}</h1>
        <p className="Room-elapsedTime">{elapsedTimeString}</p>
      </div>
      <img
        className="Room-icon"
        alt="開閉"
        // src={"/woman.svg"}
        src={isUsing ? "/woman.svg" : "man.svg"}
      />
    </div>
  );
};

export default Room;
