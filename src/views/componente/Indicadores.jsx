export default function Indicadores({dados}) {
    return (
        <>
        <h5 class="mb-2">Indicadores Capes</h5>
        <div class="row">
            <Infobox nome="Total Produções" valor={dados.totalProd} bg="gray" icon="fa-copy" />
            <Infobox nome="I Geral" valor={dados.igeral} bg="info" icon="fa-envelope" />
            <Infobox nome="I Restrito" valor={dados.irestrito} bg="success" icon="fa-flag" />
            <Infobox nome="I Não Restrito" valor={dados.inaoRestrito} bg="warning" icon="fa-copy" />
        </div>
        </>

    );
}

function Infobox({nome, valor, bg, icon}) {
    return (        
        <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box">
                <span class={"info-box-icon bg-" + bg}>
                    <i class={"far " + icon }></i></span>
                <div class="info-box-content">
                <span class="info-box-text">{nome}</span>
                <span class="info-box-number">{valor}</span>
                </div>        
            </div>
        </div>        
    );
}