import { ProfileCss, DescriptionCss, UlCss } from 'components/Profil/profile.styled';



function Profile({ profil }) {
  const { username, tag, location, avatar, stats } = profil;

  return (
    <ProfileCss>
      <DescriptionCss>
        <img src={avatar} alt="User avatar"/>
        <p id='name'>{username}</p>
        <p>@{tag}</p>
        <p >{location}</p>
      </DescriptionCss>

      <UlCss>
        <li>
          <span id='label'>Followers</span>
          <span id="quantity">{stats.followers}</span>
        </li>
        <li>
          <span id='label'>Views</span>
          <span id="quantity">{stats.views}</span>
        </li>
        <li>
          <span id='label'>Likes</span>
          <span id="quantity">{stats.likes}</span>
        </li>
      </UlCss>
    </ProfileCss>
  );
}

export default Profile;


