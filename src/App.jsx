import './card.css';
import Cardhover from './Card'
import './App.css';
import tunnel from './tunnel.mp4'
function CardView() {
  return (
     <div className='container1'>
      <h1 className='title-head'> <span style={{color:"coral"}}>Random</span>  User <span style={{color:"coral"}}>Profile</span>  Viewer</h1>
      {<video className='video1' autoPlay loop muted>
         <source src={tunnel} type='video/mp4' />
      </video>}
      <Cardhover />
      <div className='footer'>
      <h3 className='footer-head'>Created by - <a href="https://github.com/deepudevweb" target='_blank'> <span style={{color:"coral", textDecoration:"none", cursor:"pointer", fontWeight:"bold", fontSize:"15px", marginLeft:"5px", listStyleType:"none"}}>Deepu Prajapati</span></a> </h3>
      </div>
    </div>
  
  )
}

export default CardView;