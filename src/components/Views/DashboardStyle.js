import styled from "styled-components";


export const SearchStyle = styled.div`
    
    border-radius : 2px;
    width : 100%;
    display : flex;
    align-items: center;
    
    height : 78px;
    padding : 10px;
    @media screen and (max-width: 468px) {
        height : 40px;
        padding : 0;
    }
    background: #F6F7FA;
`;

export const SearchBar = styled.input`

    padding: 10px;
    
    height : 24px;
    background-color : #EBEEF5;
    width : 503.87px;

`;
