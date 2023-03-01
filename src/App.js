import CountdownTimer from './CountdownTimer';
import DraggableImageGallery from './DraggableImageGallery';
import BigImages from './BigImages';
import './App.css';

function App() {
  const countdownString = 'Mar 3 2023, 00:00:00'
  const countdownDate = new Date(countdownString).getTime();
  const centerX = window.innerWidth / 2 - 50;

  const isCountdownOver = () => {
    const now = new Date().getTime();
    return countdownDate - now < 0;
  };

  return (
    <div className="App">
      <CountdownTimer countdownDate={countdownString} />
      {isCountdownOver() && <BigImages/>}
      {isCountdownOver() && <DraggableImageGallery />}
    </div>
  );
}

export default App;
