import './TableRow.css';

interface TableRowProps {
  typeImage: string;
  time: string;
  avatar: string;
  phone: string;
  source: string;
  score: string;
  length: string;
}

const TableRow: React.FC<TableRowProps> = ({
  typeImage,
  time,
  avatar,
  phone,
  source,
  score,
  length,
}) => {
  
  return (
    <div className="row">
      <div className="row-type">
        <img className="row-call-image" src={typeImage} alt="incoming" />
      </div>
      <div className="row-time">{time}</div>
      <div className="row-avatar">
        <img
          className="row-avatar-img"
          src={avatar}
          alt="avatar"
        />
      </div>
      <div className="row-phone">{phone}</div>
      <div className="row-source">{source}</div>
      <div className="row-score">
        <div className="row-score-element">{score}</div>
      </div>
      <div className="row-length">
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
      </div>
    </div>
  );
};

export default TableRow;
