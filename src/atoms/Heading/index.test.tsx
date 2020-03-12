import React, { ReactElement } from 'react';
import { HeadingContainer, HeadingPresenterProps, HeadingLevel, HeadingTextColor } from '../Heading';

describe('HeadingContainer', () => {
    const presenter = (props: HeadingPresenterProps): ReactElement => {
        return (<div {...props}></div>);
    };

    it('level 1 should be tag h1', () => {
        const { props } = HeadingContainer(presenter, {
            level: '1' as HeadingLevel,
            color: 'text' as HeadingTextColor,
        });
        expect(props.tag).toBe('h1');
    });
});