import { useEffect, useState } from 'react';
import './FormInput.css'
import {alphaNumberValidation,emailValidation,passwordValidation,bioValidation,telehoneValidation} from '../Helper/validation';


const FormInput=()=>{

    const [getGlobal,setGlobal]=useState(false);
    const [getConfirm,setConfirm]=useState(false);

    const [getForm,setForm]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirm:'',
        telephone:'',
        yourBio:''

    })

    const [getFormValidation,setFormValidation]=useState({
        firstName:false,
        lastName:false,
        email:false,
        password:false,
        telephone:false,
        yourBio:false,
        confirm:false 

    })

    useEffect(()=>{
        formValidationCheck();
        
    },[getForm])

   const onChangeHandler=(event)=>{
        setForm({...getForm,[event.target.name]:event.target.value});
        
        
    }

    const formValidationCheck=()=>{
        setFormValidation({
            firstName:alphaNumberValidation(getForm.firstName),
            lastName:alphaNumberValidation(getForm.lastName),
            email:emailValidation(getForm.email),
            password:passwordValidation(getForm.password),
            confirm:passwordValidation(getForm.confirm),
            telephone:telehoneValidation(getForm.telephone),
            yourBio:bioValidation(getForm.yourBio)
        })
 

    }

    const onSubmitHandler=()=>{

        formValidationCheck();
        setGlobal(true);
        if(getForm.password!='' && getForm.confirm!='' && getForm.password===getForm.confirm){
            setConfirm(false);
        }
        else{
            setConfirm(true);
        }
        
           }



    return(<div>
        {getGlobal&& getConfirm && <div className='danger'> password no match</div>}
        <div className='form-group'>
            <label>
                First Name  
            </label>
            <input value={getForm.firstName} onChange={onChangeHandler} type="text" name="firstName"/>
            {getGlobal&& getFormValidation.firstName && <div className='danger'>First name must be alphanumeric and contain 3-16 characters</div>}
        </div>

        <div className='form-group'>
            <label>
                Last Name  
            </label>
            <input  type="text" value={getForm.lastName} onChange={onChangeHandler} name="lastName"/>
            {getGlobal&& getFormValidation.lastName && <div className='danger'>Last name must be alphanumeric and contain 3-16 characters</div>}
        </div>

        <div className='form-group'>
            <label>
                Email  
            </label>
            <input type="email" value={getForm.email} onChange={onChangeHandler} name="email"/>
            {getGlobal&& getFormValidation.email && <div className='danger'>Email must be a valid address,e.g.example@example.com</div>}
        </div>

        <div className='form-group'>
            <label>
                Password
            </label>
            <input type="password" value={getForm.password}  onChange={onChangeHandler} name="password"/>
            {getGlobal&& getFormValidation.password && <div className='danger'>Password must be alphanumeric(@,_and - are also allowed)and between 6-20 characters</div>}
        </div>

        <div className='form-group'>
            <label>
              Confirm Password
            </label>
            <input type="password" value={getForm.confirm}  onChange={onChangeHandler} name="confirm"/>
            {getGlobal&& getFormValidation.confirm && <div className='danger'>Password must be alphanumeric(@,_and - are also allowed)and between 6-20 characters</div>}
        </div>
        

        <div className='form-group'>
            <label>
                Telephone  
            </label>
            <input type="text" value={getForm.telephone} onChange={onChangeHandler} name="telephone"/>
            {getGlobal&& getFormValidation.telephone && <div className='danger'>A valid telephone number(10 digits and 98642-20086)</div>}
        </div>

        <div className='form-group'>
            <label>
                Your Bio  
            </label>
            <input type="text" value={getForm.yourBio} onChange={onChangeHandler} name="yourBio"/>
            {getGlobal&& getFormValidation.yourBio && <div className='danger'>Bio must contain lower case letters ,underscores,hyphens and be  8-50 characters</div>}
        </div>

        <div className='form-group'>
            <button onClick={onSubmitHandler}>Submit</button>
        </div>
    </div>)

}

export default FormInput;