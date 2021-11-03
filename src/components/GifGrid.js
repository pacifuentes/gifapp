import React from "react";
import { useFetchGif } from "../Hooks/useFetchGif";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ categoria }) => {
  const { data, loading } = useFetchGif(categoria);
  console.log(data);
  return (
    <>
      <h3>{categoria}</h3>
      {loading && <p>Cargando data</p>}
      <div className="card-grid">
        {data.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
