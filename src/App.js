import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Album, Home, Login, Personal, Public } from "./containers/public";
import { Route, Routes } from "react-router-dom";
import path from "./ultis/path";
import { useEffect } from "react";
import * as actions from './store/actions/index'

function App() {
  // const [work, setWork] = useState("");
  // const [todos, setTodos] = useState([]);
  // function handelAdd() {
  //   if (todos?.some((item) => item.id === work.replace(/\s/g, ""))) {
  //     toast.warn("Công việc đã tồn tại!");
  //   } else {
  //     setTodos((prev) => [...prev, { id: work.replace(/\s/g, ""), job: work }]);
  //     setWork("");
  //   }
  // }
  // const handleDelete = (id) => {
  //   console.log(id);
  //   setTodos(prev => prev.filter(item => item.id != id))
  // };
  // return (
  //   <div>
  //     <div className="flex flex-col gap-8 justify-center items-center py-3">
  //       <div>
  //         <input
  //           type="text"
  //           className="outline-none border border-red-300 px-4 py-2 w-[500]"
  //           placeholder="Nhập dữ liệu ...."
  //           value={work}
  //           onChange={(e) => setWork(e.target.value)}
  //         />
  //         <button
  //           className="outline-none py-2 px-4 text-white bg-red-400"
  //           onClick={handelAdd}
  //         >
  //           Add
  //         </button>
  //       </div>
  //       <div className="px-4">
  //         <h3 className="font-bold text-xl">Content</h3>
  //         <ul>
  //           {todos?.map((item) => {
  //             return (
  //               <li key={item.id} className="flex gap-10 items-center">
  //                 <span>{item.job}</span>
  //                 <span
  //                   className="cursor-pointer hover:font-bold"
  //                   onClick={() => handleDelete(item.id)}
  //                 >
  //                   x
  //                 </span>
  //               </li>
  //             );
  //           })}
  //         </ul>
  //       </div>
  //     </div>
  //     <ToastContainer
  //       position="top-center"
  //       autoClose={5000}
  //       hideProgressBar={false}
  //       newestOnTop={false}
  //       closeOnClick
  //       rtl={false}
  //       pauseOnFocusLoss
  //       draggable
  //       pauseOnHover
  //       theme="light"
  //     />
  //   </div>
  // );
  
  
  // const {test} = useSelector(state => state.app)
  // console.log(test);
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(actions.getHome())
  },[])
  
  return (
    <>
      <div className="">
        <Routes>
          <Route path={path.PUBLIC} element={<Public/>}>
            <Route path={path.HOME} element={<Home/>}/>
            <Route path={path.LOGIN} element={<Login/>}/>
            <Route path={path.STAR} element={<Home/>}/>
            <Route path={path.MY_MUSIC} element={<Personal/>}/>
            <Route path={path.PLAYLIST__TITLE__PID} element={<Album/>}/>
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
