import { useState } from 'react'
import './App.css'
import Banner from './Components/banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/navbar/Navbar'
import Tables from './Components/Table/Tables'
import { ToastContainer } from 'react-toastify'

function App() {

  const [add, setAdd] = useState(0)

  const favoriteHandler = (price) => {
  let newAdddConvert = add + price
    setAdd(newAdddConvert)
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='max-w-[1170px] mx-auto px-4 mb-8'>
        <h1 className='text-4xl text-[#0E2954] font-medium mb-5 mt-[80px]'>Active Auctions</h1>
        <p className='text-xl font-normal text-black'>Discover and bid on extraordinary items</p>
      </div>
      <div className='max-w-[1170px] mx-auto px-4 sm:flex sm:justify-between gap-6 pt-6 pb-[100px]'>

        <div className='w-8/12 bg-[#FFFFFF] rounded-[24px] pt-6'>
          <Tables favoriteHandler={favoriteHandler}></Tables>
          <ToastContainer></ToastContainer>
        </div>

        <div className='w-4/12'>
          <div className=' bg-[#FFFFFF] rounded-[24px] pt-6'>
            <div className='text-center flex justify-center gap-3 items-center pb-3 border-b-2 border-[#DCE5F3]'>
              <i className="fa-regular fa-heart text-2xl text-[#0E2954]"></i> <h3 className='text-[26px] font-medium text-[#0E2954]'>Favorite Items</h3>
            </div>
            <div className='py-6 space-y-5 flex items-center flex-col border-b-2 border-[#DCE5F3]'>
              <h2 className='text-[26px] font-medium text-black text-center'>No favorites yet</h2>
              <p className='max-w-[287px] text-[18px] font-normal text-black text-center'>Click the heart icon on any item to add it to your favorites</p>
            </div>
            <div className='p-6 flex justify-between'>
              <h2 className='text-[20px] font-normal text-black'>Total bids Amount</h2>
              <p className='text-[20px] font-normal text-black'>${add}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
