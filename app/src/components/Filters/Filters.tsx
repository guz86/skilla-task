import './Filters.css';

const Filters = () => {
  return (
    <div className="filters">
      <div className="type-filter">
        <div className="dropdown-button">
          <div>Все типы</div>
          <img
            src="/assets/arrow-down.png"
            alt="arrow"
            className="arrow-icon"
          />
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-item">Все типы</div>
          <div className="dropdown-item">Входящие</div>
          <div className="dropdown-item">Исходящие</div>
        </div>
      </div>
      <div className="day-filter">
        <img
          src="/assets/arrow-left.png"
          alt="arrow left"
          className="arrow-icon"
        />
        <div className="day-filter-number">
          <div className="filter-arrow-icon">
            <img
              src="/assets/icon-calendar.png"
              alt="calendar"
              className="arrow-icon"
            />
          </div>
          3 дня
        </div>
        <div className="filter-arrow-icon">
          <img
            src="/assets/arrow-right.png"
            alt="arrow right"
            className="arrow-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
