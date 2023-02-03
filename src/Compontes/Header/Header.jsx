import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa'
import { ContextStudent } from '../../ContextProvider/ContextProvider';

const Header = () => {
    const { user } = useContext(ContextStudent);
    return (
        <div className='flex justify-between items-center mt-5'>
            <div className='uppercase text-3xl font-bold text-[#584A4A]'>Logo</div>
            {
                user?.uid &&
                <div className='flex items-center shadow-md px-5 py-2 rounded-md'><span className='mr-2'><FaUserAlt /></span>{user?.email}</div>
            }
        </div>
    );
};

export default Header;