import PropTypes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem';


const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
}

export default FriendList;
