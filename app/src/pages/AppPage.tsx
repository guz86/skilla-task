import './AppPage.css';

const AppPage = () => {
  return (
    <div className="wrapper">
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
          <div className="row">
            <div className="row-type">
              <img
                className="row-call-image"
                src="/assets/incoming.png"
                alt="incoming"
              />
            </div>
            <div className="row-time">19:30</div>
            <div className="row-avatar">
              <img src="/assets/avatar.png" alt="avatar" />
            </div>
            <div className="row-phone">+7 (987) 567-17-12</div>
            <div className="row-source">Rabota.ru</div>
            <div className="row-score">
              <div className="row-score-element">Отлично</div>
            </div>
            <div className="row-length">Плеер</div>
          </div>

          <div className="row">
            <div className="row-type">
              <img
                className="row-call-image"
                src="/assets/incoming.png"
                alt="incoming"
              />
            </div>
            <div className="row-time">19:30</div>
            <div className="row-avatar">
              <img src="/assets/avatar.png" alt="avatar" />
            </div>
            <div className="row-phone">+7 (987) 567-17-12</div>
            <div className="row-source">Rabota.ru</div>
            <div className="row-score">
              <div className="row-score-element">Отлично</div>
            </div>
            <div className="row-length">Плеер</div>
          </div>

          <div className="row">
            <div className="row-type">
              <img
                className="row-call-image"
                src="/assets/incoming.png"
                alt="incoming"
              />
            </div>
            <div className="row-time">19:30</div>
            <div className="row-avatar">
              <img src="/assets/avatar.png" alt="avatar" />
            </div>
            <div className="row-phone">+7 (987) 567-17-12</div>
            <div className="row-source">Rabota.ru</div>
            <div className="row-score">
              <div className="row-score-element">Отлично</div>
            </div>
            <div className="row-length">Плеер</div>
          </div>

          <div className="row">
            <div className="row-type">
              <img
                className="row-call-image"
                src="/assets/incoming.png"
                alt="incoming"
              />
            </div>
            <div className="row-time">19:30</div>
            <div className="row-avatar">
              <img src="/assets/avatar.png" alt="avatar" />
            </div>
            <div className="row-phone">+7 (987) 567-17-12</div>
            <div className="row-source">Rabota.ru</div>
            <div className="row-score">
              <div className="row-score-element">Отлично</div>
            </div>
            <div className="row-length">Плеер</div>
          </div>

          <div className="row">
            <div className="row-type">
              <img
                className="row-call-image"
                src="/assets/incoming.png"
                alt="incoming"
              />
            </div>
            <div className="row-time">19:30</div>
            <div className="row-avatar">
              <img src="/assets/avatar.png" alt="avatar" />
            </div>
            <div className="row-phone">+7 (987) 567-17-12</div>
            <div className="row-source">Rabota.ru</div>
            <div className="row-score">
              <div className="row-score-element">Отлично</div>
            </div>
            <div className="row-length">Плеер</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
