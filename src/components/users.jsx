import User from './user';

const Users = ({ users, onDelete }) => {

    return (
        <>
            <table className="table">
                <User users={users} onDelete={onDelete} />
            </table>
        </>
    );
};

export default Users;
