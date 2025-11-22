import React from 'react';
import "./Advantages.scss";

const Advantages = () => {
    return (
        <section className="advantages">
            <div className="personalManager">
                <div className="personalManagerText">
                    <p>Персональный менеджер для корпоративных клиентов</p>
                </div>
            </div>
            <div className="miniAdvantages">
                <div className="miniAdvantageTop">
                    <div className="headingMiniAdvantages">
                        <p>Без депозитов:</p>
                    </div>
                    <div className="subtitleMiniAdvantages">
                        <p>платите только за время</p>
                    </div>
                </div>
                <div className="miniAdvantageMid">
                    <div className="headingMiniAdvantages">
                        <p>Скидка 15%</p>
                    </div>
                    <div className="subtitleMiniAdvantages">
                        <p>для студентов</p>
                    </div>
                </div>
                <div className="miniAdvantageBottom">
                    <div className="headingMiniAdvantages">
                        <p>Зона отдыха</p>
                    </div>
                    <div className="subtitleMiniAdvantages">
                        <p>с диванами и ТВ</p>
                    </div>
                </div>
            </div>
            <div className="freshContent">
                <div className="freshContentTextTop">
                    <p>Бесплатные обновления игр </p>
                </div>
                <div className="freshContentTextBottom">
                    <p>Всегда свежий контент</p>
                </div>
            </div>
        </section>
    );
};

export default Advantages;