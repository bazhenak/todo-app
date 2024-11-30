import React, { useState } from 'react';
import '../styles/UserForm.scss';

const UserForm: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [position, setPosition] = useState('');
    const [department, setDepartment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!fullName || !position || !department) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        // Здесь вы можете добавить логику для добавления пользователя в список участников

        alert(`Участник "${fullName}" добавлен!`);
    };

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <h2>Добавить участника</h2>
            <label>
                ФИО:
                <input
                    type="text"
                    value={fullName}
                    required
                    onChange={(e) => setFullName(e.target.value)}
                />
            </label>
            <label>
                Должность:
                <input
                    type="text"
                    value={position}
                    required
                    onChange={(e) => setPosition(e.target.value)}
                />
            </label>
            <label>
                Подразделение:
                <input
                    type="text"
                    value={department}
                    required
                    onChange={(e) => setDepartment(e.target.value)}
                />
            </label>
            <button type="submit">Добавить участника</button>
        </form>
    );
};

export default UserForm;