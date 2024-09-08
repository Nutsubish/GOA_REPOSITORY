import React, { useState } from 'react';

function Friends() {
  const [profile, setProfile] = useState([]);
  const [friends, setFriends] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newName = e.target.name.value;
    const newSurname = e.target.sname.value;
    const newEmail = e.target.mail.value;


    setProfile([
      ...profile,
      {
        name: newName,
        surname: newSurname,
        email: newEmail,
      }
    ]);


  };

  const handleDelete = (index) => {
    setProfile(profile.filter((_, i) => i !== index));
  };

  const handleAddFriend = (profileToAdd) => {

    const isAlreadyFriend = friends.find(friend => friend.email == profileToAdd.email);

    if (!isAlreadyFriend) {
      setFriends([...friends, profileToAdd]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"/>
        <input
          type="text"
          name="sname"/>
        <input
          type="email"
          name="mail"/>
        <button type="submit">Add</button>
      </form>

      <h2>Profiles</h2>
      <ul>
        {profile.map((item, index) => (
          <li key={index}>
            {item.name}, {item.surname}, {item.email}
            <button type="button" onClick={() => handleDelete(index)}>Remove</button>
            <button type="button" onClick={() => handleAddFriend(item)}>Add Friend</button>
          </li>
        ))}
      </ul>

      <h2>Friends</h2>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>
            {friend.name}, {friend.surname}, {friend.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Friends;
