import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Full Stack Developer</p>
      </div>
      <div className="quick-links">
        <a href="#projects">View Projects</a>
        <a href="#contact">Contact Me</a>
      </div>
    </div>
  );
};

export default Home;
