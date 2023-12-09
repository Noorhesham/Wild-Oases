import { format, isToday } from "date-fns";
import { HiArrowDownOnSquare, HiEye } from "react-icons/hi2";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import { useNavigate } from "react-router";



function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate=useNavigate();
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  return (
    <Table.Row>
      <div className="text-2xl font-semibold text-gray-600 font-mono ">{cabinName}</div>

      <div className=" flex flex-col gap-1 first:font-bold last:text-gray-500 text-xl">
        <span>{guestName}</span>
        <span>{email}</span>
      </div>

      <div className=" flex flex-col gap-1 first:font-bold last:text-gray-500 text-xl">        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </div>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <div className=" font-mono font-semibold">{formatCurrency(totalPrice)}</div>
      <Menus.Menu>
        <Menus.Toggle id={bookingId} />
        <Menus.List id={bookingId} >
           <Menus.Button onClick={()=>navigate(`/bookings/${bookingId}`)} icon={<HiEye/>}> See details</Menus.Button> 
         {status==="unconfirmed"&&<Menus.Button onClick={()=>navigate(`/checkin/${bookingId}`)} icon={<HiArrowDownOnSquare/>}> Check in</Menus.Button> }
        </Menus.List>
      </Menus.Menu>
    </Table.Row>
  );
}

export default BookingRow;
