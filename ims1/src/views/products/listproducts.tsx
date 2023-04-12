import { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  sku: string;
  type: string;
  description: string;
  cost: number;
  price: number;
  quantity: number;
  purchase: string;
  sales: string;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/products/${id}`);
      setProducts((prevState) => prevState.filter((p) => p.id !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete product");
    }
  };

  return (
    <table className="table-fixed w-full mt-4">
      <thead>
        <tr>
          <th className="w-1/6">Name</th>
          <th className="w-1/6">SKU</th>
          <th className="w-1/6">Type</th>
          <th className="w-1/6">Description</th>
          <th className="w-1/6">Cost</th>
          <th className="w-1/6">Price</th>
          <th className="w-1/6">Quantity</th>
          <th className="w-1/6">Purchase</th>
          <th className="w-1/6">Sales</th>
          <th className="w-1/6">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.sku}</td>
            <td>{product.type}</td>
            <td>{product.description}</td>
            <td>{product.cost}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.purchase}</td>
            <td>{product.sales}</td>
            <td>
              <button
                type="button"
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                Edit
              </button>
              <button
                type="button"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
