import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";
import Button from "../../ui/Button";


import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import Tag from "../../ui/Tag";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const moveBack = useMoveBack();
  const {booking,isLoading}= useBooking();
  if(isLoading) return <Spinner/>
  console.log(booking)
  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;
  function handleCheckin(){}
  return (
    <section>
      <div className="  flex  justify-between  items-center">
        <h1 className="font-semibold text-6xl mb-20">Check in booking #{bookingId}</h1>
        <button className="text-[color:var(--color-brand-600)] font-semibold text-center transition-all duration-100 bg-none
        border-none rounded-sm hover:text-[color:var(--color-brand-700)] active:text-[color:var(--color-brand-700)]  " onClick={moveBack}>&larr; Back</button>
      </div>

      <BookingDataBox booking={booking} />

      <div className=" flex justify-end gap-5">
        <Button variation="primary" onClick={handleCheckin}>Check in booking #{bookingId}</Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </div>
    </section>
  );
}

export default CheckinBooking;
