import React, { Suspense, useState } from "react";
import axios from "axios";
import config from '../../config/environment'

import { Loader } from "../Loader";
import ItemCard from "../ItemCard";

export const Item = (props) => {
  const { title, cover_url, _id } = props.movie;

  const [movieSelected, setMovieSelected] = useState({});
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false)

  const handleSelectMovie = (id) => {
    setShow(!show);
    setLoad(load => !load)
    axios.get(`${config.api_uri}/movies/${id}`)
      .then(({ data }) => {
        setMovieSelected(data._doc);
      })
      .then(() => {
        setLoad(load => !load)
      })
  };

  return (
    <div
      className="w-full cursor-pointer"
      onClick={() => handleSelectMovie(_id)}
    >
      <div className="flex flex-row items-center bg-gray-300 p-4 my-1 rounded-md">
        <div>
          <img src={cover_url} className="rounded-full h-14 w-14" />
        </div>
        <div>
          <h1 className="text-base ml-4">{title}</h1>
        </div>
      </div>
      <div>
        {show && (
          load ? <Loader /> :  <ItemCard movie={movieSelected} />
        )}
      </div>
    </div>
  );
};
