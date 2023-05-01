import styled, {css} from 'styled-components';
import { SemanticColour } from '../colours';
import { ComponentType } from 'react';

const makeShadowString = (
    x: number,
    y: number,
    blur: number,
    spread: number,
    colour: string
) => `${x}px ${y}px ${blur}px ${spread}px ${colour};`;

const makeDropShadow = (level: number) =>
    makeShadowString(
        level,
        level,
        level * 2,
        level,
        SemanticColour.SHADOW.display()
    );

const makeHighlight = (level: number) =>
    makeShadowString(
        -level,
        -level,
        level * 2,
        level,
        SemanticColour.HIGHLIGHT.display()
    );

export const solidSharpShadow = (
    e: keyof JSX.IntrinsicElements | ComponentType<any>,
    level: number
) => styled(e)`
    position: relative;
    background-color: ${SemanticColour.BACKGROUND.display()};

    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        clip-path: polygon(
            0 0,
            100% 0,
            200% -100%,
            -100% -100%,
            -100% 200%,
            0 100%
        );
        box-shadow: ${makeHighlight(level)};
        transform: translateZ(-1px);
    }

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        clip-path: polygon(
            0 0,
            100% 0,
            200% 100%,
            200% 200%,
            100% 200%,
            0 100%
        );
        box-shadow: ${makeDropShadow(level)};
        transform: translateZ(-1px);
    }
`;