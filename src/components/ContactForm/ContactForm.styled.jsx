import styled from '@emotion/styled';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 200px;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  color: #111827;
  font-size: 14px;
  line-height: 1.25;
  font-weight: 500;
  margin-bottom: 5px;
  margin-left: 5px;
`;

export const Input = styled.input`
  display: block;
  padding: 8px 5px;
  color: #111827;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const SubmitButton = styled.button`
  display: flex;
  padding: 8px 10px;
  background-color: #0ca021ad;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.25;
  font-weight: 600;
  justify-content: center;
  width: 110px;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  border: 1px solid #0ca021ad;
  margin-top: 10px;

  :hover {
    background-color: #046a31ad;
  }
`;
