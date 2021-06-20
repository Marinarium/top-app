import React, {useEffect, useState, KeyboardEvent} from "react";
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
                <span
                    className={cn(styles.star, {
                        [styles.filled]: index < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(index + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => changeRating(index + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(event: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(index + 1, event)}
                    />
                </span>
            );
        });

        setRatingArray(updatedArray);
    };

    const changeDisplay = (hoveredRating: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(hoveredRating);
    };

    const changeRating = (clickedRating: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(clickedRating);
    };

    const handleSpace = (rating: number, event: KeyboardEvent<SVGAElement>) => {
        if (event.code != 'Enter' || !setRating) {
            return;
        }
        setRating(rating);
    }

    return (
        <div {...props}>
            {ratingArray.map((star, index) => (<span key={index}>{star}</span>))}
        </div>
    );
};

