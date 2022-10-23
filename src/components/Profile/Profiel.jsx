import PropTypes from 'prop-types';
import stayls from './Profiel.module.css';

export function Profiel({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;

  return (
    <div className={stayls.profiel}>
      <div className={stayls.description}>
        <img src={avatar} alt="User avatar" className={stayls.avatar} />
        <p className={stayls.name}>{username}</p>
        <p className={stayls.tag}>{tag}</p>
        <p className={stayls.location}>{location}</p>
      </div>

      <ul className={stayls.stats}>
        <li>
          <span className={stayls.label}>Followers </span>
          <span className={stayls.quantity}>{followers}</span>
        </li>
        <li>
          <span className={stayls.label}>Views</span>
          <span className={stayls.quantity}>{views}</span>
        </li>
        <li>
          <span className={stayls.label}>Likes</span>
          <span className={stayls.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profiel.propTypes = {
  userName: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
