import PropTypes from 'prop-types';
import * as css from './profile.styled';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <css.ProfileCss>
      <css.DescriptionCss>
        <img src={avatar} alt="User avatar" />
        <p id="name">{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </css.DescriptionCss>

      <css.UlCss>
        <li>
          <span id="label">Followers</span>
          <span id="quantity">{stats.followers}</span>
        </li>
        <li>
          <span id="label">Views</span>
          <span id="quantity">{stats.views}</span>
        </li>
        <li>
          <span id="label">Likes</span>
          <span id="quantity">{stats.likes}</span>
        </li>
      </css.UlCss>
    </css.ProfileCss>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
