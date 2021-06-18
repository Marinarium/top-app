import React, {useEffect, useState} from "react";
import cn from 'classnames';

import {IRatingProps} from "./Rating.props";
import StarIcon from "./star.svg"

import styles from './Rating.module.css';

export const Rating = ({isEditable = false, rating, setRating, className, ...props}: IRatingProps): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((star: JSX.Element, index: number) => {
            return (
                <StarIcon className={
                    cn(styles.star, {
                        [styles.filled] : index < currentRating
                    })
                }/>
            );
        });

        setRatingArray(updatedArray);
    };

    return (
        <div {...props}>
            {ratingArray.map((star, index) => (<span key={index}>{star}</span>))}
        </div>
    );
};

