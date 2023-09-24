import { useState } from "react";

function App() {
  const [work, setWork] = useState('');
  console.log(work)


  return (
    <div className="flex justify-center items-center py-3">
    <input type="text"
    className="outline-none border border-red-300 px-4 py-2 w-[500]"
    placeholder="Nhập dữ liệu ...."
    value={work}
    onChange={e => setWork(e.target.value)}
    />
    <button className="outline-none py-2 px-4 text-white bg-red-400">Add</button>
    </div>
  );
}

export default App;
