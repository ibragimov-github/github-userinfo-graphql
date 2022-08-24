import { useState } from 'react';
import Search from '../Search/Search';
import UserCard from '../UserCard/UserCard';
import styles from './App.module.scss';


function App() {
  const [card, setCard] = useState('');
  const [subbmit, setSubbmit] = useState('');
  return (
    <div className={styles.container}>
      <Search
        setSubbmit={setSubbmit}
      />
      <UserCard
        setCard={setCard}
        card={card}
        subbmit={subbmit}
      />
    </div>
  );
}

export default App;