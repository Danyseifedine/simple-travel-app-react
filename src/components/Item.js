
export function Item({ item, onDeleteItem, onToggleItem }) {

    return <li>
        <input type='checkbox' value={item.packed} onChange={() => onToggleItem(item.id)}></input>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
        <button style={{ color: "red" }} onClick={() => onDeleteItem(item.id)}>X</button>
    </li>;
}
