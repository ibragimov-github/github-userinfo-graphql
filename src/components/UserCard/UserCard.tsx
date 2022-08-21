import { useEffect, useState } from 'react';
import styles from './UserCard.module.scss';
import LinearProgress from '@mui/material/LinearProgress';

type TypeUserCard = {
  card: boolean
}

function UserCard({ card }: TypeUserCard) {
  const [style, setStyle] = useState({})
  useEffect(() => {
    if (card) {
      setStyle({
        transform: 'scale(1)'
      })
    }
  }, [card])
  return (
    <div
      className={styles['card-container']}
      style={style}
    >
      {card && <LinearProgress
        color="secondary"
        className={styles.loader}
      />}

    </div>
  );
}

export default UserCard;