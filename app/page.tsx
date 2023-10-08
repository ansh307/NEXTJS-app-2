import { Product } from "@/typings";
import { addProductToDatabase } from "@/actions/serverActions";

export default async function Home() {
  const res = await fetch("https://65224cb6f43b179384145f8d.mockapi.io/products", {
    cache: "no-cache",
    next: {
      tags: ["products"],
    },
  });
  const products: Product[] = await res.json();

  return (
    <main className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center my-4">Products Warehouse</h1>
      <form action={addProductToDatabase} className="flex flex-col gap-2 max-w-xl mx-auto p-5">
        <input
          name="product"
          type="text"
          placeholder="Product Name"
          className="border border-gray-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="price"
          type="text"
          placeholder="Price"
          className="border border-gray-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded-md shadow-md transition duration-300">
          Add Product
        </button>
      </form>

      <h2 className="text-2xl font-semibold my-4">List of Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md transition duration-300 hover:shadow-xl cursor-pointer">
            <h3 className="text-lg font-semibold text-blue-500">{product.product}</h3>
            <p className="text-gray-700">Price: {product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
