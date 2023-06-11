import { useState } from 'react';
import api from './api';
import Users from './components/users';
import SearchStatus from './components/searchStatus';

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId));
    };

    const handleToggleBookmark = (id) => {
        setUsers(users.filter((user) => {
            if (user._id === id) {
                user.bookmark = !user.bookmark;
            }
            return user;
        }));
    }

    return (
        <>
            <SearchStatus length={users.length} />
            <Users users={users} onDelete={handleDelete} onToggle={handleToggleBookmark} />
        </>
    );
}

export default App;
