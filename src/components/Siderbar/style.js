import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 70px;
    left: 0;
    bottom: 0;
    width: 250px;
    padding-top: 26px;
`

export const MenuItem = styled.div`
    cursor: pointer;
    color: "#161823";
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 12px;
    box-sizing: border-box;
    height: 60px;
    :hover {
        background-color: rgba(22, 24, 35, 0.03);
    }

    > span {
        font-weight: ${(props) => props.active ? '700': '400'};
        margin-left: 13px;
        font-size: 24px;
        line-height: 60px;
        color: ${(props) => props.active ? props.theme.colors.primary : 'black'};
    }
`

export const HomeIcon = styled.div``

export const PeopleIcon = styled.div``

export const Following = styled.div``

export const FollowingHeader = styled.div``

export const InfoContainer = styled.div``

export const Links = styled.div``