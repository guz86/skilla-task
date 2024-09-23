import TableRow from '../TableRow/TableRow';
import './Table.css';

interface TableRowData {
  typeImage: string;
  time: string;
  avatar: string;
  phone: string;
  source: string;
  score: string;
  length: string;
}

interface TableProps {
  rows: TableRowData[];
}

const Table: React.FC<TableProps> = ({ rows }) => {
  return (
    <div className="table">
      <div className="headers">
        <div className="row-type">Тип</div>
        <div className="dropdown-button row-time">
          <div>Время</div>
          <img
            src="/assets/arrow-down.png"
            alt="arrow"
            className="arrow-icon"
          />
        </div>
        <div className="row-avatar">Сотрудник</div>
        <div className="row-phone">Звонок</div>
        <div className="row-source">Источник</div>
        <div className="row-score">Оценка</div>
        <div className="dropdown-button row-length">
          <div>Длительность</div>
          <img
            src="/assets/arrow-down.png"
            alt="arrow"
            className="arrow-icon"
          />
        </div>
      </div>
      <div className="rows">
        {rows.map((row, index) => (
          <TableRow key={index} {...row} />
        ))}
      </div>
    </div>
  );
};

export default Table;
