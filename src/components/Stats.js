
export function Stats({ items }) {
    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = Math.round(numPacked / numItems * 100);


    if (numItems === 0) return <h3 className='stats'>No items yet</h3>;


    return <footer className='stats'>
        {percentage === 100 && (
            <h3>Congratulations! You packed everything!</h3>
        )}
        {percentage !== 100 && (
            <em>
                You have {numItems} items on your list, and you already packed {numPacked} ({percentage}%)
            </em>
        )}

    </footer>;


}
