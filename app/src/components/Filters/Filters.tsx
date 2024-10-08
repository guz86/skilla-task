import './Filters.css';
import { useState, useEffect, useRef } from 'react';

interface FiltersProps {
  onFilterChange: (filter: string) => void;
  onDateRangeChange: (range: string) => void;
  onLeftArrowClick: () => void;
  onRightArrowClick: () => void;
  onCustomDateRangeChange: (startDate: string, endDate: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  onFilterChange,
  onDateRangeChange,
  onLeftArrowClick,
  onRightArrowClick,
  onCustomDateRangeChange,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('Все типы');
  const [isDateMenuOpen, setDateMenuOpen] = useState(false);
  const [currentDateRange, setCurrentDateRange] = useState('3 дня');
  const [isCustomDateRange, setIsCustomDateRange] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const [isCalendarHovered, setIsCalendarHovered] = useState(false);

  const [startDay, setStartDay] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endDay, setEndDay] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [endYear, setEndYear] = useState('');

  const handleFilterChange = (filter: string) => {
    const filterNames: { [key: string]: string } = {
      '': 'Все типы',
      '1': 'Входящие',
      '0': 'Исходящие',
    };

    setCurrentFilter(filterNames[filter]);
    onFilterChange(filter);
    setMenuOpen(false);
  };

  const handleResetFilters = () => {
    setCurrentFilter('Все типы');
    onFilterChange('');
    setMenuOpen(false);
  };

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleDateRangeChange = (range: string) => {
    setCurrentDateRange(range);
    onDateRangeChange(range);
    setDateMenuOpen(false);
    setIsCustomDateRange(false);
  };

  const handleToggleDateMenu = () => {
    setDateMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
      setDateMenuOpen(false);
    }
  };

  const handleCustomDateRangeChange = () => {
    const startDate = `${startYear}-${startMonth}-${startDay}`;
    const endDate = `${endYear}-${endMonth}-${endDay}`;

    if (startDate && endDate) {
      onCustomDateRangeChange(startDate, endDate);
      setStartDay('');
      setStartMonth('');
      setStartYear('');
      setEndDay('');
      setEndMonth('');
      setEndYear('');
      setIsCustomDateRange(false);
      setCurrentDateRange('Диапазон');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="filters" ref={menuRef}>
      <div className="type-filter">
        <div style={{ display: 'flex' }}>
          <div className="dropdown-button" onClick={handleToggleMenu}>
            <div
              className={`filter-text ${currentFilter !== 'Все типы' ? 'active-filter' : ''}`}
            >
              {currentFilter}
            </div>
            <img
              src="/assets/arrow-down.png"
              alt="arrow"
              className={`arrow-icon ${isMenuOpen ? 'arrow-up' : 'arrow-down'}`}
            />
          </div>
          {currentFilter !== 'Все типы' && (
            <div className="reset-filters-close" onClick={handleResetFilters}>
              <div className="reset-filters">Сбросить фильтры</div>
              <img src="/assets/button-delete.png" alt="close" />
            </div>
          )}
        </div>
        {isMenuOpen && (
          <div className="dropdown-menu">
            <div
              className={`dropdown-item ${currentFilter === 'Все типы' ? 'active-filter' : ''}`}
              onClick={() => handleFilterChange('')}
            >
              Все типы
            </div>
            <div
              className={`dropdown-item ${currentFilter === 'Входящие' ? 'active-filter' : ''}`}
              onClick={() => handleFilterChange('1')}
            >
              Входящие
            </div>
            <div
              className={`dropdown-item ${currentFilter === 'Исходящие' ? 'active-filter' : ''}`}
              onClick={() => handleFilterChange('0')}
            >
              Исходящие
            </div>
          </div>
        )}
      </div>

      <div className="day-filter">
        <div
          className="filter-arrow-icon"
          onMouseEnter={() => setIsLeftHovered(true)}
          onMouseLeave={() => setIsLeftHovered(false)}
          onClick={onLeftArrowClick}
        >
          <img
            src={
              isLeftHovered
                ? '/assets/arrow-left-active.png'
                : '/assets/arrow-left.png'
            }
            alt="arrow left"
            className="arrow-icon"
          />
        </div>
        <div
          className="day-filter-number"
          onClick={handleToggleDateMenu}
          onMouseEnter={() => setIsCalendarHovered(true)}
          onMouseLeave={() => setIsCalendarHovered(false)}
        >
          <div className="filter-arrow-icon">
            <img
              src={
                isCalendarHovered
                  ? '/assets/icon-calendar-active.png'
                  : '/assets/icon-calendar.png'
              }
              alt="calendar"
              className="arrow-icon"
            />
          </div>
          <div style={{ cursor: 'pointer' }}>{currentDateRange}</div>
        </div>
        <div
          className="filter-arrow-icon"
          onMouseEnter={() => setIsRightHovered(true)}
          onMouseLeave={() => setIsRightHovered(false)}
          onClick={onRightArrowClick}
        >
          <img
            src={
              isRightHovered
                ? '/assets/arrow-right-active.png'
                : '/assets/arrow-right.png'
            }
            alt="arrow right"
            className="arrow-icon"
          />
        </div>

        {isDateMenuOpen && (
          <div className="dropdown-menu date-dropdown">
            <div
              className={`dropdown-item ${currentDateRange === '3 дня' ? 'active-filter' : ''}`}
              onClick={() => handleDateRangeChange('3 дня')}
            >
              3 дня
            </div>
            <div
              className={`dropdown-item ${currentDateRange === 'Неделя' ? 'active-filter' : ''}`}
              onClick={() => handleDateRangeChange('Неделя')}
            >
              Неделя
            </div>
            <div
              className={`dropdown-item ${currentDateRange === 'Месяц' ? 'active-filter' : ''}`}
              onClick={() => handleDateRangeChange('Месяц')}
            >
              Месяц
            </div>
            <div
              className={`dropdown-item ${currentDateRange === 'Год' ? 'active-filter' : ''}`}
              onClick={() => handleDateRangeChange('Год')}
            >
              Год
            </div>
            <div
              className={`dropdown-item ${isCustomDateRange ? 'active-filter' : ''}`}
              onClick={() => setIsCustomDateRange((prev) => !prev)}
            >
              Указать даты
            </div>

            <div
              className={`custom-date-range ${isCustomDateRange ? 'active' : ''}`}
            >
              <div className="date-input">
                <input
                  type="text"
                  value={startDay}
                  onChange={(e) => setStartDay(e.target.value)}
                  className="date-field"
                  placeholder="_ _"
                />
                <span className="date-separator">.</span>
                <input
                  type="text"
                  value={startMonth}
                  onChange={(e) => setStartMonth(e.target.value)}
                  className="date-field"
                  placeholder="_ _"
                />
                <span className="date-separator">.</span>
                <input
                  type="text"
                  value={startYear}
                  onChange={(e) => setStartYear(e.target.value)}
                  className="date-field-year"
                  placeholder="_ _"
                />
              </div>
              <span className="date-range-separator">-</span>
              <div className="date-input">
                <input
                  type="text"
                  value={endDay}
                  onChange={(e) => setEndDay(e.target.value)}
                  className="date-field"
                  placeholder="_ _"
                />
                <span className="date-separator">.</span>
                <input
                  type="text"
                  value={endMonth}
                  onChange={(e) => setEndMonth(e.target.value)}
                  className="date-field"
                  placeholder="_ _"
                />
                <span className="date-separator">.</span>
                <input
                  type="text"
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                  className="date-field-year"
                  placeholder="_ _"
                />
              </div>
              <img
                onClick={handleCustomDateRangeChange}
                src="/assets/icon-calendar.png"
                alt="calendar"
                className="calendar-icon"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
