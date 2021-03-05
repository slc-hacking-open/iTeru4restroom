import React, { FC, useEffect } from "react";

import Room, { RoomProps } from "./room";
// TODO 作る
// import "./floors.scss";
import { SSL_OP_NO_TLSv1_1 } from "constants";

export interface RoomsProps {
  rooms?: {
    roomId?: string;
    floor?: number;
    gender?: string;
    roomName?: string;
    isUsing?: boolean;
    elapsedMinutes?: number;
  }[];
  isFetching?: boolean;
  getRooms?: (locationName: string) => void;
}

const Rooms: FC<RoomsProps> = ({
  rooms = [],
  isFetching = false,
  getRooms = () => {}
}) => {
  useEffect(() => {
    const path = decodeURI(window.location.pathname.replace("/", ""));
    getRooms(path);
  }, []);

  // 階数の大きい順でソート
  const sorted = rooms.slice().sort((n1,n2) => {
    // undfindでエラーになる謎
    // if (n2.floor > n1.floor) return 1;
    // if (n2.floor < n1.floor) return -1;
    

    return 0;

  });

  return (
    <div className="Rooms">
      <img
        className={`Rooms-loading ${isFetching ? "-show" : "-hidden"}`}
        src="/loading.gif"
        alt="Now Loading"
      />
      {sorted.map((room: RoomProps) => {
        return (
          <Room
            key={room.roomId}
            floor={room.floor}
            gender={room.gender}
            roomName={room.roomName}
            elapsedMinutes={room.elapsedMinutes}
            isUsing={room.isUsing}
          />
        );
      })}
    </div>
  );
};

export default Rooms;
