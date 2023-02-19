import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const dispatch = useDispatch()
  const [reservation, setReservation] = useState("");
  const reservationList = useSelector((state: RootState) => state?.reservations.value)

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
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
