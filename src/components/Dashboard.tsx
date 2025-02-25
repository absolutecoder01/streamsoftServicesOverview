import { useEffect, useState } from 'react';
import '../index.css';
import SplitText from './SplitText';
import Magnet from './Magnet';

const Dashboard = () => {
      const [isLoaded, setIsLoaded] = useState(false);

      useEffect(() => {
          const timer = setTimeout(() => {
              setIsLoaded(true);
          }, 1000); // Czas trwania animacji załadowania (1 sekunda)
    
          return () => clearTimeout(timer);
      }, []);
  return (
    
<div className={`p-6 bg-white rounded-md border border-transparent  w-400 mx-auto h-220 mt-5${isLoaded ? 'slide-in' : 'opacity-0'}`}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Magnet padding={150} disabled={false} magnetStrength={50}>
            <SplitText
                text='Streamsoft'
                delay={350}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin='-50px'
                />
        </Magnet>
            <br />
            <br />
            <br />
        <Magnet padding={150} disabled={false} magnetStrength={50}>
            <p id='erp'>Producent systemów ERP</p>
        </Magnet>
    </div>
  );
};

export default Dashboard;