import React from "react";
import "./Team.css";
import team1 from "../../../images/team/team1.jpg";
import team2 from "../../../images/team/team2.jpg";
import team3 from "../../../images/team/team3.jpg";
import team4 from "../../../images/team/team4.jpg";
import TeamCard from "../TeamCard/TeamCard";
import InfiniteSlider from "../../InfiniteSlider/InfiniteSlider";

const teams = [
  {
    id: 1,
    name: "Jhon Mickel",
    image: team1,
    title: "Web Developer",
  },
  {
    id: 2,
    name: "Andrew kishor",
    image: team2,
    title: "UI Designer",
  },
  {
    id: 3,
    name: "Lellien Linda",
    image: team3,
    title: "SEO Expert",
  },
  {
    id: 4,
    name: "Bratt Powel",
    image: team4,
    title: "Web Designer",
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Our Special Team</h2>
          </div>
        </div>
        <div className="row">
          {/* {teams.map((team) => (
            <TeamCard key={team.id} team={team}></TeamCard>
          ))} */}

          <InfiniteSlider />
        </div>
      </div>
    </section>
  );
};

export default Team;
