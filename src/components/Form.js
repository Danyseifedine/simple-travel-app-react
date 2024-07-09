import { useState } from "react";

export default function Form({ onAddItem }) {

    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1);
    const [errorDescription, setErrorDescription] = useState("")

    const newItem = {
        id: Date.now(),
        description: description,
        quantity: quantity,
        packed: false
    }


    function handleSubmit(e) {
        e.preventDefault();

        if (!description) {
            setErrorDescription("Please enter a description");
            return;
        } else if (quantity < 1) return;
        setDescription("");
        setQuantity(1);
        onAddItem(newItem);
    }

    return <form className='add-form' onSubmit={handleSubmit}>
        <h3>What do you need for you trip</h3>
        <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map(i => <option key={i}>{i}</option>)}
        </select>

        {errorDescription ? (
            <div className='form-control'>
                <input type="text" placeholder="item..." value={description} onChange={e => setDescription(e.target.value)} />
                <span style={{ fontSize: "16px", background: "red", padding: "5px", borderRadius: "100px" }}>{errorDescription}</span>
            </div>
        ) : (
            <input type="text" placeholder="item..." value={description} onChange={e => setDescription(e.target.value)} />
        )}

        <button>Add</button>
    </form>
}