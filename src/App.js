import './App.css';
import { useState, useEffect, useRef } from "react";

function App() {

  const [messageList, setMessageList] = useState([]);
  const inputValue = useRef(null);
  
  const handleFocus = () => {
    setMessageList(prevMessage => [...prevMessage, {id: messageList.length, text: inputValue.current.value, author: "Пользователь"}])
  }

  return (
    <div>
      <div>
        <input type="text" ref={inputValue}/>
        <button onClick={handleFocus}>Отправить</button>     
      </div>
      <div>
        {messageList.map((item) => {
          return (
            <div key={item.id}>
                {item.text}
              <div>
                {item.author}
              </div>
          </div>
            )
          }
        )
      }
      </div>
    </div>
  )
}

export function Counter() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
  setValue(event.target.value);
  }
  
  return (
      <div>
        <input type="text" value={value} onChange={handleChange} />
      </div>
    )
  }

export default App;
