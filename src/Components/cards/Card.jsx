
import { Bounce, toast, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Singlecard from './Singlecard';

const Card = ({ card, subHandler,cardStatehandler, enablehandler}) => {


    const removeHandler = (subPrices) => {

        subHandler(subPrices)

        toast.warn(' Item Removed From Favorites!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    }

    return (
        <div className='px-3'>
            {
                card.map(singleCard => <Singlecard key={singleCard.id} singleCard={singleCard} removeHandler={removeHandler} cardStatehandler={cardStatehandler} enablehandler={enablehandler}></Singlecard>)
            }
        </div>

    );
};

export default Card;