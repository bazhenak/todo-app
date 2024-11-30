import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Task } from '../types';
import '../styles/TaskCard.scss';

interface TaskCardProps {
    task: Task;
    index: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div
                    className="task-card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <h3>{task.title}</h3>
                    <p>Исполнитель: {task.assignee}</p>
                </div>
            )}
        </Draggable>
    );
};

export default TaskCard;