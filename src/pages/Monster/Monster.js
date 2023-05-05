import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Monster.scss";
import { useNavigate, useParams } from "react-router-dom";

function Monster() {
  const [monster, setMonster] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setMonster(data));
  }, []);

  const numId = Number(id);

  const handlePrev = () => {
    if (numId < 2) return;
    navigate(`/detail/${numId - 1}`);
  };

  return (
    <article className="monster">
      <div className="btnWrapper">
        <button onClick={() => navigate("/")}>Back to Monsters List</button>
      </div>
      <Card id={id} name={monster.name} email={monster.email} />
      <div className="btnWrapper">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={() => navigate(`/detail/${numId + 1}`)}>Next</button>
      </div>
    </article>
  );
}

export default Monster;
