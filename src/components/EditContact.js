import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link,useParams,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditContact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");
    const {id} = useParams();

    const contacts = useSelector(state => state);
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(()=>{
        if(currentContact){
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    },[currentContact]);

    const dispatch = useDispatch();
    let history = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        // const checkName = contacts.find(contacts => contacts.name === name && name)
        const checkEmail = contacts.find(contacts => contacts.id !== parseInt(id) && contacts.email === email)
        const checkNumber = contacts.find(contacts =>contacts.id !== parseInt(id) && contacts.number === parseInt(number))
        
        if(checkEmail) {return toast.error("Email is allready exist");}
        if(checkNumber) {return toast.error("Number is allready exist");}

        if(!email || !number || !name) return toast.warning("Please fill all the value");

        const data = {
            id : parseInt(id),
            name,
            email,
            number,
        }
        dispatch({type:"EDIT_CONTACT",payload : data});
        toast.success("Student updated successfully! ");
        history('/');
    }
    return (
        <div className='container'>
        {currentContact ? (
            <>
            <h1 className='display-3 text-center'>Edit Student {id}</h1>
            <div className='row'>
                <div className='col-md-6 shadow mx-auto p-5 '>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input type="text" placeholder='Name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <input type="email" placeholder='Email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <input type="number" placeholder='mobile number' className='form-control' value={number} onChange={(e)=>setNumber(e.target.value)}/> 
                        </div>
                        <div className='form-group'>
                            <input type="submit" value="Update Student" className='btn btn-dark' />
                            <Link to="/" className='btn btn-danger ml-3'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
            </>
        ) : (
            <h1 className='display-3 my-5 text-center'>StudentContact with id {id} not exist</h1>
        )}
        </div>
    );
};

export default EditContact
