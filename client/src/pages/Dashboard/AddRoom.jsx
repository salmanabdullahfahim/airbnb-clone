import React from "react";
import AddRoomForm from "../../components/Forms/AddRoomForm";

const AddRoom = () => {
  //handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const category = event.target.category.value;
    const title = event.target.title.value;
    const price = event.target.price.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const total_guest = event.target.total_guest.value;
    const from = dates.startDate;
    const to = dates.endDate;

    const image = event.target.image.files[0];
  };
  return (
    <div>
      <AddRoomForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddRoom;
