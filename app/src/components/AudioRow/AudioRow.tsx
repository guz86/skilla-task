import './AudioRow.css';
import { getCallRecord } from '../../utils/apiGetRecord';

interface AudioRowProps {
  length: string;
  isHovered: boolean;
  record: string;
  partnership_id: string;
}

const AudioRow: React.FC<AudioRowProps> = ({
  length,
  isHovered,
  record,
  partnership_id,
}) => {
  if (!length) {
    return null;
  }

  const handlePlay = async () => {
    try {
      const audioUrl = await getCallRecord({ record, partnership_id });
      console.log(audioUrl);
      const newAudio = new Audio(audioUrl);

      newAudio.play();
    } catch (error) {
      console.error('Ошибка при воспроизведении записи:', error);
    }
  };

  return (
    <>
      {isHovered ? (
        <div className="row-audio">
          <div>{length}</div>
          <div className="row-audio-play" onClick={handlePlay}>
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
