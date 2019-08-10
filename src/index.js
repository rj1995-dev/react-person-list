import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};
const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="30" name="Ramchandra" job="developer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          accusamus?
        </p>
      </Person>
      <Person img="35" name="Rasbehari" job="designer">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, fuga.
        </p>
      </Person>
      <Person img="36" name="suman Kylan" job="tester">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
          inventore.
        </p>
      </Person>
    </section>
  );
};

ReactDom.render(<PersonList />, document.getElementById("root"));
