import './AudioRow.css';

interface AudioRowProps {
  length: string;
  isHovered: boolean;
}

const AudioRow: React.FC<AudioRowProps> = ({ length, isHovered }) => {
  if (!length) {
    return null;
  }

  return (
    <>
      {isHovered ? (
        <div className="row-audio">
          <div>{length}</div>
          <div className="row-audio-play">
            <img src="/assets/button-play.png" alt="play" />
          </div>
          <div className="row-audio-line"></div>
          <div className="row-audio-download">
            <img src="/assets/button-download.png" alt="download" />
          </div>
        </div>
      ) : (
        <div className="row-audio-time">{length}</div>
      )}
    </>
  );
};

export default AudioRow;
