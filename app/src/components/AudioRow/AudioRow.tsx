import './AudioRow.css';
import { useState, useEffect } from 'react';
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
  const [newAudio, setNewAudio] = useState<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (newAudio) {
      newAudio.addEventListener('timeupdate', updateProgress);
      newAudio.addEventListener('ended', handleAudioEnd);

      return () => {
        newAudio.removeEventListener('timeupdate', updateProgress);
        newAudio.removeEventListener('ended', handleAudioEnd);
      };
    }
  }, [newAudio]);

  const updateProgress = () => {
    if (newAudio) {
      const progress = (newAudio.currentTime / newAudio.duration) * 100;
      setProgress(progress);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const handlePlay = () => {
    if (newAudio) {
      if (isPlaying) {
        newAudio.pause();
      } else {
        newAudio.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      console.log('Звонок не был получен.');
    }
  };

  const handleDownload = async () => {
    try {
      const audioUrl = await getCallRecord({ record, partnership_id });
      const audio = new Audio(audioUrl);
      setNewAudio(audio);
      setProgress(0);
    } catch (error) {
      console.error('Ошибка при загрузке записи:', error);
    }
  };

  const handleClearAudio = () => {
    if (newAudio) {
      newAudio.pause();
      newAudio.src = '';
      setNewAudio(null);
      setProgress(0);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = (offsetX / rect.width) * 100;
    if (newAudio) {
      newAudio.currentTime = (percentage / 100) * newAudio.duration;
      setProgress(percentage);
    }
  };

  return (
    <>
      {isHovered && record ? (
        <div className="row-audio">
          <div className="row-audio-length">{length}</div>

          <div className="row-audio-play" onClick={handlePlay}>
            <img
              src={
                isPlaying
                  ? '/assets/button-pause.png'
                  : '/assets/button-play.png'
              }
              alt="play"
            />
          </div>

          <div
            className="row-audio-line"
            onClick={handleSeek}
            style={{
              background: `linear-gradient(to right, #2563EB ${progress}%, rgb(173, 191, 223) ${progress}%)`,
              width: '164px',
              height: '4px',
              borderRadius: '50px',
            }}
          ></div>

          <div className="row-audio-buttons">
            <div className="row-audio-download" onClick={handleDownload}>
              <img src="/assets/button-download.png" alt="download" />
            </div>

            {newAudio && (
              <div className="row-audio-clear" onClick={handleClearAudio}>
                <img src="/assets/button-delete.png" alt="clear" />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="row-audio-time">{length}</div>
      )}
    </>
  );
};

export default AudioRow;
