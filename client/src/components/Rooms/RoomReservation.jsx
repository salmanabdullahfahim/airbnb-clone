import React from "react";
import DatePicker from "./Calendar";
import Button from "../Button/Button";

const RoomReservation = () => {
  return (
    <div className="bg-white border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="font-semibold text-2xl">$ 200</div>
        <div className="text-neutral-400 font-light">night</div>
      </div>
      <hr />
      <DatePicker />
      <hr />
      <div className="p-4">
        <Button label="Reserve"></Button>
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ 300</div>
      </div>
    </div>
  );
};

export default RoomReservation;
