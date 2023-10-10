import React from 'react';
import "./Homepage.css"

function Homepage()
{

    return(
       <div className="home">
        <br></br>
        <h1>Prefabricate din beton</h1>
        <div className='descriere'>
        Firma SC.PITIGOI.SRL, este o afacere de familie, începută în urmă cu peste 20 de ani, pornind de la vânzarea unui trabant . Firma Sc Pitigoi SRL vă ajută la crearea unui cuib beton. Oferim consultanță în alegerea produselor care se adaptează cerințelor și nevoilor fiecărui client.
        </div>
       <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>Contact</button>
       </div>
    );
}
export default Homepage;