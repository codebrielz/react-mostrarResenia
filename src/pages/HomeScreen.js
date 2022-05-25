import React from "react";
import { Resenias } from "../componentes/Resenias";
import { resenias } from "../data/resenias";

export const HomeScreen = () => {
  return (
    <>
      <h3 className="home__title">
        reseñas de <span className="texto-editado">nuestros clientes</span>
      </h3>
      <div className="home__resenia-usuarios">
        {resenias.map((review, i) => (
          <Resenias review={review} key={i} />
        ))}
      </div>
    </>
  );
};
