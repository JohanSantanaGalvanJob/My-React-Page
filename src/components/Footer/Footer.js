import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="main-footer">
              <div className="logos">
                  
              <a href="https://cifpsancristobal.org"><img src="/img/San-Cristobal-CIFP.logo_.png" alt="CIFP San Cristóbal" /></a>
          <a href="https://www3.gobiernodecanarias.org/medusa/edublog/ieselrincon/"><img src="/img/LogoIESElRincon-transparent.png" alt="IES El Rincón" /></a>
          <a href="https://www.sabiosguiasinterpretes.com"><img src="/img/LogoSabiosGuias.png" alt="Sabios Guías Intérpretes" /></a>
        </div>
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Información Adicional</h4>
                        <ul className="list-unstyled">
                            <li>64567475</li>
                            <li>Las Palmas de Gran Canaria, España</li>
                            <li>IES el rincon</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Participantes</h4>
                        <ul className="list-unstyled">
                            <li>CIFP San Cristóbal</li>
                            <li>IES El Rincón</li>
                            <li>Sabios Guías Intérpretes</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>WELL ANOTHER COLUMN</h4>
                        <ul className="list-unstyled">
                            <li>Dank MEMES</li>
                            <li>GHRTH stuff</li>
                            <li>JHTYJ</li>
                        </ul>
                        
                    </div>
                </div>
               
                
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Legal • Política de privacidad •
                        Política de cookies
                    </p>
                </div>
                
            </div>
            
        </div>
    );
};

export default Footer;
