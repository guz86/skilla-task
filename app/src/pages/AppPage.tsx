import './AppPage.css';
import Filters from '../components/Filters/Filters';
import Table from '../components/Table/Table';

const AppPage = () => {
  const rows = [
    {
      typeImage: '/assets/incoming.png',
      time: '19:30',
      avatar: '/assets/avatar.png',
      phone: '+7 (987) 567-17-12',
      source: 'Rabota.ru',
      score: 'Отлично',
      length: '13:06',
    },
    {
      typeImage: '/assets/incoming.png',
      time: '9:30',
      avatar: '/assets/avatar.png',
      phone: '+7 (987) 267-17-12',
      source: 'abota.ru',
      score: 'Отлично',
      length: '12:06',
    },
    {
      typeImage: '/assets/incoming.png',
      time: '18:30',
      avatar: '/assets/avatar.png',
      phone: '+7 (987) 167-17-12',
      source: 'Rabot.ru',
      score: 'Отлично',
      length: '11:06',
    },
    {
      typeImage: '/assets/incoming.png',
      time: '19:30',
      avatar: '/assets/avatar.png',
      phone: '+7 (987) 567-17-12',
      source: 'Rabota.ru',
      score: 'Отлично',
      length: '13:06',
    },
    {
      typeImage: '/assets/incoming.png',
      time: '9:30',
      avatar: '/assets/avatar.png',
      phone: '+7 (987) 267-17-12',
      source: 'abota.ru',
      score: 'Отлично',
      length: '12:06',
    },
    {
      typeImage: '/assets/incoming.png',
      time: '18:30',
      avatar: '/assets/avatar.png',
      phone: '+7 (987) 167-17-12',
      source: 'Rabot.ru',
      score: 'Отлично',
      length: '11:06',
    },
  ];

  return (
    <div className="wrapper">
      <Filters />
      <Table rows={rows} />
    </div>
  );
};

export default AppPage;
