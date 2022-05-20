import image1 from "../../assets/images/educacion_icon.png"
import image2 from "../../assets/images/guias_icon.png"
import image3 from "../../assets/images/vidassabias_icon.png"
import "./CardsInfo.css"

const images = [
    {
        src: image1,
        alt: "educacion_icon.png",
        text_image: "El proyecto Sabios Guías Intérpretes pretende acercarse aun más a la población juvenil a través del Programa enSeñas con el objetivo de incorporar de manera integral nuestros valores históricos, culturales y patrimoniales a la práctica educativa, entendida en su generalidad: formal, no formal e informal.",
    }, {
        src: image2,
        alt: "guias_icon.png",
        text_image: "Te proponemos una nueva forma de recorrer nuestros pueblos y municipios. De la mano de nuestros mayores podrás vivir de primera mano los usos originales de los lugares de interés y sus vivencias de antaño. Disfruta de la Naturaleza y también de la Historia.",
    }, {
        src: image3,
        alt: "vidassabias_icon.png",
        text_image: "Vidas Sabias nace con el objetivo de fomentar la recopilación audiovisual del patrimonio cultural inmaterial que las personas de Canarias nos aportan. Un reconocimiento al valor del saber popular y que no está escrito. Necesario para conocer y entender la riqueza cultural que nos rodea.",
    }
];

export default function CardsInfo() {
    return (
        <div className="card-flexing">
            {images.map((item, index) => (
            <div key={index} className="card-container">
                    <div className="image-container">
                        <img src={item.src} alt={item.alt} />
                    </div>
                    <div className="card-content">
                        <div className="card-body">
                            <p>{item.text_image}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}




