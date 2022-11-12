
import HeroSection from "./components/HeroSection";
import {useProductContext} from './context/productcontex'


const About = () => {
  const {myName} = useProductContext()
  const data = {
    name: "E-Shop",

  };

  
  return( 
    <> 
    {myName}
  <HeroSection myData={data} />
  {" "}
  </>
  );
};

export default About;