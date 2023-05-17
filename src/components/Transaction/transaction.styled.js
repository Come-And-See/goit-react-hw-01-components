import styled from 'styled-components';

export const Table = styled.table`
  width: 450px;
  height: auto;
  margin: 50px auto;
  text-align: center;
`;

export const Thead = styled.thead`
  height: 35px;
  background: #30d5c8;
`;

export const Tr = styled.tr`
  height: 33px;
  text-transform: capitalize;
  font-size: 14px;
  background: #ede8e8;
  &:nth-child(even) {
    background: #bebebe;
  }
`;
