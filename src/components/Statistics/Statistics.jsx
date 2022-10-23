import PropTypes from 'prop-types';
import css from './Stattistics.module.css';
import { getRandomHexColor } from './Statics.color';

export function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={css.item}
              style={{ background: getRandomHexColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
};
