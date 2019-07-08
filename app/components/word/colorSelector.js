import styled from 'styled-components';

const ColorSelector = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${props => props.data};
  margin: 5px;
`;
const ColorSelectorWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export { ColorSelector, ColorSelectorWrapper };
