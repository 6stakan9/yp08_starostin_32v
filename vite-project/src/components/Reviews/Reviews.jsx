import React from 'react';
import "./Reviews.scss";

const Reviews = () => {
    return (
        <section className="reviews">
            <h2 className="reviews_title">Наши игроки о нас</h2>

            <div className="reviews_card">
                <div className="reviews_left">
                    <div className="reviews_quote">«Лучший клуб в городе!»</div>
                    <div className="reviews_author">— Алексей</div>
                </div>
                <div className="reviews_right">
                    <p className="reviews_text">
                        Играю тут уже третий месяц — ни разу не разочаровался. ПК мощные, пинг
                        низкий, а атмосфера просто огонь. Особенно нравится, что по ночам нет
                        толп, можно спокойно тренироваться.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Reviews;