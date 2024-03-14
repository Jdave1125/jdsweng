import {motion} from 'framer-motion'
import AnimatedPage from './AnimatedPage';
import ParticlesComp from './particles';
import { Link } from 'react-router-dom';
const Welcome = () => {
  return (
    <AnimatedPage>
      
    <motion.div className="welcome-container" >
  
    {/* initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}> */}
      <h1 className="jeremy"> JEREMY DAVID </h1>
      <h4 className="subline">SOFTWARE ENGINEER</h4>
      <Link to="/home" className="start" href="/home">ENTER</Link>
      <p className="tagline">© EST 1996 - ALBANY, NY. All Rights Reserved. You are who you choose to be.</p>
      <ParticlesComp />
    </motion.div>
    </AnimatedPage>
  );
};

export default Welcome;