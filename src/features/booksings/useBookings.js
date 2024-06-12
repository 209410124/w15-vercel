import { useEffect } from "react";
import {getBooking} from '../services/apiBookings'


const Bookings_24 = () => {
  useEffect(()=>{
    getBooking(1).then((data) => console.log('booking(1) data',data));
  },[]);
  return <>Bookings_24 page</>;
};

export default Bookings_24;
