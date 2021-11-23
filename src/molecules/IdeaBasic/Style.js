import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #000000;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const Title = styled.span`
  font-weight: bold;
`;

const Date = styled.span`
  margin-left: 24px;
  font-size: 12px;
  color: #AAAAAA;
  font-weight: bold;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 4px;
`;

const Category = styled.span`
  margin-right: 8px;
  font-size: 14px;
`;

const Description = styled.p`
  margin-top: 16px;
  font-size: 15px;
  line-height: 24px;
  color: #777777;
  text-align: center;
  background-color: #EFEFEF;
  border-radius: 10px;
`;

export default {
  Container,
  CategoriesContainer,
  Category,
  Date,
  Description,
  Line,
  Title,
};
