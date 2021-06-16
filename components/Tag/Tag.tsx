import React from "react";
import cn from 'classnames';

import {ITagProps} from "./Tag.props";

import styles from './Tag.module.css';

export const Tag = ({
                        size = 'small',
                        color = "ghost",
                        href,
                        children,
                        className,
                        ...props
                    }: ITagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.medium]: size === 'medium',
            [styles.small]: size === 'small',
            [styles.ghost]: color === 'ghost',
            [styles.red]: color === 'red',
            [styles.grey]: color === 'grey',
            [styles.green]: color === 'green',
            [styles.primary]: color === 'primary',
        })}
             {...props}
        >
            {href
                ? <a href={href}>{children}</a>
                : <>{children}</>
            }
        </div>
    );
};
