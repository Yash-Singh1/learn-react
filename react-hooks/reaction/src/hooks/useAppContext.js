import { useContext } from 'react';
import Context from '../context';

function useAppContext() {
  return useContext(Context);
}

export default useAppContext;
