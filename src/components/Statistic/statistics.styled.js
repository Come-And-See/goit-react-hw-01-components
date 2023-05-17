import styled from 'styled-components';


export const SectionCss = styled.section`
  width: 375px;
  height: auto;
  margin: 50px auto;
  border: 1px solid #000;
  border-radius: 4px;
  h2 {
    text-align: center;
  }
`;

export const SectionUlCss = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin-bottom: 0;
`;




export const StatisticsLiCss = styled.li`
  display: flex;
  align-items: center;
  height: 75px;
  justify-content: center;
  flex-direction: column;
  width: 20%;
  background-color: ${props => props.bg};
`;