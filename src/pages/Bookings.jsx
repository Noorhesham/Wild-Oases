import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <div type="horizontal">
      <h1 className="font-semibold text-6xl mb-10 ">All bookings</h1>
      <BookingTableOperations/>
      <BookingTable/>
    </div>
  );
}

export default Bookings;
