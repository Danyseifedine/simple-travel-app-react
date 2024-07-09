
export function Alert({ oncloseAlert, onOkEmptyList }) {
    return <div className='alert'>
        <button className='exit-btn' onClick={oncloseAlert}>X</button>
        <p className='text-below-exit'>Are you sure you want to delete all items</p>
        <button className='ok-btn' onClick={onOkEmptyList}>OK</button>
        <button className='cancel-btn' onClick={oncloseAlert}>Cancel</button>
    </div>;
}
