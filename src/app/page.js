import React from "react";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <main className="w-layout-vflex main">
        <div className=" container">
            <Carousel/>
        </div>
        <section className="section">
            <div className="flex-block">
                <div className="video-container clickeable">
                    <div style={{paddingTop: "56.17021276595745%"}} className="w-video w-embed">
                        <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/ETpOK-Hsp60?controls=0&modestbranding=1&showinfo=0&rel=0"
                        title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>                           
                        </iframe>
                    </div>
                </div>
                <div className="text-content">
                        <h1>¡46% de descuento este Julio!</h1>
                        <p className="paragraph"><strong>Como parte de nuestras promociones tenemos ofrecemos nuestras pizzas
                                medianas a un 46% de descuento. Pregunta por nuestras promociones en nuestras tiendas
                                participantes.<br /></strong></p>
                        <p className="paragraph"><a href="/menu" className="link">¡Realiza tu pedido aquí!</a></p> 
                        <br></br>
                        <h1>Busca nuestros cupones de descuento</h1>
                        <p>Suscríbete al newletter para recibir actualizaciones y cupones</p>     
                </div>
            </div>
        </section>
    </main>
  );
}
