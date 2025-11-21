import React from 'react';
import Button from "../Button/Button.jsx";
import "./Welcome.scss";

const Welcome = () => {
    return (
        <section className="welcome">
            <div className="welcomeBox">
                <div className="WelcomeHeading">
                    <div className="WelcomeName">
                        <p>Врывайся в игру!</p>
                    </div>
                    <div className="WelcomeSubtitle">
                        <p>Сеть топовых киберспортивных клубов и арен.</p>
                    </div>
                </div>
                <Button name={"Забронировать онлайн"}/>
            </div>
        </section>
    );
};

export default Welcome;