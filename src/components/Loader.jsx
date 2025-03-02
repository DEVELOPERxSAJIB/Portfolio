import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <>
      <Html center>
        <p style={{
          fontSize: '24px',
          color: "#333",
          fontWeight: 'bold',
          marginTop: "40px"
        }}>{(progress).toFixed(2)}%</p>
      </Html>
    </>
  );
};

export default Loader;
