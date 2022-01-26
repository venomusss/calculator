import Form from "./Components/Form";
import Header from "./Components/Header";
import ItemList from "./Components/ItemList";
import Info from "./Components/Info";
import {useState} from "react";
import item from "./Components/Item";


function App() {
    let [list, setList] = useState([]);
    let [item, setItem] = useState({
        name: undefined,
        price: undefined,
        date: undefined,
        id:undefined
    })

    function addItem(e) {
        e.preventDefault();
        setItem(item = {
            name: e.target.elements.name.value,
            price: e.target.elements.price.value,
            date: e.target.elements.date.value,
            id:Date.now()
        })
        setList([...list, item]);
        e.target.elements.name.value = '';
        e.target.elements.price.value = '';
        e.target.elements.date.value = '';
    }
    function deleteItem(id){
        setList(list.filter(item=> item.id!=id))
    }

    return (
        <div className="App">
            <Header/>
            <div className='content'>
                <div className='left'>
                    <Form addItem={addItem}/>
                    <ItemList delete={deleteItem} list={list}/>
                </div>
                <Info list={list}/>
            </div>
        </div>
    );
}

export default App;
