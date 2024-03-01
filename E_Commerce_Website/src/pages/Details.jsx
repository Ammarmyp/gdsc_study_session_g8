import React from "react";
import Header from "../components/Header";
import items from "../data/items";
import { useParams } from "react-router-dom";

const Details = () => {
  const { itemId } = useParams();
  const selectedItem = items.find((item) => item.id === parseInt(itemId));

  if (!selectedItem)
    return (
      <div className="w-full h-full flex justify-center items-center">
        Item Not Found
        {console.log(itemId)}
      </div>
    );
  return (
    <>
      <Header />
      <div>
        <div className=" w-full h-full sm:flex sm:flex-row flex-col justify-center items-center mt-20  mx-4 gap-4  border-2 border-grey-500 p-2">
          <div className="w-full sm:w-1/3  place-items-center border-2 border-sky-500">
            <img
              className="w-full h-auto rounded-2xl object-cover  p-1"
              src={selectedItem.image}
            />
          </div>
          <div className="m-2 flex-col w-full sm:w-2/3  border-2 border-red-500 p-2">
            <h2 className="text-xl font-semibold my-4 text-wrap ">
              {selectedItem.title}
            </h2>
            <p> $ {selectedItem.price}</p>
            <p>{selectedItem.description}</p>
            <p>{selectedItem.rating.rate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
