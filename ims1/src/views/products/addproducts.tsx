import React, { useState } from "react";
import axios from "axios";

export default function AddProducts() {

  const [product_name, setProductname] = React.useState('')
  const [sku, setSku] = useState('')
  const [product_type, setProducttype] = useState('')
  const [product_description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [cost, setCost] = useState('')
  const [quantity, setQuantity] = useState('')
  const [purchase, setPurchase] = useState('')
  const [sales, setSales] = useState('')

  //const axios = require('axios')

  const dataInsert = () => {
    axios.post('http://localhost:5555/addproducts', {
      product_name: product_name,
      sku: sku,
      product_type: product_type,
      product_description: product_description,
      cost: cost,
      price: price,
      quantity: quantity,
      purchase: purchase,
      sales: sales
    })
      .then(function (response: any) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const handleSubmit = () => {

  }
  return (
    <div >

      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={product_name}
            onChange={(e) => setProductname(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="sku">
            SKU
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="sku"
            type="number"
            name="sku"
            value={sku}
            onChange={(e) => setSku(e.target.value)}

          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="type">
            Type
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="type"
            type="text"
            name="type"
            value={product_type}
            onChange={(e) => setProducttype(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline col-span-3"
            id="description"
            type="text"
            name="description"
            multiple

            value={product_description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Cost
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Cost"
            type="number"
            name="Cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Price"
            type="number"
            name="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Quantity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Quantity"
            type="number"
            name="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Total Purchased
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Purchase "
            type="number"
            name="Purchase"
            value={purchase}
            onChange={(e) => setPurchase(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Total Sales
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Sales "
            type="number"
            name="Sales"
            value={sales}
            onChange={(e) => setSales(e.target.value)}
          />
        </div>
        <div className="mx-auto">
          <button className="shadow appearance-none border rounded w-64" type="submit"
            onClick={dataInsert}

          >Add +</button>
        </div>

      </form>
    </div>
  )
}