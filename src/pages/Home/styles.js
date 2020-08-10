import styled from 'styled-components';

export const Head = styled.div`
    font-size: 30px;
    margin-top: 2em;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    
    @media screen and (max-width: 500px) and (min-width: 280px){
        font-size: 25px;
    }
    
`;

export const Card = styled.div`    
    @media screen and (max-width: 500px) and (min-width: 280px){
        width: 80%;
        display: flex !important;
        justify-content: center;
        align-content: center;
    }
    
`;