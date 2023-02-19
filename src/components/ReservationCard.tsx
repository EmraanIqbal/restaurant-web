import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";

interface ReservationCardProps {
    name: string;
    index: number;
}

const ReservationCard = ({ name, index }: ReservationCardProps) => {
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removeReservation(index));
    };
    return name ? (
        <div className="reservation-card-container" onClick={handleRemove}>
            {name}
        </div>
    ) : null;
};

export default ReservationCard;
