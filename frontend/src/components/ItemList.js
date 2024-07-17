import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemList = ({onEdit, onDelete}) => {
    const [items, setItems] = useState([]);
    useEffect(() =>{
        fetchItems();
    }, []);

    const fetchItems = async()=> {
        try{
            const response = await
        axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch(error){
          console.error('There was an error fetching the Items!', error)
        }
    };

return (
    <div>
        <h1>Items</h1>
        <ul>
            {items.map(item => (
                <li key={item.id}><div>
        {item.first_name} : {item.middle_name} : {item.last_name} : {item.contact_num} : {item.email} : {item.address} : {item.zip_code} : {item.date_of_birth} : {item.place_of_birth} : {item.sex} : {item.civil_status} : {item.blood_type}
    </div>
    <div>
        Father: {item.fathers_given_name} : {item.fathers_middle_name} : {item.fathers_last_name} : {item.date_of_birth2} : {item.civil_status2} : {item.blood_type2} : {item.occupation} : {item.contact_number2}
    </div>
    <div>
        Mother: {item.mothers_given_name} : {item.mothers_middle_name} : {item.mothers_last_name} : {item.date_of_birth3} : {item.civil_status3} : {item.blood_type3} : {item.occupation2} : {item.contact_number3}
    </div>
    <div>
        Educational Background: {item.elementary} : {item.secondary} : {item.college}
    </div>
    <div>
        <button onClick={() => onEdit(item)}>Edit</button>
        <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
</li>
            ))}
        </ul>
    </div>
   );
};

export default ItemList;