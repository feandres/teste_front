import {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'
import DocenteQualis from "./componente/DocenteQualis";
import Filtro from "./componente/Filtro";
import GraficoProducao from "./componente/GraficoProducao";
import Header from "./componente/Header";
import Indicadores from "./componente/Indicadores";
import Navbar from "./componente/Navbar";

//vai vir de requisição no futuro
const programas = [
    {id:1, nome:"PPGCC"},
    {id:2, nome:"DCCMAPI"},
]

const client = axios.create({
    baseURL: "http://localhost:8080/api/programa/" 
});

export default function Programa() {    
    const [progSel, setProgSel] = useState(1);
    const [anoIni, setAnoIni] = useState(2019);
    const [anoFim, setAnoFim] = useState(2023);
    
    const [indicadores, setIndicadores] = useState({});

    
    useEffect( () => {
        document.body.classList.add('hold-transition', 'layout-top-nav');
        onSearch();
        }, []
    )
    
    /*
    useEffect( () => {
        document.body.classList.add('hold-transition', 'layout-top-nav');
        client.get(`indicadores?programa=${progSel}&anoIni=${anoIni}&anoFim=${anoFim}`)
            .then(                
                (response) => {
                    console.log(response.data)
                    setIndicadores(response.data)
                }
            ).catch(error => {
                console.log(error.response);
            });
        }, [progSel, anoIni, anoFim]
    )
    */

    function onSearch() {
        client.get(`indicadores?programa=${progSel}&anoIni=${anoIni}&anoFim=${anoFim}`)
            .then(                
                (response) => {
                    console.log(response.data)
                    setIndicadores(response.data)
                }
            ).catch(error => {
                console.log(error.response);
            });
    }
    
    return (
        
        <div className="wrapper">
            <Navbar titulo="SPPG"/>
            <div class="content-wrapper">
                <Header titulo="Programa"/>

                <div class="content">      
                    <div class="container">
                        <div class="container-fluid">
                            <Filtro programas={programas}
                                    filtroProg={progSel} onProgChange={setProgSel} 
                                    filtroAnoIni={anoIni} onAnoIniChange={setAnoIni}
                                    filtroAnoFim={anoFim} onAnoFimChange={setAnoFim}
                                    onSearch={onSearch}
                                    />
                            <Indicadores dados={indicadores}/>

                            <GraficoProducao />
                            <DocenteQualis />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );

}