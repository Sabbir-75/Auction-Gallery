import { useState } from 'react'
import './App.css'
import Banner from './Components/banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/navbar/Navbar'
import Tables from './Components/Table/Tables'
import { ToastContainer } from 'react-toastify'
import Cards from './Components/cards/cards'
import Card from './Components/cards/card'

function App() {

  const [add, setAdd] = useState(0)

  const favoriteHandler = (price) => {
    let newAdddConvert = add + price
    setAdd(newAdddConvert)
  }


  const [card, setCard] = useState([])

  const cardHandler = (table) => {
    let newCard = [...card, table]
    setCard(newCard)
  }


  const cardStatehandler = (id) => {

    let newCardState = card.filter(cardFilter => cardFilter.id !== id)
    setCard(newCardState)
  }


  const [enableState, setEnableState] = useState([])

  const enablehandler = (id) => {
    setEnableState([...enableState, id])
  }


  const subHandler = (subPrice) => {
    let newSub = add - subPrice
    setAdd(newSub)
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
          <Tables favoriteHandler={favoriteHandler} cardHandler={cardHandler} enableState={enableState}></Tables>
          <ToastContainer></ToastContainer>
        </div>
        <div className='w-4/12'>
          <div className=' bg-[#FFFFFF] rounded-[24px] pt-6'>
            <div className='text-center flex justify-center gap-3 items-center pb-3 border-b-2 border-[#DCE5F3]'>
              <i className="fa-solid fa-heart text-2xl text-red-500"></i> <h3 className='text-[26px] font-medium text-[#0E2954]'>Favorite Items</h3>
            </div>

            {
              card.length === 0 ? <Cards></Cards> : <Card card={card} subHandler={subHandler} cardStatehandler={cardStatehandler} enablehandler={enablehandler}></Card>
            }

            <div className='p-6 flex justify-between'>
              <h2 className='text-[20px] font-normal text-black'>Total bids Amount:</h2>
              <p className='text-[20px] font-semibold text-black'>${add.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
