import React from "react";
import { useDispatch } from "react-redux";
import { addCustomerMenu } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";
import { v4 as uuid } from "uuid";

interface ReservationCardProps {
    name: string;
    index: number;
}

const ReservationCard = ({ name, index }: ReservationCardProps) => {
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removeReservation(index));
        dispatch(addCustomerMenu({
            name: name,
            id: uuid(),
            food: []
        }))
    };
    return name ? (
        <div className="reservation-card-container" onClick={handleRemove}>
            {name}
        </div>
    ) : null;
};

export default ReservationCard;
