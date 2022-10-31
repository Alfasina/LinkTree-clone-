
import './App.css';
import LinkSection from './components/Linksection';
import zuri from './Images/Zuri.Internship_Logo.svg'
import i4g from './Images/I4G.svg'




const Footer=()=>{
return<div className='footer' style={{display:'flex',borderTop:'#EAECF0 solid 1px',}}>

<img src={zuri} className='zuri' alt='Zuri'/>
<p style={{color:'#667085'}}>HNG Internship 9 Frontend Task</p>
<img src={i4g} className='i4g'alt='ingressive'/>

</div>
}

function App() {
  return (
    <>
   <LinkSection/>

   <>
   <Footer/>
   </>
    </>
  );
}

export default App;
