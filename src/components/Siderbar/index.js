import {Container, MenuItem, HomeIcon,PeopleIcon, Following, FollowingHeader, InfoContainer, Links} from './style'

//import User from '../User'

function Siderbar(){
    return(
        <Container>
            <MenuItem active>
                <HomeIcon src="/images/homeIcon.svg"></HomeIcon>
                <span>Para você</span>
            </MenuItem>

            <MenuItem>
                <PeopleIcon src="/images/peopleIcon.svg"></PeopleIcon>
                <span>Seguindo</span>
            </MenuItem>

            <Following>
                <FollowingHeader>Suas principais contas</FollowingHeader>
                {/* <User user={{
                    name: 'Will Smith',
                    username: 'willsmith',
                    avatar: "https://picsum.photos/200/300?random=6"
                }}></User> */}
            </Following>

            <InfoContainer>
                <Links>
                    <a>Inicio</a>
                    <a>Sobre</a>
                    <a>Sala de imprensa</a>
                    <a>Carreira</a>
                    <a>ByteDance</a>
                </Links>

                <Links>
                    <a>Ajuda</a>
                    <a>Segurança</a>
                </Links>

                <Links>
                    <a>Diretrizes</a>
                    <a>Termos</a>
                </Links>

                <Links>
                    <a>Privacidade</a>
                </Links>

                <Links>
                    <a>2020 TikTok</a>
                </Links>

            </InfoContainer>
        </Container>
    )
}

export default Siderbar;

