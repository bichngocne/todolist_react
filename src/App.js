import { useState } from "react";

function App() {
  const [work, setWork] = useState("");
  const [todos, setTodos] = useState([]);
  function handelAdd(){
    console.log(1);
    setTodos(prev => [...prev,work])
    setWork('')
  }
  return (
    <div className="flex flex-col gap-8 justify-center items-center py-3">
      <div>
        <input
          type="text"
          className="outline-none border border-red-300 px-4 py-2 w-[500]"
          placeholder="Nhập dữ liệu ...."
          value={work}
          onChange={(e) => setWork(e.target.value)}
        />
        <button
          className="outline-none py-2 px-4 text-white bg-red-400"
          onClick={handelAdd}
        >
          Add
        </button>
      </div>
      <div className="px-4">
        <h3>Content</h3>
        <ul>
          {todos?.map((item, index)=>{
            return(
            <li key={index}>{item}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
