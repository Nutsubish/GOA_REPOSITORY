import React, { useState } from 'react';

function Task1() {

  const [profile, setProfile] = useState([]);

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"

        />
        <input
          type="text"
          name="sname"

        />
        <input
          type="email"
          name="mail"

        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {profile.map((item, index) => (
          <li key={index}>
            {item.name}, {item.surname}, {item.email}
            <button type="button" onClick={() => handleDelete(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task1;
