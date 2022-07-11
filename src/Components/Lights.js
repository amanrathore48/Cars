const Lights = () => {
    return (
      <>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={0}
          shadow-camera-left={0}
          shadow-camera-right={0}
          shadow-camera-top={0}
          shadow-camera-bottom={0}
        />
        <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
      </>
    );
  };
export default Lights