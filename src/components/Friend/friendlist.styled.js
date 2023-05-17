import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
`;

export const Ul = styled.ul`
  width: 180px;
  height: auto;
  margin: 50px auto;
`;

export const Span = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background: ${props => (props['data-online'] ? 'green' : 'red')};
`;
