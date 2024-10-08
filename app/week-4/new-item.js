"use client"
import { useState } from "react";

export default function NewItem(){
    const [quantity, setQuantity] = useState(1);
    
    const increment = () => {
        if (quantity<20){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity>1){
            setQuantity(quantity-1)
        }
    }

    return (
        <div className="bg-white text-black w-48 p-4 rounded shadow mx-auto my-auto">


            <div className="flex justify-between">
                <span className="my-auto w-12 text-center">{quantity}</span>
                <button onClick={decrement} disabled={quantity===1} className="bg-red-500 disabled:bg-gray-300 text-white px-4 py-2 rounded-md hover:bg-red-700">-</button>
                <button onClick={increment} disabled={quantity===20} className="bg-green-500 disabled:bg-gray-300 text-white px-4 py-2 rounded-md hover:bg-green-700">+</button>
            </div>
        </div>
    );
}

