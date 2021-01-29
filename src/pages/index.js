import styled from 'styled-components';

const Title = styled.h1`
    color: ${(props) => props.theme.colors.primary}
`

function index() {
    return(
        <Title>My app!!!!</Title>
    )
}

export default index;