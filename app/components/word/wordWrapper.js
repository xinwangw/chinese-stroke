import styled from 'styled-components';

const StyledWord = styled.div`
    overflow: hidden;
`;

const WordWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const WordListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
`;


export {WordWrapper, WordListWrapper, StyledWord};