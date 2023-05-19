import styled from "styled-components";
import "./scss/shadow.scss";
import { SolidComponentPage } from "./pages/SolidComponentPage";

let Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #eee;
`;

let App = () => (
    <Wrapper>
        <SolidComponentPage />
    </Wrapper>
);

export default App;
