import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Luis Donaldo Galloso",
    location: "Puebla, Mex",
    email: "luisdonaldo.gt@gmail.com",
    availability: "Disponible para Trabajar",
    brand:
      "Soy un ingeniero de software con más de 2 años de experiencia en el desarrollo de aplicaciones web y móviles. Me destaco por mi capacidad para trabajar en equipo, comunicarme eficazmente y resolver problemas de manera creativa. Tengo experiencia en tecnologías como JavaScript, ReactJS, Swift, Php, etc... , y he realizado proyectos que han entregado soluciones innovadoras y de alta calidad para problemas de diversos sectores. Me apasiona el aprendizaje continuo y la implementación de buenas prácticas en el desarrollo de software. Estoy interesado en formar parte de un equipo de trabajo innovador y dinámico donde pueda seguir desarrollando mis habilidades y conocimientos en el desarrollo de software de manera respetuosa y eficaz.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
