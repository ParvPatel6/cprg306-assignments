'use client'

import Item from "./item.js"
import { useState } from "react"
import Items from './items.json'

let ItemList = () => {
 
    const [sortBy, setSortBy] = useState('name')
    const [sortedArray, setSortedArray] = useState([...Items])

    let sortByName = () => {
        setSortBy('name')
        let sortedItems = [...sortedArray].sort((a, b) => a.name.localeCompare(b.name));
        setSortedArray([...sortedItems])
    }

    let sortByCategory = () => {
        setSortBy('category')
        let sortedItems = [...sortedArray].sort((a, b) => a.category.localeCompare(b.category));
        setSortedArray([...sortedItems])
    }

    return(
        <>
        <div className="flex space-x-4 m-4">
        <label className="text-lg text-white mb-2">Sort By: </label>
        <button className={`px-4 py-2 text-white rounded ${sortBy === 'name' ? 'bg-gray-500' : 'bg-gray-400'}`} onClick={sortByName}>Name</button>
        <button className={`px-4 py-2 text-white rounded  ${sortBy === 'category' ? 'bg-gray-500' : 'bg-gray-400'}`} onClick={sortByCategory}>Category</button>
        </div>
        
        {
        sortedArray.map((item) => {
            return(
                <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}/>
            )
        })
        }


       
        </>
    );
}

export default ItemList