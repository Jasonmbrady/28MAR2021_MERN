import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';


function App() {
  const [socket] = useState(()=> io(':8000'))
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([{
    name: "Test",
    msg: "Test Message"
  }]);

  useEffect(()=>{
    console.log("Is Socket Open?")
    socket.on('Welcome', data => console.log(data));
    socket.on("new_message", msg =>{
      setMessages(prevMessages => {
        return [msg, ...prevMessages]
      });
    })
  }, [socket])

  const chatHandler = e =>{
    e.preventDefault();
    socket.emit("client_message", {name: name, msg: text});
    setText("");
  }

  return (
    <div className="App">
      <form onSubmit={chatHandler}>
        <div>
          <label>Name:</label>
          <input value={name} onChange={e=>setName(e.target.value)}/>
        </div>
        <textarea value={text} onChange={e=>setText(e.target.value)}></textarea>
        <button>Post</button>
      </form>
      
      <div>
      {messages.map((message, idx)=>{
        return(
          <p key={idx}>{message.name}: {message.msg}</p>
        )
      })}
      </div>
    </div>
  );
}

export default App;
