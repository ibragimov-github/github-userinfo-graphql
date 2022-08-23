import { useEffect, useState } from 'react';
import styles from './UserCard.module.scss';
import LinearProgress from '@mui/material/LinearProgress';
import { useQuery } from '@apollo/client';
import { USER_INFO } from '../../apollo/user';

type TypeUserCard = {
  card: Object
  setCard: React.Dispatch<React.SetStateAction<string>>
}

function UserCard({ card, setCard }: TypeUserCard) {
  const [style, setStyle] = useState({})
  const { loading, error, data } = useQuery(USER_INFO, {
    variables: {
      user: card
    }
  })
  useEffect(() => {
    if (card === 'pushed') setCard('loading')
  }, [loading])
  useEffect(() => {
    if (card === 'loading') {
      setCard('data')
    }
  }, [data])
  if (error) {
    console.error(error)
  }

  useEffect(() => {
    if (card === 'pushed') {
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
      {card === 'loading' && <LinearProgress
        color="secondary"
        className={styles.loader}
      />}

    </div>
  );
}

export default UserCard;