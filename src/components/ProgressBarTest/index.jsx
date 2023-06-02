import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgressBarTest = ({ percent }) => {
  return <ProgressBar now={percent} />;
}

export default ProgressBarTest;