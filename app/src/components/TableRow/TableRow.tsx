import AudioRow from '../AudioRow/AudioRow';
import './TableRow.css';
import { useState } from 'react';

interface TableRowProps {
  typeImage: string;
  time: string;
  avatar: string;
  phone: string;
  source: string;
  score: string;
  length: string;
  record: string;
  partnership_id: string;
}

const TableRow: React.FC<TableRowProps> = ({
  typeImage,
  time,
  avatar,
  phone,
  source,
  score,
  length,
  record,
  partnership_id,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getScoreDetails = () => {
    switch (score) {
      case 'Excellent':
        return { className: 'row-score-element-green', text: 'Отлично' };
      case 'Good':
        return { className: 'row-score-element-yellow', text: 'Хорошо' };
      case 'Bad':
        return { className: 'row-score-element-red', text: 'Плохо' };
      case 'Not Used':
      default:
        return {
          className: 'row-score-element',
          text: 'Скрипт не использован',
        };
    }
  };

  const { className, text } = getScoreDetails();

  return (
    <div
      className="row"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="row-type">
        <img className="row-call-image" src={typeImage} alt="incoming" />
      </div>
      <div className="row-time">{time}</div>
      <div className="row-avatar">
        <img className="row-avatar-img" src={avatar} alt="avatar" />
      </div>
      <div className="row-phone">{phone}</div>
      <div className="row-source">{source}</div>
      <div className="row-score">
        <div className={className}>{text}</div>
      </div>
      <div className="row-length">
        <AudioRow
          length={length}
          isHovered={isHovered}
          record={record}
          partnership_id={partnership_id}
        />
      </div>
    </div>
  );
};

export default TableRow;
