
import { BrowserRouter as Router} from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';

import './App.css'; // import your CSS for animations
import ParticlesComp from './particles';


const App = () => {

  return (
   
    <Router>
      
    <div>

          <AnimatedRoutes />
    </div>
   
    </Router>
  );
};

export default App;
