import React, { useContext, useEffect, useState } from 'react';
import { BsEyeFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi';
import { ContextStudent } from '../../ContextProvider/ContextProvider';
import ViewStudent from '../ViewStudent/ViewStudent';
import UpdateStudent from '../UpdateStudent/UpdateStudent';
import { toast } from 'react-hot-toast';
import { async } from '@firebase/util';
import Loader from '../Loader/Loader';

const ManageStudent = () => {
    const { getStudets, deleteStudent, refresh, setRefresh } = useContext(ContextStudent);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState({});

    useEffect(() => {
        student()
    }, [refresh])

    const student = async () => {
        const data = await getStudets();
        setStudents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        setLoading(false);
    };

    const studentDelete = async (id) => {
        const confirm = window.confirm("Are you want to delete?")
        if (confirm) {
            await deleteStudent(id)
                .then(() => {
                    toast.success("Deleted")
                    setRefresh(!refresh)
                })
                .catch(error => console.log(error));
        }
    }

    return (
        <>
            {
                loading ?
                    <Loader></Loader>
                    :
                    <div>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th className='bg-[#F33823] text-white'>Name</th>
                                        <th className='bg-[#F33823] text-white'>Roll</th>
                                        <th className='bg-[#F33823] text-white'>Class</th>
                                        <th className='bg-[#F33823] text-white'>View/Edit/Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        students.map(student => <tr key={student.id}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={student?.img} alt='' />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{student?.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {student?.roll}
                                            </td>
                                            <td>
                                                {student?.class}
                                            </td>
                                            <td className='flex items-center'>
                                                <label onClick={() => setView(student)} htmlFor="view-modal">
                                                    <BsEyeFill className='text-[#f33823] mr-2 cursor-pointer' size={25} />
                                                </label>
                                                <label onClick={() => setView(student)} htmlFor="update-modal">
                                                    <BiEditAlt className='text-[#f33823] mr-2 cursor-pointer' size={25} />
                                                </label>
                                                <RiDeleteBin6Line onClick={() => studentDelete(student.id)} className='text-[#f33823] cursor-pointer' size={25} />
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                            {
                                view &&
                                <>
                                    <ViewStudent view={view} />
                                    <UpdateStudent view={view}></UpdateStudent>
                                </>
                            }
                        </div>
                    </div>
            }
        </>
    );
};

export default ManageStudent;