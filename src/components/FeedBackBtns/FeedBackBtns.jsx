
import PropTypes from 'prop-types';


export const FeedBackBtns = ({option, leaveFeedback}) => {
    return (<li>
        <button type="button" key = {option} onClick={() => leaveFeedback(option)}>{option}</button>
       </li>
  );
};

FeedBackBtns.propTypes = {
  option: PropTypes.string.isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};