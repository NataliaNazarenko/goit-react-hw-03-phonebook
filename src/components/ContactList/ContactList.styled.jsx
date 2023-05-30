import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: decimal;
  gap: 20px;
  padding: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 280px;
  align-items: center;
  padding: 10px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

export const Contact = styled.p`
  font-size: 16px;
  margin: 0;
  padding: 0;
`;

export const DeleteButton = styled.button`
  display: flex;
  padding: 5px 5px;
  background-color: #0ca021ad;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.25;
  font-weight: 600;
  justify-content: center;
  width: 70px;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  border: 1px solid #0ca021ad;

  :hover {
    background-color: #046a31ad;
  }
`;
