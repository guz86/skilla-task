import { Call } from './api';

export const formatCalls = (calls: Call[]) => {
    return calls.map((call) => {
        const time = call.date.split(' ')[1];
        const [hours, minutes] = time.split(':');

        let typeImage = call.in_out === 1 ? '/assets/incoming.png' : '/assets/outgoing.png';

        if (call.in_out === 1) {
            typeImage = call.status === 'Не дозвонился' ? '/assets/missed.png' : typeImage;
        } else if (call.in_out === 0) {
            typeImage = call.status === 'Не дозвонился' ? '/assets/insanely.png' : typeImage;
        }

        return {
            typeImage,
            time: `${hours}:${minutes}`,
            avatar: call.person_avatar || "https://lk.skilla.ru/img/noavatar.jpg",
            phone: call.from_number,
            source: call.source || '',
            score: 'Отлично',
            length: `${Math.floor(call.time / 60)}:${call.time % 60}`,
        };
    });
};
