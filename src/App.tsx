import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addCustomerMenu } from "./features/customerSlice";
import { addReservation } from "./features/reservationSlice";

function App() {
  const dispatch = useDispatch()
  const [reservation, setReservation] = useState("");
  const reservationList = useSelector((state: RootState) => state?.reservations.value)
  const customerList = useSelector((state: RootState) => state?.customer.value)

  const handleAddReserver = () => {
    if (!reservation) return
    dispatch(addReservation(reservation))
    setReservation("")
  }


  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {
                reservationList?.map((reservation, index) => (
                  // <div className="reservation-card-container" key={reservation.id}>
                  <ReservationCard name={reservation} index={index} />
                  // </div>
                ))
              }
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              type={"text"}
              name="reserver"
              placeholder="Add Reserver"
              value={reservation}
              onChange={(e) => setReservation(e.target.value)}
            />
            <button disabled={!reservation ? true : false} onClick={handleAddReserver}>Add Reserver</button>
          </div>
        </div>
        <div className="customer-food-container">
          {
            customerList?.map((customer, index) => (
              <CustomerCard name={customer.name} index={customer.id} food={customer.food} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
