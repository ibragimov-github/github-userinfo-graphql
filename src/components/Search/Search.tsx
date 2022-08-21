import { useState } from 'react';
import styles from './Search.module.scss';

type TypeSearch = {
  setCard: React.Dispatch<React.SetStateAction<boolean>>
}

function Search({ setCard }: TypeSearch) {
  const [value, setValue] = useState('');
  const userSubbmit = (e: any) => {
    if(e.key === 'Enter' && value.trim().length) setCard(true)
  }
  return (
    <input
      type="text"
      className={styles.input}
      onKeyPress={userSubbmit}
      placeholder='Enter github username'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Search;