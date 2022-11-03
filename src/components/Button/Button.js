import { ButtonFB } from './Button.styled';
import PropTypes from 'prop-types';
import { firstLetterUpperCase } from 'utils/firstLetterUpperCase';

export const Button = ({ option, onAddFeedback }) => (
  <ButtonFB
    type="button"
    onClick={() => {
      onAddFeedback(option);
    }}
  >
    {firstLetterUpperCase(option)}
  </ButtonFB>
);
