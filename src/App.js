import '../src/card.css';
import Cardhover from './Card'
import '../src/app.css';
import backview from '../src/backview.mp4';
function CardView() {
  return (
     <div className='container1'>
      {<video className='video1' autoPlay loop muted>
         <source src={backview} type='video/mp4' />
      </video>}
      <Cardhover />
    </div>
  
  )
}

export default CardView;