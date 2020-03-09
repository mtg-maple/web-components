import React, { ReactNode } from 'react';

import style from './style.scss';

export interface HeadingProps {
    /**
     * Child node of h1/h2/h3 tag
     */
    children: ReactNode;

    /**
     * Level of heading
     * @default '1'
     */
    level?: '1' | '2' | '3';

    /**
     * Color of heading
     * @default 'text'
     */
    color?: 'text' | 'muteText';
}

const Heading = (props: HeadingProps) => {
    switch (props.level) {
        case '3':
            return <h3 className={`${style.heading} ${style[props.color || 'text']}`}>{props.children}</h3>;
        case '2':
            return <h2 className={`${style.heading} ${style[props.color || 'text']}`}>{props.children}</h2>;
        case '1':
        default:
            return <h1 className={`${style.heading} ${style[props.color || 'text']}`}>{props.children}</h1>;
    }
}

export default Heading;