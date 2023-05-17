import styled from 'styled-components';

export const ProfileCss = styled.div`
  width: 350px;
  height: 410px;
  margin: 50px auto;
  border: 1px solid #000;
  border-radius: 10px;
`;

export const DescriptionCss = styled.div`
  height: 240px;
  padding: 20px;
  text-align: center;
  line-height: 0.6;
  img {
    width: 150px;
    height: 150px;
    border-radius: 100%;
  }

  #name {
    font-size: 25px;
    font-weight: 600;
    color: #000;
  }
  p {
    font-size: 16px;
    color: grey;
  }
`;

export const UlCss = styled.ul`
  font-size: 25px;
  display: flex;
  list-style: none;
  justify-content: space-around;
  padding: 0;
  border-top: 1px solid #767373;
  background: #a69f9f;
  border-radius: 0 0 10px 10px;

  li {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    line-height: 1.5;
    &:not(:last-child) {
      border-right: 1px solid #767373;
    }
  }

  #label {
    font-size: 14px;
  }
  #quantity {
    font-size: 22px;
    font-weight: 600;
  }
`;
