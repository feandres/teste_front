export default function Filtro({programas, filtroProg, onProgChange, 
                              filtroAnoIni, onAnoIniChange,
                              filtroAnoFim, onAnoFimChange, 
                              onSearch}) {
     
    const lstSelect = programas.map((programa) => (
            <option value={programa.id}>{programa.nome}</option>
        )
    )

    return (
        <>
        <h5 className="mb-2">Filtros</h5>
        <form action="#">
            <div className="row">
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-4">
                            <div className="form-group">
                                <label>Programa:</label>
                                {/*value recebe o estado específico*/}
                                {/*onChange recebe a função de alteração do estado*/}                                
                                <select className="form-control" style={{width:'100%'}}
                                    onChange={(e) => onProgChange(e.target.value)} 
                                    value={filtroProg}
                                >
                                    {/*As opções obtidas por parâmetro*/}
                                    {lstSelect}
                                </select>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="form-group">
                                <label>Ano inicial:</label>
                                <input className="form-control" 
                                    value={filtroAnoIni} 
                                    onChange={ (e) => onAnoIniChange(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="form-group">
                                <label>Ano Final:</label>
                                <input className="form-control" 
                                    value={filtroAnoFim} 
                                    onChange={ (e) => onAnoFimChange(e.target.value)}/>
                            </div>
                        </div>

                        <div className="col-2">
                            <div className="form-group">                                                                
                                <label></label>
                                <button type="button" className="btn btn-block btn-primary btn-lg" 
                                    onClick={onSearch}>Filtrar</button>                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    );
}