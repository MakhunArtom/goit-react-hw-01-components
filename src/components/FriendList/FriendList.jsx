import PropTypes from 'prop-types';
import css from './Frendlist.module.css';
import { isOnlin } from './FrendList.isOnLine';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.item}>
            <span
              className={css.status}
              style={{ background: isOnlin(isOnline) }}
            ></span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

// isOnline ? css.isOnline : css.isOfline;
