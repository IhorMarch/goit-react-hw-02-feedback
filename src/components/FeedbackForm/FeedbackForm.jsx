import { FeedBackBtns } from '../FeedBackBtns/FeedBackBtns';

import PropTypes from 'prop-types';




export const FeedbackForm = ({options,leaveFeedback}) => {
    return (
        <ul>
            {options.map(option => (
                
                <FeedBackBtns option={option} leaveFeedback={leaveFeedback} />
            ))}
              
        </ul>
  );
};


FeedbackForm.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};