import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'; 
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
const AddContact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();
    let history = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        // const checkName = contacts.find(contacts => contacts.name === name && name)
        const checkEmail = contacts.find(contacts => contacts.email === email && email)
        const checkNumber = contacts.find(contacts => contacts.number === number && parseInt(number))
        
        if(checkEmail) {return toast.error("Email is allready exist");}
        if(checkNumber) {return toast.error("Number is allready exist");}

        if(!email || !number || !name) return toast.warning("Please fill all the value");

        const data = {
            id : contacts[contacts.length - 1].id + 1,
            name,
            email,
            number,
        }
        dispatch({type:"ADD_CONTACT",payload : data});
        toast.success("Student added successfully! ");
        history('/');
    }

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='display-3 text-center'>Add Student</h1>
                <div className='col-md-6 shadow mx-auto p-5'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input type="text" placeholder='Name' className='form-control' value={name} onChange={e=>setName(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <input type="email" placeholder='Email' className='form-control' value={email} onChange={e=>setEmail(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <input type="number" placeholder='Mobile number' className='form-control' value={number} onChange={e=>setNumber(e.target.value)}/> 
                        </div>
                        <div className='form-group'>
                            <input type="submit" value="Add Student" className="btn btn-block btn-dark" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact
