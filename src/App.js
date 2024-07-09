import { useState } from 'react';
import './index.css';
import Logo from './components/Logo';
import Form from './components/Form';
import { PackingList } from './components/PackingList';
import { Alert } from './components/Alert';
import { Stats } from './components/Stats';

function App() {

  const [items, setItems] = useState([]);
  const [alert, setAlert] = useState(false);

  function handleDeleteItem(id) {
    setItems(items => items.filter((item) => item.id !== id))
  }

  function handlAddeItems(item) {
    setItems(items => [...items, item]);
    console.log(items)
  }

  function closeAlert() {
    setAlert(false);
  }


  function handleToggleItem(id) {
    setItems(items => items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    ))
  }

  function clearList() {
    if (items.length !== 0) {
      setAlert(true);
    }

  }

  function handleOkEmptyList() {
    setItems([])
    setAlert(false);
  }

  return <div className='app'>
    <Logo />
    <Form onAddItem={handlAddeItems} />
    <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onclear={clearList} />
    <Stats items={items} />
    {alert ? <Alert oncloseAlert={closeAlert} onOkEmptyList={handleOkEmptyList} /> : null}

  </div>
}

export default App;
