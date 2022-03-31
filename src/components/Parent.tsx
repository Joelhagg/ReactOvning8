import styled from "styled-components";

const Container = styled.div`
    border: solid gray 1px;
    padding: 3em;
`;

const Heading = styled.h1`
    font-size: 1.75em;
    color: pink;
`;

const Button = styled.button`
    background-color: ${props => props.color};
`;

const Parent = () => {
    return(
        <>
            <Container>
                <Heading>Detta är min rubrik</Heading>
                <Button color="orange">My button</Button>
            </Container>
        </>
    )
}
export default Parent;