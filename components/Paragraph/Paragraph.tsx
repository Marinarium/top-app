import React from "react";
import cn from 'classnames';

import {IParagraphProps} from "./Paragraph.props";

import styles from './Paragraph.module.css';

export const Paragraph = ({appearance = 'base', children, className, ...props}: IParagraphProps): JSX.Element => {
    return (
        <p className={cn(styles.paragraph, className, {
            [styles.base]: appearance === 'base',
            [styles.small]: appearance === 'small',
            [styles.big]: appearance === 'big',
        })}
            {...props}
        >
            {children}
        </p>
    );
};

