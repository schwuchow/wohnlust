import React, { useRef, useEffect, useState } from 'react';
import Button from '../common/button/Button';

const Story = () => {
    const [showEl, setShowEl] = useState('');
    const [textareaValue, setTextAreaValue] = useState(`Hello Mr. Realtor, I'm a looking for a great place to live. Could you get in touch with me?`);

    const storyRef = useRef();

    useEffect(() => {

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        };

        const observer = new IntersectionObserver(handleObserve, options);

        function handleObserve(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setShowEl(entry.target.dataset.id);
                }
            });
        }

        if (storyRef.current) {
            const childrenNodes = storyRef.current.childNodes;

            childrenNodes.forEach(nodeToObserve => {
                observer.observe(nodeToObserve);
            })
        }
    }, [storyRef]);

    const renderStoryItems = () => {
        const storyItems = [
            {text: 'A long long time ago, there was an ordinary, likeable human, called XYZ.'},
            {text: 'XYZ was getting disillusioned from the housing market, dreaming of an affordable, decent space XYZ can finally call "home".'},
            {text: 'Neither did XYZ feel comfortable in a tiny, single appartment with nobody around.'},
            {text: 'Nor in a bigger, shared one, where different living standards kept clashing.'},
            {text: 'So XYZ decided to find a solution which might mix the best of both worlds.'},
            {text: 'XYZ finds this website where XYZ wants to seek help. XYZ starts the email like this:'},
            {textArea: textareaValue},
            {text: 'XYZ clicks send and smiles. How will XYZ\'s story continue?'}
        ];

        return storyItems.map((item, i) => {
            if (item.textArea) return renderForm(item.textArea, i);
            else {
                return (
                    <p key={i}
                        data-id={i}
                        style={showEl === `${i}`? {opacity: '1'}: {}}>
                            {item.text}
                    </p>
                );
            }
        });
    }

    const deleteMsg = () => {
        setTextAreaValue(' ');
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    }

    const renderForm = (text, id) => {
        return (
            <div key={id} data-id={id} style={showEl === `${id}`? {opacity: '1'}: {}}>
                <textarea
                    rows="4"
                    cols="100"
                    value={text}
                    onChange={(e) => setTextAreaValue(e.target.value)}
                    placeholder="Type your message to the realtor"
                />
                <Button text="Great, just send it right away!" action="send" color="copper" message={text}/>
                <Button text="Crap, better do it again..." action="delete" color="grey" delete={deleteMsg}/>
            </div>
        );
    }

    return (
        <div className="layout layout__story" ref={storyRef}>
            {renderStoryItems()}
            <div className="scrollTop" onClick={scrollToTop}><i class="arrow-up"></i></div>
        </div>
    );
};

export default Story;