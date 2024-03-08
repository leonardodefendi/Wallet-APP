import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { fetchCurrencies } from '../redux/actions';
import { Dispatch } from '../types';
import Table from '../components/Table';
import { DataContainer } from '../styles/Wallet.styled';

function Wallet() {
  const dispatch: Dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <>
      <Header />
      <DataContainer>
        <WalletForm />
        <Table />
      </DataContainer>
    </>
  );
}

export default Wallet;
