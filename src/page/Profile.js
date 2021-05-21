import React from "react";

const data = {
  twan: {
    name: "twan",
    description: "Korean",
  },
  anveloper: {
    name: "anveloper",
    description: "Blog Writer",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>存在しないユーザーです。</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
