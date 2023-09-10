import React from "react";
import AddRoomForm from "../../components/Forms/AddRoomForm";

const AddRoom = () => {
  //handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <AddRoomForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddRoom;
