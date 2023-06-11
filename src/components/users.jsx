import User from './user';

const Users = ({ users, onDelete, onToggle }) => {

    return (
        <>
            <table className="table">
                <User users={users} onDelete={onDelete} onToggle={onToggle} />
            </table>
        </>
    );
};

export default Users;
