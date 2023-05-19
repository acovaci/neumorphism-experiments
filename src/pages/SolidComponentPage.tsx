import styled from "styled-components";
import { Box } from "../components/Box";
import { Page } from "../components/Page";
import { Shadow } from "../components/Shadow";

let Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 32px;
`;

export const SolidComponentPage = () => (
    <Page>
        <h1>Solid</h1>

        <Wrapper>
            {Array.from({ length: 10 }).map((_, i) => (
                <Shadow
                    surfaceHeight={`${i}px`}
                    highlightColor="white"
                    dropShadowColor="black"
                >
                    <Box key={i} />
                </Shadow>
            ))}
        </Wrapper>
    </Page>
);
