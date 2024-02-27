import React from 'react';
import './Offer.css';

function Offer() {
    return (
        <section className="offer">
            <h2>Nasza oferta</h2>
            <div className="offer-items">
                <div className="offer-item">
                    <h3>Pizza</h3>
                    <ul>
                        <li>Margherita</li>
                        <li>Pepperoni</li>
                        <li>Diavola</li>
                    </ul>
                </div>
                <div className="offer-item">
                    <h3>Lasagne</h3>
                    <p>Tradycyjna włoska lasagna z mięsem mielonym i sosem beszamelowym.</p>
                </div>
                <div className="offer-item">
                    <h3>Sałatki</h3>
                    <p>Różnorodne sałatki do wyboru, m.in. grecka, cezar, caprese.</p>
                </div>
            </div>
        </section>
    );
}

export default Offer;
