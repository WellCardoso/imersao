import Header from "../Header";
import Siderbar from "../Siderbar";
import {Container, SidebarContainer, ContentContainer} from "./style"

function Layout ({ children }) {
    return(
        <>
            <Header></Header>
            <Container>

                <SidebarContainer>
                    <Siderbar></Siderbar>
                </SidebarContainer>

                <ContentContainer>
                    {children}
                </ContentContainer>

            </Container>
        </>
    )
}

export default Layout;