import React, { useState } from 'react';
import "./Table Style/Table.css"
import { Bounce, toast,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Table = ({ table, favoriteHandler }) => {

  const [state, setState] = useState(false)

  const stateHandler = () => {
    setState(true)
    favoriteHandler(table.currentBidPrice)
    toast.success('ℹ️ Item Added to your Favorite Lists', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce
    });
  }


  return (
    <tr className='border-t-2 border-[#DCE5F3]'>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask  h-18 w-18 rounded-br-[10px] rounded-tl-[10px]">
              <img
                src={table.image}
                alt={table.title} />
            </div>
          </div>
          <div>
            <div className="font-normal">{table.title}</div>
          </div>
        </div>
      </td>
      <td className='font-semibold'>${table.currentBidPrice}
        <br />
      </td>
      <td className='font-semibold'>{table.timeLeft}</td>
      <th className='text-center'>
        <button disabled={state} onClick={stateHandler} className='disabled cursor-pointer'><i className={` fa-solid fa-heart text-2xl text-[#0E2954] ${state && "change cursor-not-allowed"}`}></i></button>
      </th>
    </tr>

  );
};

export default Table;