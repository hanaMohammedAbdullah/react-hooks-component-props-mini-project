import React from "react";

function About({
  image = "https://via.placeholder.com/215",
  name = "blog logo",
  about = "blog about learning React",
}) {
  return (
    <aside>
      <img src={image} alt={name} srcset='' />
      <p>{about}</p>
    </aside>
  );
}

export default About;
