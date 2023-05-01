import styled from "styled-components";
import "./App.css";
import { SolidComponentPage } from "./pages/SolidComponentPage";
import { SemanticColour } from "./style/colours";

let Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${SemanticColour.BACKGROUND.display()};
`;

let App = () => (
    <Wrapper>
        <SolidComponentPage />
    </Wrapper>
);

export default App;
