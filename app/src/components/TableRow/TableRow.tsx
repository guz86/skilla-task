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
  id: number;
  partnershipId: string;
}

const TableRow: React.FC<TableRowProps> = ({
  typeImage,
  time,
  avatar,
  phone,
  source,
  score,
  length,
  id,
  partnershipId,
}) => {
  const [isHovered, setIsHovered] = useState(false);

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
        <div className="row-score-element">{score}</div>
      </div>
      <div className="row-length">
        <AudioRow
          length={length}
          isHovered={isHovered}
          recordId={id}
          partnershipId={partnershipId}
        />
      </div>
    </div>
  );
};

export default TableRow;
