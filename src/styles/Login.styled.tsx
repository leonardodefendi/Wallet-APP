import { styled } from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1b1b;
  color:#ebebeb;
 
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 60px;
  width: 20%;
  height: 40%;
  background-color:#3c3c3c;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 7px -1px rgba(158,158,158,1);
-moz-box-shadow: 0px 0px 7px -1px rgba(158,158,158,1);
box-shadow: 0px 0px 7px -1px rgba(158,158,158,1);
  
`;

export const Heading = styled.div`
  display: flex;
  font-size: 40px;
  margin: auto;
`;

export const ImgLogin = styled.img`
  width:46px;
`;

export const WalletSpan = styled.span`
  color: #01a101;
  `;

export const InputLabel = styled.label`
  margin-bottom: 5px;
  margin-left: 5px;
  width: 80%;
  margin-bottom: 15px;
  font-size: 16px;
  input {
    width: 70%;
    height: 100%;
    margin-left: 8px;
    border: none;
    background-color: #c0c0c0;
    border-radius: 3px;
  }
`;

export const ButtonLogin = styled.button`
  /* border: none; */
  padding: 6px 30px;
  border-radius: 5px;
  color:#c0c0c0;
  background-color:#3c3c3c;
  border: 1px solid #808080;
  &:hover {
    background-color: #c0c0c0;
    color: black;
    cursor: pointer;
  }
  &:disabled {
    background-color: #5a5959;
  }
`;
