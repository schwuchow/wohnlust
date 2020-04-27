import React, { useRef, useEffect, useState } from 'react';
import Button from '../common/button/Button';

const Story = () => {
    const [showEl, setShowEl] = useState('');

    const ref = useRef();

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

        if (ref.current) {
            const childrenNodes = ref.current.childNodes;

            childrenNodes.forEach(nodeToObserve => {
                observer.observe(nodeToObserve);
            })
        }
    }, [ref]);

    const renderStoryItems = () => {
        const storyItems = [
            {text: 'A long long time ago, there was an ordinary, likeable human, called XYZ.'},
            {text: 'XYZ was getting disillusioned from the housing market, dreaming of an affordable, decent space XYZ can finally call "home".'},
            {text: 'Neither did XYZ feel comfortable in a tiny, single appartment with nobody around.'},
            {text: 'Nor in a bigger, shared one, where different living standards kept clashing.'},
            {text: 'So XYZ decided to find a solution which might mix the best of both worlds.'},
            {text: 'XYZ finds this website where XYZ wants to seek help. XYZ starts the email like this:'},
            {textArea: `Hello Mr. Realtor, I'm a looking for a great place to live. Could you get in touch with me?`},
            {text: 'XYZ clicks send and looks pleased. How will the story continue?'}
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
        // TODO
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }

    const renderForm = (text, id) => {
        return (
            <div key={id} data-id={id} style={showEl === `${id}`? {opacity: '1'}: {}}>
                <textarea rows="4" cols="100" defaultValue={text} />
                <Button text="Great, just send it right away!" action="send" color="copper" message={text}/>
                <Button text="Crap, better do it again..." action="delete" color="grey" onClick={deleteMsg}/>
            </div>
        );
    }

    return (
        <div className="layout layout__story" ref={ref}>
            {renderStoryItems()}
            <div className="scrollTop" onClick={scrollToTop}><i class="arrow-up"></i></div>
        </div>
    );
};

export default Story;