import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import KanbanColumn from '../components/KanbanColumn';
import { Task } from '../types';
import '../styles/ActiveSprintPage.scss';

const initialTasks: { [key: string]: Task[] } = {
    todo: [
        { id: 'task-1', title: 'Задача 1', assignee: 'Иванов' },
        { id: 'task-2', title: 'Задача 2', assignee: 'Петров' },
    ],
    inProgress: [{ id: 'task-3', title: 'Задача 3', assignee: 'Сидоров' }],
    done: [{ id: 'task-4', title: 'Задача 4', assignee: 'Кузнецов' }],
};

const ActiveSprintPage: React.FC = () => {
    const [tasks, setTasks] = useState(initialTasks);

    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;

        if (!destination) return;

        const sourceCol = source.droppableId;
        const destCol = destination.droppableId;

        const sourceTasks = Array.from(tasks[sourceCol]);
        const destTasks = Array.from(tasks[destCol]);
        const [movedTask] = sourceTasks.splice(source.index, 1);

        if (sourceCol === destCol) {
            sourceTasks.splice(destination.index, 0, movedTask);
            setTasks({ ...tasks, [sourceCol]: sourceTasks });
        } else {
            destTasks.splice(destination.index, 0, movedTask);
            setTasks({ ...tasks, [sourceCol]: sourceTasks, [destCol]: destTasks });
        }
    };

    return (
        <div className="active-sprint-page">
            <h1>Активный спринт</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="kanban-board">
                    <KanbanColumn title="To Do" tasks={tasks.todo} columnId="todo" />
                    <KanbanColumn title="In Progress" tasks={tasks.inProgress} columnId="inProgress" />
                    <KanbanColumn title="Done" tasks={tasks.done} columnId="done" />
                </div>
            </DragDropContext>
        </div>
    );
};

export default ActiveSprintPage;