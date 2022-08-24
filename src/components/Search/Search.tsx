import { useState } from 'react';
import styles from './Search.module.scss';

type TypeSearch = {
  setSubbmit: React.Dispatch<React.SetStateAction<string>>
}

function Search({ setSubbmit }: TypeSearch) {
  const [value, setValue] = useState('');
  const userSubbmit = (e: any) => {
    if(e.key === 'Enter' && value.trim().length) {
      setSubbmit(value.trim())
    }
  }
  return (
    <input
      type="text"
      className={styles.input}
      onKeyPress={userSubbmit}
      placeholder='Enter github username'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      autoComplete='on'
    />
  );
}

export default Search;