import BookingDataBox from "./BookingDataBox";
import Tag from "../../ui/Tag";
import Button from "../../ui/Button";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./USEbOOKING.JS";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router";


function BookingDetail() {
  const navigate=useNavigate()
  const {booking,isLoading} = useBooking();
  if (isLoading) return <Spinner />;
  const { status, id: bookingId } = booking;
  const moveBack = useMoveBack();
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <div className=" flex justify-between items-center">
        <div className=" flex gap-10 items-center">
          <h1 className="font-semibold text-6xl mb-10 ">Booking #${bookingId}</h1>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </div>
        <button className=" text-[color:var(--color-brand-600)] font-semibold text-center
         transition-all duration-75 bg-none rounded-sm hover:text-[color:var(--color-brand-700)]
         active:text-[color:var(--color-brand-700)]" onClick={moveBack}>&larr; Back</button>
      </div>

      <BookingDataBox booking={booking} />

      <div className=" flex gap-5 justify-end">
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
        {status==="unconfirmed"&&<Button variation="primary" onClick={()=>navigate(`/checkin/${bookingId}`)}>
          Check in
        </Button>}
      </div>
    </>
  );
}

export default BookingDetail;
