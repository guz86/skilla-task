import './AudioRow.css';
import { getCallRecord } from '../../utils/apiGetRecord';

interface AudioRowProps {
  length: string;
  isHovered: boolean;
  recordId: number;
  partnershipId: string;
}

const AudioRow: React.FC<AudioRowProps> = ({
  length,
  isHovered,
  recordId,
  partnershipId,
}) => {
  if (!length) {
    return null;
  }

  const handlePlay = async () => {
    try {
      const audioUrl = await getCallRecord({ recordId, partnershipId });
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
