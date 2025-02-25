import React, { useEffect, useRef, useState } from 'react';

interface Session {
    label: string;
    size: number;
    color: string;
}

const DashboardCard = () => {
    const [cardOpen, setCardOpen] = useState<boolean>(false);
    const [total, setTotal] = useState<number>(0);
    const [sessions, setSessions] = useState<Session[]>([]);
    const cardRef = useRef<HTMLDivElement | null>(null);

    // Przykładowe dane sesji
    const cardData = {
        sessions: [
            { label: 'Desktop', size: 60, color: 'bg-blue-500' },
            { label: 'Mobile', size: 30, color: 'bg-green-500' },
            { label: 'Tablet', size: 10, color: 'bg-red-500' },
        ],
    };

    useEffect(() => {
        const countUp = (ref: { current: { innerText: string } }, start: number, end: number, duration: number) => {
            const stepTime = Math.abs(Math.floor(duration / (end - start)));
            let current = start;
            const timer = setInterval(() => {
                current += 1;
                if (current > end) {
                    clearInterval(timer);
                    current = end;
                }
                ref.current.innerText = current.toString();
            }, stepTime);
        };

        setSessions(cardData.sessions);
        setTimeout(() => {
            setCardOpen(true);
            countUp({ current: { innerText: total.toString() } }, 0, 11602, 800);
            cardData.sessions.forEach((el, i) => {
                countUp({ current: { innerText: '0' } }, 0, el.size, 1600);
            });
        }, 100);
    }, []);

    return (
        <div className="w-200 h-50 bg-transparent justify-center mt-0 ml-0">
            <div className="bg-white-800 text-gray-500 rounded shadow-xl py-3 px-3 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="flex">
                    <h3 className="text-md font-semibold leading-tight flex-1">Urządzenia</h3>
                    <div className="relative h-5 leading-none">
                        <button
                            className="text-lg text-gray-500 hover:text-gray-300 h-6 focus:outline-none"
                            onClick={() => setCardOpen(!cardOpen)}
                        >
                            <i className={`mdi mdi-chevron-${cardOpen ? 'up' : 'down'}`}></i>
                        </button>
                    </div>
                </div>
                <div
                    className="relative overflow-hidden transition-all duration-500"
                    ref={cardRef}
                    style={{ maxHeight: cardOpen ? `${cardRef.current?.scrollHeight}px` : '0', opacity: cardOpen ? 1 : 0 }}
                >
                    <div>
                        <div className="pb-2 lg:pb-4">
                            <h4 className="text-xl lg:text-2xl text-white font-semibold leading-tight inline-block" ref={cardRef}>
                                {total}
                            </h4>
                        </div>
                        <div className="pb-2 lg:pb-4">
                            <div className={`overflow-hidden rounded-full h-2 bg-gray-800 flex transition-all duration-500 ${cardOpen ? 'w-full' : 'w-0'}`}>
                                {sessions.map((item, index) => (
                                    <div key={index} className={`${item.color} h-full`} style={{ width: `${item.size}%` }}></div>
                                ))}
                            </div>
                        </div>
                        <div className="flex -mx-2">
                            {sessions.map((item, index) => (
                                <div key={index} className={`w-1/3 px-2 ${index !== 0 ? 'border-l border-gray-700' : ''}`}>
                                    <div className="text-xs">
                                        <span className={`inline-block w-2 h-2 rounded-full mr-1 align-middle ${item.color}`}>&nbsp;</span>
                                        <span className="align-middle">{item.label}&nbsp;</span>
                                    </div>
                                    <div className="font-medium text-sm text-white">
                                        <span>{0}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardCard;