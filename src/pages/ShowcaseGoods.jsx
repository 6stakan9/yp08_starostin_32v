import React from 'react';
import Products from "../components/Products/Products.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

const ShowcaseGoods = () => {
    return (
        <>
            <Header />
            <div className="titleSubtitle">
                <div className="title">
                    <p>Витрина</p>
                </div>
                <div className="subtitle">
                    <p>На территории клубов ПРО-БИТ расположены точки общественного питания. Вы можете приобрести прохладительные напитки, энергетические напитки и сопутствующие товары.</p>
                </div>
            </div>
            <div className="Products">
                <Products img="./assets/img/Adrenaline_rash.png" name={"Adrenaline Rush, 0,449л"} price={"250 руб."}/>
                <Products img="./assets/img/Adrenaline_classik.png" name={"Adrenaline Rush Game Fuel, 0,449л"} price={"260 руб."}/>
                <Products img="./assets/img/Adrenaline_extra.png" name={"Adrenaline Rush Extra, 0,449л"} price={"300 руб."}/>
                <Products img="./assets/img/lubimii.png" name={"Любимый, в ассортименте, 0,33 л"} price={"150 руб."}/>
                <Products img="./assets/img/Lipton.png" name={"Липтон, в ассортименте, 0,5 л"} price={"175 руб."}/>
                <Products img="./assets/img/Frustile.png" name={"Фрустайл, в ассортименте, 0,5 л"} price={"120 руб."}/>
                <Products img="./assets/img/Aqua.png" name={"Аква Минерале, в ассортименте, 0,5 л"} price={"120 руб."}/>
                <Products img="./assets/img/Cola.png" name={"Эвервесс, в ассортименте, 0,5 л"} price={"150 руб."}/>
                <Products img="./assets/img/Lays.png" name={"Лейз, в ассортименте"} price={"от 100 до 300 руб."}/>
                <Products img="./assets/img/J7.png" name={"J7, в ассортименте, 0,33 л"} price={"145 руб."}/>
            </div>
            <Footer />
        </>
    );
};

export default ShowcaseGoods;