import { useState } from "react";

const ShoppingList = () => {
    const [mylist, setMyList] = useState([]);
    const [item, setItem] = useState("");

    const handleChange = (evt) => {
        setItem(evt.target.value);
    };


    const handleAdd = () => {
        
            setMyList([...mylist, item]); 
            setItem("");
        }
    

    return (
        <>
            <input
                placeholder="Enter Your List"
                value={item}
                onChange={handleChange}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {mylist.map((item, index) => (
                    <li key={index}>{item}</li> 
                ))}
            </ul>
        </>
    );
};

export default ShoppingList;
