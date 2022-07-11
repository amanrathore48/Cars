import './App.scss';
import { Canvas } from '@react-three/fiber';
import Navbar from './Components/Navbar';
import Lights from './Components/Lights';
import CameraControls from './Components/CameraControls';
import Car from './Components/Car';
import { Suspense } from 'react';
import Loaders from './Components/Loaders';

function App() {
  return (
    <>
      <Navbar />
      <Canvas className='earth'>
        <CameraControls/>
        <Lights/>
        <Suspense>
        <Car />
        </Suspense>        
      </Canvas>
      <Loaders/>
    </>
  );
}

export default App;
