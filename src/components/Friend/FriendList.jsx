import PropTypes from 'prop-types';
import * as css from './friendlist.styled';
import { FriendListitem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <css.Ul>
      {friends.map(friend => (
        <FriendListitem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </css.Ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
