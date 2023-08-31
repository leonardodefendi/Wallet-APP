import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { fetchCurrencies } from '../redux/actions';
import { Dispatch } from '../types';
import Table from '../components/Table';

function Wallet() {
  const dispatch: Dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <>
      <div>TrybeWallet</div>
      <Header />
      <WalletForm />
      <Table />

    </>
  );
}

export default Wallet;
