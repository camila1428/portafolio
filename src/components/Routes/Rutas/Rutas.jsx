import {Routes,Route} from 'react-router-dom'

import {Home} from "../../pages/Home/Home"
import {Historia} from "../../pages/Historia/historia"
import {Introduccion} from "../../pages/Introduccion/Introduccion"
//import {Experiencia} from "../../pages/Experiencia/Experiencia"

export function Rutas(){
    return(
        <>
        
            <Routes>
                <Route path='/inicio' element={<Home/>} ></Route>
                <Route path='/proyecto' element={<Historia/>}></Route>
                <Route path='/camilamarin' element={<Introduccion/>}></Route>
                
            </Routes>




        </>
    )
}