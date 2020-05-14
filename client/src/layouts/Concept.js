import React from 'react';
import Card from '../common/card/Card';
import './layouts.scss';
import sofa from '../img/sofa.svg';
import crown from '../img/crown.svg';
import people from '../img/people.svg';

const Concept = () => {

    const getBuiltCards = () => {

        const cards = [];

        const card1 = {
            title: "Shared living space",
            description: "A huge living room with multiple leisure possibilities",
            picture: sofa
        };

        const card2 = {
            title: "Your own kingdom",
            description: "A smart built, sustainable single appartment with everything you need",
            picture: crown
        };

        const card3 = {
            title: "Community driven",
            description: "A new family to make acquaintance with",
            picture: people
        };

        cards.push(card1);
        cards.push(card2);
        cards.push(card3);

        return cards;
    }

    const renderCards = () => {

        const builtCards = getBuiltCards();

        return builtCards.map((card, i) => {
            return  <Card
                        key={i}
                        title={card.title}
                        description={card.description}
                        picture={card.picture}/>
        });
    }

    return (
        <div className="layout layout__concept">
            {renderCards()}
        </div>
    );
};

export default Concept;