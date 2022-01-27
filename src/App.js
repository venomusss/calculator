import Form from "./Components/Form";
import Header from "./Components/Header";
import ItemList from "./Components/ItemList";
import Info from "./Components/Info";
import {useState} from "react";
import TableHead from "./Components/TableHead";


function App() {
    let [list, setList] = useState([]);
    let [item, setItem] = useState({
        name: undefined,
        price: undefined,
        date: undefined,
        id: undefined
    });
    let [spend, setSpend] = useState(0);
    let [percentages, setPercentages] = useState(0);
    let [become, setBecome] = useState(0);

    function addItem(e) {
        if (e.target.elements.name.value && e.target.elements.price.value && e.target.elements.date.value) {
            setSpend(spend += 1 * e.target.elements.price.value)
            setBecome(become=e.target.elements.income.value)
            setPercentages(percentages=spend / become * 100)
            e.preventDefault();
            setItem(item = {
                name: e.target.elements.name.value,
                price: e.target.elements.price.value,
                date: e.target.elements.date.value,
                id: Date.now()
            })
            setList([...list, item]);
            e.target.elements.name.value = '';
            e.target.elements.price.value = '';
            e.target.elements.date.value = '';
        } else {
            e.preventDefault();
        }
    }

    function deleteItem(id) {
        let sum = list.filter(item => item.id === id)[0].price
        setSpend(spend -= sum);
        setPercentages(percentages=spend / become * 100);
        setList(list.filter(item => item.id != id));
    }


    return (
        <div className="App">
            <Header/>
            <div className='content'>
                <div className='left'>
                    <TableHead/>
                    <Form addItem={addItem}/>
                    <ItemList delete={deleteItem} list={list}/>
                </div>
                <Info percentages={percentages} spend={spend}/>
            </div>
        </div>
    );
}

export default App;
