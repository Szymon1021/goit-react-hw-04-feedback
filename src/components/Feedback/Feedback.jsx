import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './Feedback.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => {
  const optionsFeedback = options.map(name => {
    return (
      <ul className={styles.buttonsList} key={nanoid()}>
        <li key={nanoid()}>
          <button onClick={() => onLeaveFeedback(name)} key={nanoid()}>
            {name}
          </button>
        </li>
      </ul>
    );
  });

  return <div>{optionsFeedback}</div>;
};
Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
