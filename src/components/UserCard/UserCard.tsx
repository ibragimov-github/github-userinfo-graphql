import { useEffect, useState } from 'react';
import styles from './UserCard.module.scss';
import LinearProgress from '@mui/material/LinearProgress';
import { useQuery } from '@apollo/client';
import { USER_INFO } from '../../apollo/user';

type TypeUserCard = {
  card: String,
  subbmit: String,
  setCard: React.Dispatch<React.SetStateAction<string>>
}

function UserCard({ subbmit, card, setCard }: TypeUserCard) {
  const [style, setStyle] = useState({})
  const { loading, error, data } = useQuery(USER_INFO, {
    variables: {
      user: subbmit
    }
  })
  if (loading && subbmit.trim().length) {
    setCard('loading')
  }
  if (data && subbmit.trim().length) {
    setCard('done')
    console.log(data)
  }
  if (error && subbmit.trim().length) {
    setCard('error')
  }
  useEffect(() => {
    if (card.length) setStyle({
      transform: 'scale(1)'
    })
  }, [card])
  if (data) {
    return (
      <div
        className={styles['card-container']}
        style={style}
      >
        <img
          src={data.user.avatarUrl}
          alt=""
          className={styles.photo}
        />
        <span
          className={styles.bio}
        >
          Bio : {data.user.bio ? data.user.bio : 'no data'}
        </span>
        <span className={styles.location}>
          City: {data.user.location ? data.user.location : 'no data'}
        </span>
        <div className={styles['repo-container']}>
          {data.user.repositories.edges.map((repo: any) => {
            return (
              <a
                key={repo.node.url}
                href={repo.node.url}
                className={styles['repo-link']}
              >{repo.node.name}</a>
            )
          })}
        </div>

      </div>
    )
  }
  if (error) {
    return (
      <div
        className={styles['card-container']}
        style={style}
      >
        <span className={styles['no-data']}>
          NO DATA
        </span>
      </div>
    )
  }
  return (
    <div
      className={styles['card-container']}
      style={style}
    >
      {card === 'loading' && <LinearProgress
        color="secondary"
        className={styles.loader}
      />}
      {
        card === 'done' && data &&
        <p>Hello</p>
      }

    </div>
  );
}

export default UserCard;