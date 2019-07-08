import styled from 'styled-components';

const Page = styled.div`
  padding: 10px;
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'palevioletred'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
export { Page, Input };
