import PropTypes from 'prop-types';
import * as css from './friendlist.styled';

export const FriendListitem = ({ avatar, name, isOnline }) => {
  return (
    <css.Item>
      <css.Span data-online={isOnline}></css.Span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </css.Item>
  );
};

FriendListitem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
