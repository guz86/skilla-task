import './AppPage.css';

const AppPage = () => {
  return (
    <div className="wrapper">
      <div className="filters">
        <div className="type-filter">Все типы</div>
        <div className="day-filter">3 дня</div>
      </div>

      <div className="table">
        <div className="headers">
          <div>Тип</div>
          <div>Время</div>
          <div>Сотрудник</div>
          <div>Звонок</div>
          <div>источник</div>
          <div>оценка</div>
          <div>Длительность</div>
        </div>
        <div className="rows">
          <div className="row">
            <div>имж</div>
            <div>19:30</div>
            <div>img</div>
            <div>+7 (987) 567-17-12</div>
            <div>Rabota.ru</div>
            <div>Отлично</div>
            <div>Плеер</div>
          </div>

          <div className="row">
            <div>имж</div>
            <div>19:30</div>
            <div>img</div>
            <div>+7 (987) 567-17-12</div>
            <div>Rabota.ru</div>
            <div>Отлично</div>
            <div>Плеер</div>
          </div>
          <div className="row">
            <div>имж</div>
            <div>19:30</div>
            <div>img</div>
            <div>+7 (987) 567-17-12</div>
            <div>Rabota.ru</div>
            <div>Отлично</div>
            <div>Плеер</div>
          </div>
          <div className="row">
            <div>имж</div>
            <div>19:30</div>
            <div>img</div>
            <div>+7 (987) 567-17-12</div>
            <div>Rabota.ru</div>
            <div>Отлично</div>
            <div>Плеер</div>
          </div>
          <div className="row">
            <div>имж</div>
            <div>19:30</div>
            <div>img</div>
            <div>+7 (987) 567-17-12</div>
            <div>Rabota.ru</div>
            <div>Отлично</div>
            <div>Плеер</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AppPage;
