import { Call } from './api';

export const formatCalls = (calls: Call[]) => {
  return calls.map((call) => {
    const time = call.date.split(' ')[1];
    const [hours, minutes] = time.split(':');

    let typeImage =
      call.in_out === 1 ? '/assets/incoming.png' : '/assets/outgoing.png';

    if (call.in_out === 1) {
      typeImage =
        call.status === 'Не дозвонился' ? '/assets/missed.png' : typeImage;
    } else if (call.in_out === 0) {
      typeImage =
        call.status === 'Не дозвонился' ? '/assets/insanely.png' : typeImage;
    }

    const formattedMinutes = String(Math.floor(call.time / 60));
    const formattedSeconds = String(call.time % 60).padStart(2, '0');
    const callLength =
      call.time > 0 ? `${formattedMinutes}:${formattedSeconds}` : '';

    return {
      typeImage,
      time: `${hours}:${minutes}`,
      avatar: call.person_avatar || 'https://lk.skilla.ru/img/noavatar.jpg',
      phone: call.from_number,
      source: call.source || '',
      score: 'Отлично',
      length: callLength,
      id: call.id,
      partnershipId: call.partnershipId,
    };
  });
};
