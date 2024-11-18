import { useLoaderData } from "react-router-dom";
import Brand from "../Components/Brand";

const Brands = () => {
const data = useLoaderData();


  return (
  <div className="text-center mx-auto mt-6">
    <h1 className="lg:text-6xl md:text-3xl text-xl font-semibold">Brands</h1>

    <div className="mb-6 mt-4">
        <input
          type="text"
          placeholder="Search a brand that you want..."
          className=" w-10/12 p-3 border rounded-md hover:ring-2 hover:ring-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>
      <div className="w-7/12 mx-auto flex flex-col justify-center gap-6">
      {
        data.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
      }
      </div>
  </div>
  );
};

export default Brands;
