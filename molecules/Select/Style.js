import styled, { css } from 'styled-components';

const CategoriesContainer = styled.div`
  box-sizing: border-box;
  align-content: center;
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing('base')};
  width: 100%;
`;

const Item = styled.span`
  cursor: pointer;
  display: inline-block;
  border-radius: 50px;
  font-weight: bold;
  font-size: 14px;
  padding: ${({ theme: { spacing } }) => spacing('micro')};
  margin: ${({ theme: { spacing } }) => spacing('micro')};
  background-color: ${({ selected }) => (selected ? '#347DBC' : '#70AEE5')};

  :hover {
    background-color: #347DBC;
  }
`;

export default {
  CategoriesContainer,
  Item,
};