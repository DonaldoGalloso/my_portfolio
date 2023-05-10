import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Luis Donaldo Galloso",
    location: "Puebla, Mex",
    email: "luisdonaldo.gt@gmail.com",
    availability: "Open to work",
    brand:
      "I am a software engineer with more than 2 years of experience developing web and mobile applications. I stand out for my ability to work in a team, communicate effectively and solve problems creatively. I have experience in technologies such as JavaScript, ReactJS, Swift, Php, etc..., and I have carried out projects that have delivered innovative and high-quality solutions for problems in various sectors. I am passionate about continuous learning and the implementation of good practices in software development. I am interested in being part of an innovative and dynamic work team where I can continue developing my skills and knowledge in software development in a respectful and effective way.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
