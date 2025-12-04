"use client";

import Button from "@/components/Button";

export default function AddBookingButton() {
  const handleClick = () => {
    alert("Add Booking clicked");
  };

  return <Button width="32" title="Add Booking" onClick={handleClick} />;
}
