import {Container, Content, Avatar, Icon, Logo, LogoContainer, LogoIcon, OptionsContainer} from "./style";


function Header(){
    return(
        <Container>
            <Content>
                <LogoContainer>
                    <LogoIcon src='/images/logoIcon.svg' >

                    </LogoIcon>

                    <Logo src='/images/logo.svg' >

                    </Logo>
                </LogoContainer>

                <OptionsContainer>
                    <Icon src='/images/uploadIcon.svg' ></Icon>
                    <Avatar>
                        <img src="https://picsum.photos/200/300?random=2" />
                    </Avatar>
                </OptionsContainer>
            </Content>
        </Container>
    )
}

export default Header;