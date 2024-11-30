import React, { useState } from 'react';
import '../styles/TaskForm.scss';

const TaskForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [author, setAuthor] = useState('');
    const [assignee, setAssignee] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');
    const [comments, setComments] = useState('');
    const [observers, setObservers] = useState('');

    const generateTaskId = (): string => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomLetters =
            letters.charAt(Math.floor(Math.random() * letters.length)) +
            letters.charAt(Math.floor(Math.random() * letters.length));
        const randomNumbers = Math.floor(1000 + Math.random() * 9000);
        return `${randomLetters}-${randomNumbers}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (description.length < 40) {
            alert('Описание должно быть не менее 40 символов.');
            return;
        }

        if (comments && comments.length < 40) {
            alert('Комментарий должен быть не менее 40 символов.');
            return;
        }

        const taskId = generateTaskId();

        // Здесь вы можете добавить логику для добавления задачи в список задач

        alert(`Задача ${taskId} создана!`);
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h2>Создать задачу</h2>
            <label>
                Заголовок:
                <input
                    type="text"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                Подзаголовок:
                <input
                    type="text"
                    value={subtitle}
                    required
                    onChange={(e) => setSubtitle(e.target.value)}
                />
            </label>
            <label>
                Автор:
                <input
                    type="text"
                    value={author}
                    required
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </label>
            <label>
                Исполнитель:
                <input
                    type="text"
                    value={assignee}
                    required
                    onChange={(e) => setAssignee(e.target.value)}
                />
            </label>
            <label>
                Время выполнения:
                <input
                    type="text"
                    value={duration}
                    required
                    onChange={(e) => setDuration(e.target.value)}
                />
            </label>
            <label>
                Описание:
                <textarea
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </label>
            <label>
                Дополнительные комментарии:
                <textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                ></textarea>
            </label>
            <label>
                Наблюдатели:
                <input
                    type="text"
                    value={observers}
                    onChange={(e) => setObservers(e.target.value)}
                />
            </label>
            <button type="submit">Создать задачу</button>
        </form>
    );
};

export default TaskForm;