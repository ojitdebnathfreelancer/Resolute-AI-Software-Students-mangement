import React from 'react';
import './ViewStudent.css';

const ViewStudent = ({ view }) => {
    return (
        <div>
            <input type="checkbox" id="view-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="view-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className='flex gap-x-5'>
                        <input type="text" value={view?.name?.split(' ')[0]} name='firstName' placeholder="First Name" className="input input-bordered w-full max-w-xs" required />

                        <input type="text" value={view?.name?.split(' ')[1]} name='middelName' placeholder="Middel Name" className="input input-bordered w-full max-w-xs" required />

                        <input type="text" value={view?.name?.split(' ')[2]} name='lastName' placeholder="Last Name" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className='flex gap-x-5 mt-5'>
                        <select value={view?.class} name='class' className="select select-bordered w-full max-w-xs" required>
                            <option disabled selected>Select class</option>
                            <option defaultValue='1'>1</option>
                            <option defaultValue='2'>2</option>
                            <option defaultValue='3'>3</option>
                            <option defaultValue='4'>4</option>
                            <option defaultValue='5'>5</option>
                            <option defaultValue='6'>6</option>
                            <option defaultValue='7'>7</option>
                            <option defaultValue='8'>8</option>
                            <option defaultValue='9'>9</option>
                            <option defaultValue='10'>10</option>
                            <option defaultValue='11'>11</option>
                            <option defaultValue='12'>12</option>
                        </select>
                        <select value={view?.divison} name='divison' className="select select-bordered w-full max-w-xs" required>
                            <option disabled selected>Select divison</option>
                            <option defaultValue='A'>A</option>
                            <option defaultValue='B'>B</option>
                            <option defaultValue='C'>C</option>
                            <option defaultValue='D'>D</option>
                        </select>
                        <input type="number" value={view?.roll} name='roll' placeholder="Enter Roll Number In Digits" className="input input-bordered w-full max-w-xs" maxLength={2} required />
                    </div>
                    <div className='flex justify-between gap-x-5 mt-12'>
                        <input type="text" value={view?.address?.split('-')[0]} name='addressOne' placeholder="Address Line 1" className="input input-bordered w-full max-w-xs" required />

                        <input type="text" value={view?.address?.split('-')[1]} name='addressTow' placeholder="Address Line 2" className="input input-bordered w-full max-w-xs" />

                        <input type="file" placeholder='select profile picture' className="file-input file-input-bordered file-input-primary w-full max-w-xs" accept="image/png, image/gif, image/jpeg" required />
                    </div>
                    <div className='flex gap-x-5 mt-5'>
                        <input type="text" value={view?.landmark} name='landmark' placeholder="Landmark" className="input input-bordered w-full max-w-xs" required />

                        <input type="text" value={view?.citiy} name='citiy' placeholder="Citiy" className="input input-bordered w-full max-w-xs" required />

                        <input type="text" value={view?.pincode} name='pincode' placeholder="Pincode" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <input type="submit" value='Add Student' className="input w-full bg-[#F33823] max-w-xs mt-5 text-white font-bold cursor-pointer" />

                </div>
            </div>
        </div>
    );
};

export default ViewStudent;