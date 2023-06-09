import User from './user';

const Users = ({ users, onDelete, status }) => {

    return (
        <>
            <table className="table">
                <User users={users} onDelete={onDelete} status={status} />
            </table>
        </>
    );
};

export default Users;
