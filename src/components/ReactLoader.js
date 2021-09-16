import Loader from 'react-loader-spinner';

export default function ReactLoader() {
  return (
    <Loader
      type="Circles"
      color="#00000059"
      height={100}
      width={100}
      className="flex justify-center mt-12"
    />
  );
}
