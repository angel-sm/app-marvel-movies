import Rect, { useState } from "react"
import { Item } from "../Item"

const ItemList = ({ movies = [] }) => {
  return (
    <div className="xs:w-4/5 sm:w-3/4 md:w-2/4 lg:w-2/5 m-auto mt-3">
      {movies.map((movie) => (
        <div key={movie._id} className='w-full flex flex-col items-center justify-center'>
          <Item movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default ItemList
