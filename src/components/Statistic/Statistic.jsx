import PropTypes from 'prop-types';

export const Statistic = ({good,bad,neutral,total,positive}) => {
    return (
        <ul>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total:{total}</li>
            <li>Positive feedback:{positive}%</li>
        </ul>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};