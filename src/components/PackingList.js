import { useState } from 'react';
import { Item } from './Item';


export function PackingList({ items, onDeleteItem, onToggleItem, onclear }) {

    const [sortBy, setSortBy] = useState("input");


    let sortedItems;

    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
    if (sortBy === "quantity") sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);


    return <div className='list'>
        <ul>
            {sortedItems.map(item => <Item key={item.id} item={item} onToggleItem={onToggleItem} onDeleteItem={onDeleteItem} />)}
        </ul>
        <div className='actions'>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="input">Sort by input order</option>
                <option value="description">Sort by description order</option>
                <option value="packed">Sort by packed status</option>
                <option value="quantity">Sort by item quantity</option>

            </select>
            <button onClick={onclear}>Clear list</button>
        </div>
    </div>;
}
