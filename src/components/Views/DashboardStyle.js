import styled from "styled-components";


export const SearchStyle = styled.div`
    
    width : 100%;
    height : ${({displaySidebar}) => (displaySidebar? "68px" : "40px")}
    padding : 2% 0;
    background: #F6F7FA;
`;

export const SearchBar = styled.input`



`;
