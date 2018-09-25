import styled from 'styled-components';

export const FixedContainer = styled.div`
  background: radial-gradient(circle, #E36488 0%, #AF385A 100%);
  position: fixed;
  top: ${props => props.top ? 0 : "auto"};
  left: ${props => props.left ? 0 : "auto"};
  right: ${props => props.right ? 0 : "auto"};
  width: ${props => props.w || "0"};
  height: ${props => props.h || "0"};
  overflow: ${props => props.scrollY ? 'scroll' : "none"};
`

export const Input = styled.input`
  border-radius: 8px;
  height: ${props => props.h || "50px"};
`