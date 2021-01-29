import styled from 'styled-components';

const Title = styled.h1`
    color: ${(props) => props.theme.colors.primary}
`

function index() {
    return(
        <Title>Meu App</Title>
    )
}

export default index;