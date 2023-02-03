import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { ContextStudent } from '../../ContextProvider/ContextProvider';

const AddStudent = () => {

    const { addStudent } = useContext(ContextStudent);

    const limit = event => {
        if (event.target.name === 'roll') {
            if (event.target.value.length > 2) {
                event.target.value = event.target.value.slice(0, 2);
            }
        };

        if (event.target.name === 'pincode') {
            if (event.target.value.length > 6) {
                event.target.value = event.target.value.slice(0, 6);
            }
        }
    };

    const handelAdd = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.firstName.value + ' ' + form.middelName.value + ' ' + form.lastName.value;
        const clas = form.class.value;
        const divison = form.divison.value;
        const roll = form.roll.value;
        const address = form.addressOne.value + '-' + form.addressTow.value;
        const landmark = form.landmark.value;
        const citiy = form.citiy.value;
        const pincode = form.pincode.value;
        const img = form.img.files[0];

        const student = {
            name,
            class: clas,
            divison,
            roll,
            address,
            landmark,
            citiy,
            pincode,
            img
        };

        const formData = new FormData();
        formData.append("image", img);

        fetch(`https://api.imgbb.com/1/upload?key=73adcb71f1df263fc9562299dd50904b`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgdata => {
                student.img = imgdata.data.url;

                addStudent(student)
                    .then(() => {
                        toast.success('Student Added Sucess');
                        form.reset();
                    })
                    .catch(error => console.log(error))
            })
    };
    // add student 

    return (
        <div>
            <form onSubmit={(event) => handelAdd(event)}>
                <div className='flex gap-x-5'>
                    <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='middelName' placeholder="Middel Name" className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className='flex gap-x-5 mt-5'>
                    <select name='class' className="select select-bordered w-full max-w-xs" required>
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
                    <select name='divison' className="select select-bordered w-full max-w-xs" required>
                        <option disabled selected>Select divison</option>
                        <option defaultValue='A'>A</option>
                        <option defaultValue='B'>B</option>
                        <option defaultValue='C'>C</option>
                        <option defaultValue='D'>D</option>
                    </select>
                    <input onChange={(event) => limit(event)} id='roll' type="number" name='roll' placeholder="Enter Roll Number In Digits" className="input input-bordered w-full max-w-xs" maxLength={2} pattern="[0-9]{2}" required />
                </div>
                <div className='flex justify-between gap-x-5 mt-12'>
                    <input type="text" name='addressOne' placeholder="Address Line 1" className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='addressTow' placeholder="Address Line 2" className="input input-bordered w-full max-w-xs" />
                    <input type="file" name='img' placeholder='select profile picture' className="file-input file-input-bordered file-input-primary w-full max-w-xs" accept="image/png, image/gif, image/jpeg" required />
                </div>
                <div className='flex gap-x-5 mt-5'>
                    <input type="text" name='landmark' placeholder="Landmark" className="input input-bordered w-full max-w-xs" required />
                    <input type="text" name='citiy' placeholder="Citiy" className="input input-bordered w-full max-w-xs" required />
                    <input onChange={(event) => limit(event)} type="number" name='pincode' placeholder="Pincode" className="input input-bordered w-full max-w-xs" maxLength='2' required />
                </div>
                <input type="submit" value='Add Student' className="input w-full bg-[#F33823] max-w-xs mt-5 text-white font-bold cursor-pointer" />
            </form>
        </div>
    );
};

export default AddStudent;