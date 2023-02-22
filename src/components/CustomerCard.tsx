import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomerFood, addCustomerMenu, removeCustomerMenu } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";

interface CustomerCardProps {
    name: string;
    id: string;
    food: string[]
}

const CustomerCard = ({ name, id, food }: CustomerCardProps) => {
    const dispatch = useDispatch();
    const [menu, setMenu] = useState("");

    const handleAddCustomerMenu = () => {
        if (!menu) return;
        dispatch(addCustomerFood({ food: menu, id }))
        setMenu("")
    }

    return (
        <>
            <div className="customer-food-card-container">
                <h3 style={{ fontWeight: "600", textTransform: "uppercase" }}>{name}</h3>
                <div className="customer-foods-container food-items">


                    <div className="customer-food">
                        {food?.map((customer, index) => (
                            <p key={index}>{customer}</p>
                        ))}
                    </div>


                    <div className="customer-food-input-container">
                        <input
                            type={"text"}
                            name="dish"
                            placeholder="Add Dish"
                            value={menu}
                            onChange={(e) => setMenu(e.target.value)}
                        />
                        <button
                            disabled={!menu ? true : false} onClick={handleAddCustomerMenu}
                        >Add Dish</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CustomerCard;
