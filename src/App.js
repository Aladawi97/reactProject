import React, { useEffect } from 'react';
import './App.css'
import Pages from './component/pages/page';
import Aos from 'aos';
import "aos/dist/aos.css"

function App(){
    useEffect(()=>{
        Aos.init()
        Aos.refresh()
    },[])
    return(
        <>
        <Pages />
        </>
    )
}
export default App;