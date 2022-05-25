import React, { useMemo } from "react";
import { Link } from "react-router-dom";

export const Resenias = ({review}) => {
  let {name} = review;
  name= name.toLowerCase();

  return (
    <div className="resenias">
      <div className="resenias__content">
        <p className="resenias__name">
        {review.name} - <span className="resenias__rate">rate: {review.rate}</span>
        </p>
        <p className="resenias__desc">
         {review.desc}
        </p>
      <Link to={`/reviews/${name}`} className="resenias__button">más información</Link>
      </div>
    </div>
  );
};
