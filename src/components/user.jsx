import Qualitie from './qualitie';
import { v4 as uuid } from 'uuid';

const User = ({ ...props }) => {

    return (
        <>
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
                {props.users.map((user) =>
                    <tr key={uuid()}>
                        <th scope="row">{user.name}</th>
                        <td >
                            {user.qualities.map((qualitie) =>
                                <Qualitie key={uuid()}
                                    color={qualitie.color}
                                    name={qualitie.name} />
                            )}
                        </td>
                        <td >{user.profession.name}</td>
                        <td >{user.completedMeetings}</td>
                        <td >{user.rate}</td>
                        <td>
                            <button
                                className='btn btn-danger btn-sm m-2'
                                onClick={() =>
                                    props.onDelete(user._id)}>
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
