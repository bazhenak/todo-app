import React from 'react';
import TaskForm from '../components/TaskForm';
import SprintForm from '../components/SprintForm';
import UserForm from '../components/UserForm';
import '../styles/AdminPanelPage.scss';

const AdminPanelPage: React.FC = () => {
    return (
        <div className="admin-panel-page">
            <h1>Панель администратора</h1>
            <TaskForm />
            <SprintForm />
            <UserForm />
        </div>
    );
};

export default AdminPanelPage;