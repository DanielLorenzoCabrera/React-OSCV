import Links from "./Links.json";
import info from "./About.json";
const About = () => {
  return (
    <article className="about">
      <section className="left-side">
        <div className="profile-img">
          <figure>
            <img src={require("../../assets/img/profile.jpg")} alt="" />
          </figure>
        </div>
        <div className="name">
          <h1>
            <span>Daniel</span> Lorenzo
          </h1>
          <h2>
            Software <span>Developer</span>
          </h2>
          <q>Life is a matter of attitude</q>
        </div>
        <div className="links">
          {Links.map((link, index) => {
            return (
              <a href={link.link} target="_blank" rel="noreferrer" key={index}>
                <i className={link.icon}></i>
              </a>
            );
          })}
        </div>
      </section>
      <section className="right-side">
        {info.map((item, index) =>{
          return (<div key={index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>)
        })}
      </section>
    </article>
  );
};

export default About;
