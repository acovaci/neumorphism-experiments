import styled from "styled-components";

type ShadowProps = React.PropsWithChildren<{
    // lightSources: object;
    // globalLightSource: object;
    // surface: object;
}>;

export const Shadow = styled.div.attrs({ className: "shadow" })<{
    surfaceHeight?: string;
    highlightColor?: string;
    dropShadowColor?: string;
}>`
    > * {
        ${(props) =>
            props.surfaceHeight
                ? `--object-surface-height: ${props.surfaceHeight};`
                : ""}
        ${(props) =>
            props.highlightColor
                ? `--highlight-color: ${props.highlightColor};`
                : ""}
        ${(props) =>
            props.dropShadowColor
                ? `--drop-shadow-color: ${props.dropShadowColor};`
                : ""}

        --highlight-properties: var(--object-surface-height)
            var(--object-surface-height) calc(var(--object-surface-height) * 2)
            var(--object-surface-height) var(--highlight-color);
        --drop-shadow-properties: calc(var(--object-surface-height) * -1)
            calc(var(--object-surface-height) * -1)
            calc(var(--object-surface-height) * 2) var(--object-surface-height)
            var(--drop-shadow-color);
    }
`;
