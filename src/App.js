import { useState } from 'react';
import api from './api';
import Users from './components/users';
import SearchStatus from './components/searchStatus';

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    let status = users.map(user => user.bookmark);
    // console.log(status);

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId));
    };

    return (
        <>
            <SearchStatus length={users.length} />
            <Users users={users} onDelete={handleDelete} status={status} />
        </>
    );
}

export default App;
