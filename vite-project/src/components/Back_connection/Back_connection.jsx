import React from 'react';
import "./Back_connection.scss";

const Back_connection = () => {
    return (
        <form className="contacts__form">
            <input type="text" placeholder="Ваше имя" required />
            <input type="email" placeholder="Ваш email" required />
            <textarea placeholder="Ваше сообщение" required></textarea>

            <button type="submit">Отправить</button>
        </form>
    );
};

export default Back_connection;