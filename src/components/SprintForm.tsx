import React, {useState} from 'react';
import '../styles/SprintForm.scss';

const SprintForm: React.FC = () => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [duration, setDuration] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const calculateDuration = () => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = end.getTime() - start.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            setDuration(diffDays.toString());
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !goal || !startDate || !endDate) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }


        alert(`Спринт "${name}" создан!`);
    };

    return (
        <form className="sprint-form" onSubmit={handleSubmit}>
            <h2>Создать спринт</h2>
            <label>
                Имя спринта:
                <input
                    type="text"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Цель спринта:
                <input
                    type="text"
                    value={goal}
                    required
                    onChange={(e) => setGoal(e.target.value)}
                />
            </label>
            <label>
                Дата начала:
                <input
                    type="date"
                    value={startDate}
                    required
                    onChange={(e) => {
                        setStartDate(e.target.value);
                        calculateDuration();
                    }}
                />
            </label>
            <label>
                Дата окончания:
                <input
                    type="date"
                    value={endDate}
                    required
                    onChange={(e) => {
                        setEndDate(e.target.value);
                        calculateDuration();
                    }}
                />
            </label>
            <label>
                Длительность (дней):
                <input type="text" value={duration} readOnly/>
            </label>
            <button type="submit">Создать спринт</button>
        </form>
    );
};

export default SprintForm;