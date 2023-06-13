import Qualitie from './qualitie';
import Bookmark from './bookmark';
import { v4 as uuid } from 'uuid';

const User = ({ users, onDelete, onToggle }) => {

    return (
        <>
            <thead >
                <tr >
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col">Избранное</th>
                    <th />
                </tr>
            </thead>
            <tbody >
                {users.map((user) =>
                    <tr key={uuid()}>
                        <th scope="row">{user.name}</th>
                        <td >
                            {user.qualities.map((qualitie) =>
                                <Qualitie
                                    key={uuid()}
                                    color={qualitie.color}
                                    name={qualitie.name} />
                            )}
                        </td>
                        <td >{user.profession.name}</td>
                        <td >{user.completedMeetings}</td>
                        <td >{user.rate} / 5</td>
                        <td >
                            <Bookmark
                                id={user._id}
                                status={user.bookmark}
                                onToggle={onToggle} />
                        </td>
                        <td>
                            <button className='btn btn-danger btn-sm m-2'
                                onClick={() => onDelete(user._id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
        </>
    );
};

export default User;
