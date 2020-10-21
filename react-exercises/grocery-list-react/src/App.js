import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
function App() {
  const [item, setItem] = useState('');
  const [itemList, setItemList] = useState({});
  const addItemToList = () => {
    let itmlst = { ...itemList };
    if (item.toLocaleLowerCase() in itmlst) {
      itmlst[item.toLocaleLowerCase()]['count'] =
        itmlst[item.toLocaleLowerCase()]['count'] + 1;
    } else {
      itmlst[item.toLocaleLowerCase()] = { count: 1, isPurchased: false };
    }
    setItemList(itmlst);
    setItem('');
  };
  const PurchaseItem = (key) => {
    let itmlst = { ...itemList };
    itmlst[key]['isPurchased'] = !itmlst[key]['isPurchased'];
    setItemList(itmlst);
  };
  const onKeyPress = (event) => {
    if (event.key === 'Enter' && item !== '') {
      addItemToList();
    }
  };
  const removeItemsFromList = () => {
    setItemList({});
  };
  return (
    <div className="App">
      <div className="App-header">
        <div className="header">
          <h1>Grocery List</h1>
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Add item to purchase list"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            onKeyPress={onKeyPress}
          />
          <Button
            label="ADD"
            isDisabled={item === ''}
            onClick={addItemToList}
          />
        </div>
        <div className="list-item">
          <ul>
            {itemList && Object.keys(itemList).length > 0 ? (
              <>
                <div className="inner-ul-header">
                  <span>Item name</span>
                  <span>No. of items</span>
                </div>
                {Object.keys(itemList).map((key) => {
                  const value = itemList[key];
                  return (
                    <li
                      key={key}
                      onClick={() => PurchaseItem(key)}
                      className={value.isPurchased && 'checked'}
                    >
                      <span className="item-name">{key}</span>
                      <span className="count-no">{value.count}</span>
                    </li>
                  );
                })}
                <Button
                  classname="remove-item"
                  label="REMOVE ALL ITEMS"
                  onClick={removeItemsFromList}
                />
              </>
            ) : (
              <div style={{ color: 'black' }}>No item is added</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
