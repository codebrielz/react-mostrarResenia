import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom';
import { getReviewByName } from '../selectors/getReviewByName';

export const ReseniasScreen = () => {
  const {reviewName} = useParams();
  const review = useMemo(() => getReviewByName(reviewName), [reviewName]);

  const {name,rate,desc} = review[0];
  
  return (
    <div className="resenias">
      <div className="resenias__content">
        <p className="resenias__name">
        {name} - <span className="resenias__rate">rate: {rate}</span>
        </p>
        <p className="resenias__desc">
         {desc}
        </p>
      </div>
    </div>
  )
}
