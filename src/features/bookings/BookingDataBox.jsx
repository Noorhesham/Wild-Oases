import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";

import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";



// A purely presentational component
function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <section className=" bg-white border-gray-100 rounded-lg">
      <header
        className=" bg-[color:var(--color-brand-500)] py-10 px-20 text-[#e0e7ff] text-[1.8rem] font-semibold 
      flex items-center justify-between"
      >
        <div className="flex items-center gap-7 font-semibold text-[1.8rem]">
          <HiOutlineHomeModern className=" h-[3.2rem] w-[3.2rem] text-white " />
          <p>
            {numNights} nights in Cabin{" "}
            <span className=" ml-2 text-4xl font-mono">{cabinName}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </header>

      <section className=" pt-12 pr-16 pb-5 ">
        <div className=" flex items-center gap-3 mb-7 text-gray-500">
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <p className=" font-semibold text-gray-700">
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </div>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText className=" w-8 h-8 text-[color:var(--color-brand-600)]" />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle className=" w-8 h-8 text-[color:var(--color-brand-600)]" />} label="Breakfast included?">
          {hasBreakfast ? "Yes" : "No"}
        </DataItem>
        <div  className={`${isPaid?'bg-[color:var(--color-green-100)] text-[color:var(--color-green-700)]'
        :'bg-[color:var(--color-green-700)] text-[color:var(--color-green-100)]'}
        flex items-center justify-between py-7 px-14 rounded-sm mt-10`} isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar className=" w-8 h-8 text-[color:var(--color-brand-600)]" />} label={`Total price`}>
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>

          <p className="uppercase text-[1.4rem] font-bold">{isPaid ? "Paid" : "Will pay at property"}</p>
        </div>
      </section>
      <footer className=" py-10 px-20 text-[1.4rem] text-gray-500 text-right">
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </footer>
    </section>
  );
}

export default BookingDataBox;
