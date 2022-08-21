import { useState } from 'react';
import Search from '../Search/Search';
import UserCard from '../UserCard/UserCard';
import styles from './App.module.scss';

type TypeApp = {}

function App({ }: TypeApp) {
  const [card, setCard] = useState(false);
  return (
    <div className={styles.container}>
      <Search  setCard={setCard} />
      <UserCard card={card} />
    </div>
  );
}

export default App;