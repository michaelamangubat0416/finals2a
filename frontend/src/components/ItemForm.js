import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemForm = ({item, onSuccess}) =>{
    const [first_name, setFName] = useState('');
    const [middle_name, setMName] = useState('');
    const [last_name, setLName] = useState('');
    const [contact_num, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [zip_code, setZipCode] = useState('');
    const [date_of_birth, setDateofBirth] = useState('');
    const [place_of_birth, setPlaceofBirth] = useState('');
    const [sex, setSex] = useState('');
    const [civil_status, setCivilStatus] = useState('');
    const [blood_type, setBloodType] = useState('');
    const [fathers_given_name, setFathersGName] = useState('');
    const [fathers_middle_name, setFathersMName] = useState('');
    const [fathers_last_name, setFathersLName] = useState('');
    const [date_of_birth2, setDateofBirth2] = useState('');
    const [civil_status2, setCivilStatus2] = useState('');
    const [blood_type2, setBloodType2] = useState('');
    const [occupation, setOccupation] = useState('');
    const [contact_number2, setContactNumber2] = useState('');
    const [mothers_given_name, setMothersGName] = useState('');
    const [mothers_middle_name, setMothersMName] = useState('');
    const [mothers_last_name, setMothersLName] = useState('');
    const [date_of_birth3, setDateofBirth3] = useState('');
    const [civil_status3, setCivilStatus3] = useState('');
    const [blood_type3, setBloodType3] = useState('');
    const [occupation2, setOccupation2] = useState('');
    const [contact_number3, setContactNumber3] = useState('');
    const [elementary, setElementary] = useState('');
    const [secondary, setSecondary] = useState('');
    const [college, setCollege] = useState('');
    

    useEffect(()=>{
        if(item){
            setFName(item.first_name);
            setMName(item.middle_name);
            setLName(item.last_name);
            setContactNumber(item.contact_num); 
            setEmail(item.email);
            setAddress(item.address);
            setZipCode(item.zip_code);
            setDateofBirth(item.date_of_birth);
            setPlaceofBirth (item.place_of_birth);
            setSex(item.sex); 
            setCivilStatus(item.civil_status); 
            setBloodType(item.blood_type); 
            setFathersGName(item.fathers_given_name); 
            setFathersMName(item.fathers_middle_name); 
            setFathersLName(item.fathers_last_name); 
            setDateofBirth2(item.date_of_birth2); 
            setCivilStatus2(item.civil_status2); 
            setBloodType2(item.blood_type2);
            setOccupation(item.occupation); 
            setContactNumber2(item.contact_number2); 
            setMothersGName(item.mothers_given_name); 
            setMothersMName(item.mothers_middle_name); 
            setMothersLName(item.mothers_last_name); 
            setDateofBirth3(item.date_of_birth3); 
            setCivilStatus3(item.civil_status3);
            setBloodType3(item.blood_type3);
            setOccupation2(item.occupation2); 
            setContactNumber3(item.contact_number3);
            setElementary(item.elementary);
            setSecondary(item.secondary);
            setCollege(item.college);

        }
    }, [item]);

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const data={ first_name, middle_name, last_name, contact_num, email, address, zip_code, date_of_birth, place_of_birth, sex, civil_status, blood_type, fathers_given_name, fathers_middle_name, fathers_last_name, date_of_birth2, civil_status2, blood_type2, occupation, contact_number2, mothers_given_name, mothers_middle_name, mothers_last_name, date_of_birth3, civil_status3, blood_type3, occupation2, contact_number3, elementary, secondary, college};
        try{
            if(item){
                await 
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else{
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error){
            console.error('There was an error submitting the form!', error);
        }
   };

return (
    <form onSubmit={handleSubmit}>
        <div>
            <h3>I. Personal Information</h3>
            <label>First Name: </label>
            <input type="text" value={first_name} onChange={(e) => setFName(e.target.value)}/>
        </div>
        <div>
            <label>Middle Name: </label>
            <input type ="text" value={middle_name} onChange={(e) => setMName(e.target.value)}/>
        </div>
        <div>
            <label>Last Name: </label>
            <input type ="text" value={last_name} onChange={(e) => setLName(e.target.value)}/>
        </div>
        <div>
            <label>Contact Number: </label>
            <input type ="text" value={contact_num} onChange={(e) => setContactNumber(e.target.value)}/>
        </div>
        <div>
            <label>Email: </label>
            <textarea value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
            <label>Address: </label>
            <input type ="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div>
            <label>Zip Code: </label>
            <input type ="text" value={zip_code} onChange={(e) => setZipCode(e.target.value)}/>
        </div>
        <div>
            <label>Date of Birth: </label>
            <input type ="text" value={date_of_birth} onChange={(e) => setDateofBirth(e.target.value)}/>
        </div>
        <div>
            <label>Place of Birth: </label>
            <input type ="text" value={place_of_birth} onChange={(e) => setPlaceofBirth(e.target.value)}/>
        </div>
        <div>
            <label>Sex: </label>
            <input type ="text" value={sex} onChange={(e) => setSex(e.target.value)}/>
        </div>
        <div>
            <label>Civil Status: </label>
            <input type ="text" value={civil_status} onChange={(e) => setCivilStatus(e.target.value)}/>
        </div> 
        <div>
            <label>Blood Type: </label>
            <input type ="text" value={blood_type} onChange={(e) => setBloodType(e.target.value)}/>
        </div>
        <div>
            <h3>II. Family Background</h3>
            <label>Father's Given Name: </label>
            <input type ="text" value={fathers_given_name} onChange={(e) => setFathersGName(e.target.value)}/>
        </div>
        <div>
            <label>Father's Middle Name: </label>
            <input type ="text" value={fathers_middle_name} onChange={(e) => setFathersMName(e.target.value)}/>
        </div>
        <div>
            <label>Father's Last Name: </label>
            <input type ="text" value={fathers_last_name} onChange={(e) => setFathersLName(e.target.value)}/>
        </div>
        <div>
            <label>Date of Birth: </label>
            <input type ="text" value={date_of_birth2} onChange={(e) => setDateofBirth2(e.target.value)}/>
        </div>
        <div>
            <label>Civil Status: </label>
            <input type ="text" value={civil_status2} onChange={(e) => setCivilStatus2(e.target.value)}/>
        </div>
        <div>
            <label>Blood Type: </label>
            <input type ="text" value={blood_type2} onChange={(e) => setBloodType2(e.target.value)}/>
        </div>
        <div>
            <label>Occupation: </label>
            <input type ="text" value={occupation} onChange={(e) => setOccupation(e.target.value)}/>
        </div>
        <div>
            <label>Contact Number: </label>
            <input type ="text" value={contact_number2} onChange={(e) => setContactNumber2(e.target.value)}/>
        </div>
        <div>
            <label>Mother's Given Name: </label>
            <input type ="text" value={mothers_given_name} onChange={(e) => setMothersGName(e.target.value)}/>
        </div>
        <div>
            <label>Mother's Middle Name: </label>
            <input type ="text" value={mothers_middle_name} onChange={(e) => setMothersMName(e.target.value)}/>
        </div>
        <div>
            <label>Mother's Last Name: </label>
            <input type ="text" value={mothers_last_name} onChange={(e) => setMothersLName(e.target.value)}/>
        </div>
        <div>
            <label>Date of Birth: </label>
            <input type ="text" value={date_of_birth3} onChange={(e) => setDateofBirth3(e.target.value)}/>
        </div>
        <div>
            <label>Civil Status: </label>
            <input type ="text" value={civil_status3} onChange={(e) => setCivilStatus3(e.target.value)}/>
        </div>
        <div>
            <label>Blood Type: </label>
            <input type ="text" value={blood_type3} onChange={(e) => setBloodType3(e.target.value)}/>
        </div>
        <div>
            <label>Occupation: </label>
            <input type ="text" value={occupation2} onChange={(e) => setOccupation2(e.target.value)}/>
        </div>
        <div>
            <label>Contact Number: </label>
            <input type ="text" value={contact_number3} onChange={(e) => setContactNumber3(e.target.value)}/>
        </div>
        <h3>III. Educational Background</h3>
        <div>
            <label>Elementary: </label>
            <input type ="text" value={elementary} onChange={(e) => setElementary(e.target.value)}/>
        </div>
        <div>
            <label>Secondary: </label>
            <input type ="text" value={secondary} onChange={(e) => setSecondary(e.target.value)}/>
        </div>
        <div>
            <label>College: </label>
            <input type ="text" value={college} onChange={(e) => setCollege(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>
    </form>
   )    
};
export default ItemForm;