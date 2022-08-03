import { User } from '../interfaces'
import moment from 'moment';
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const UserCard = ({ user }: { user: User }) => {
    return (
        <div className="flex p-5 shadow-lg rounded-md w-full h-full">
            <div className='w-[50px] h-[50px] rounded-full  overflow-hidden'>
                <img src={user.image} alt="" className="w-full h-full" />
            </div>
            <div className='text-sm  ml-4'>
                <p className="text-medium font-bold">{user.name}</p>
                <p className='text-gray-600 mb-2'>{user.email}</p>
                <p className='mb-2'>
                    <PersonIcon fontSize='small' /> {user.username}
                </p>
                <p>
                    <CalendarMonthIcon fontSize='small' /> {moment(user.registrationDate).format('MMMM Do, YYYY') }
                </p>
            </div>
        </div>
    )
}

export default UserCard