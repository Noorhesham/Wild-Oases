import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty"
import {useBookings} from "./useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const {isLoading,bookings,count} =useBookings();
 
  if (isLoading) return <Spinner />;
  if(!bookings.length) return <Empty resource="bookings" />
  // const filter=searchParams.get('status');
  // const filteredBookings=filter==='all'?bookings:bookings.filter(booking=>booking.status===filter);
  // const sort=searchParams.get("sortBy");
  // const modifier=sort.split('-')[1]==="asc"?1:-1;
  // console.log(modifier)
  // const sortedBookings=filteredBookings.sort((a,b)=>(a[sort.split('-')[0]]-b[sort.split('-')[0]])*modifier);
  // console.log(sortedBookings)

  return (
    <Menus>
      <Table column="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        {count>5&&<Table.Footer><Pagination count={count} /></Table.Footer>}
      </Table>
      
    </Menus>
  );
}

export default BookingTable;
