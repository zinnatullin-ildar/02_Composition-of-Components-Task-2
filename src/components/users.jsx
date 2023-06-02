import User from './user';

const Users = ({ ...props }) => {

    return (
        <>
            <table className="table">
                <User users={props.users} onDelete={props.onDelete} />
            </table>
        </>
    );
};

export default Users;
