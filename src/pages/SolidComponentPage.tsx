import styled from "styled-components";
import { Box } from "../components/Box";
import { Page } from "../components/Page";
import { solidSharpShadow } from "../style/Surface/Solid";

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
                <Box as={solidSharpShadow(Box, i + 1)} key={i} />
            ))}
        </Wrapper>
    </Page>
);
