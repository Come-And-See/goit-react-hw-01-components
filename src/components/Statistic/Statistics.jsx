import PropTypes from 'prop-types';
import * as css from './statistics.styled';

const getRandomColor = () => {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  return randomColor;
};

export const Statistics = ({ stats, title }) => {
  return (
    <css.SectionCss>
      {title && <h2>{title}</h2>}
      <css.SectionUlCss>
        {stats.map(({ id, label, percentage }) => (
          <css.StatisticsLiCss key={id} bg={getRandomColor()}>
            <span id="label">{label}</span>
            <span id="percentage">{percentage}%</span>
          </css.StatisticsLiCss>
        ))}
      </css.SectionUlCss>
    </css.SectionCss>
  );
};



Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};