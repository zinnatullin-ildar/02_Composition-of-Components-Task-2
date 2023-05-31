import React, { useState } from 'react';
import api from '../api';
import { v4 as uuid } from 'uuid';

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId));
    };

    const countUsers = users.length;

    const renderPhrase = (countUsers) => {
        // console.log(countUsers);
        if (countUsers === 1) return `${countUsers} человек тусанет с тобой сегодня`;
        if (countUsers === 2 || countUsers === 3 || countUsers === 4) return `${countUsers} человека тусанет с тобой сегодня`;
        if (countUsers === 0) return `Никто не тусанет с тобой сегодня`;
        return `${countUsers} человек тусанет с тобой сегодня`;
    };

    return (
        <>
            <h2 >
                <span
                    className={
                        'badge m-2 p-3 bg-' + (users.length > 0 ? 'primary' : 'danger')
                    }
                >
                    {renderPhrase(countUsers)}
                </span>
            </h2>
            <table className="table">
                <thead >
                    <tr >
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th />
                    </tr>
                </thead>
                <tbody >
                    {users.map((user) =>
                        <tr key={uuid()}>
                            <th scope="row">{user.name}</th>
                            <td >
                                {user.qualities.map((qualitie) =>
                                    <span key={uuid()}
                                        className={`badge m-1 bg-${qualitie.color}`}>
                                        {qualitie.name}
                                    </span>)
                                }
                            </td>
                            <td >{user.profession.name}</td>
                            <td >{user.completedMeetings}</td>
                            <td >{user.rate}</td>
                            <td>
                                <button
                                    className='btn btn-danger btn-sm m-2'
                                    onClick={() =>
                                        handleDelete(user._id)}>
                                    delete
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default Users;
