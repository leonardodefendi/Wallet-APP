import { styled } from 'styled-components';

export const DataContainer = styled.div`
  margin-top: 40px;
  background-color:#8e8e8e;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-wrap: nowrap;
  /* color: #f3f3f3; */
`;

// style for WalletForm

export const InputForm = styled.input`
  margin-left: 10px;
  height: 30px;
   border: none;
  border-radius: 3px;
  margin-right: 10px;
`;

export const SelectForm = styled.select`
  height: 30px;
  border: none;
  margin-left: 3px;
  border-radius: 3px;
  cursor: pointer;
`;
export const ButtonAdd = styled.button`
  height: 30px;
  margin-left: 10px;
  background-color: #1ea02f;
  border: none;
  width: 130px;
  border-radius: 5px;
  color: #fffefe;
  &:hover{
    background-color: #1b8d2a;
    transition: ease 0.3s;
    cursor: pointer;
  }
`;

// style for Table

export const TableStyle = styled.table`
  border-collapse: collapse;
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
  /* margin-top: 100px; */
  
  td{
    border-bottom: 2px solid  #7ce0bc;
    text-align: center;
    max-width: 400px;
    height: 80px;
    color: #60dfb0;

  }
  th {
    border-left: 3px solid white;
    border-right: 3px solid white;
    border-bottom: 2px solid white;
    width: 150px;
    color: #f1f1f1;
  }
`;

export const TableContainer = styled.div`
  background: #7f838a;
  margin-top: 100px;
  padding: 100px;
  border-radius: 10px ;
`;

export const ButtonDelete = styled.button`
  background: none;
`;
