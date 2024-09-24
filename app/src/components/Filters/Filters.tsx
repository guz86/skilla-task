import './Filters.css';
import { useState, useEffect, useRef } from 'react';

interface FiltersProps {
  onFilterChange: (filter: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('Все типы');
  const menuRef = useRef<HTMLDivElement>(null);

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

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
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
              <img src="/assets/close.png" alt="close" />
            </div>
          )}
        </div>
        {isMenuOpen && (
          <div className="dropdown-menu">
            <div
              className="dropdown-item"
              onClick={() => handleFilterChange('')}
            >
              Все типы
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleFilterChange('1')}
            >
              Входящие
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleFilterChange('0')}
            >
              Исходящие
            </div>
          </div>
        )}
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
