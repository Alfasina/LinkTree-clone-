
import './App.css';
import LinkSection from './components/Linksection';
import zuri from './Images/Zuri.Internship_Logo.svg'
import i4g from './Images/I4G.svg'




const Footer=()=>{
return<div className='footer' style={{display:'flex', justifyContent:'space-between', borderTop:'#EAECF0 solid 1px', padding:'32px 0px 0px', margin:'48px 112px', color:'#667085', fontWeight:'400', textAlign:'center'}}>

<img src={zuri} alt='Zuri'/>
<p style={{}}>HNG Internship 9 Frontend Task</p>
<img src={i4g} alt='ingressive'/>

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
