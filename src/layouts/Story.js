import React, { useRef, useEffect, useState } from 'react';
import Button from '../common/button/Button';

const Story = () => {
    const [showEl, setShowEl] = useState('');

    const ref = useRef();
    const textAreaValue = `Hello Mr. Realtor, I'm a looking for a great place to live. Could you get in touch with me?`;

    useEffect(() => {

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: .5
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

    return (
        <div className="layout layout__story" ref={ref}>
            <p data-id='1' style={showEl === '1'? {opacity: '1'}: {}}>A long long time ago, there was an ordinary, likeable human, called xyz.</p>
            <p data-id='2' style={showEl === '2'? {opacity: '1'}: {}}>XYZ was getting disillusioned from the housing market, dreaming of an affordable, decent space he/she can finally call "home".</p>
            <p data-id='3' style={showEl === '3'? {opacity: '1'}: {}}>Neither did he/she feel comfortable in a tiny, single appartment with nobody around.</p>
            <p data-id='4' style={showEl === '4'? {opacity: '1'}: {}}>Nor in a bigger, shared one, where different living standards kept clashing.</p>
            <p data-id='5' style={showEl === '5'? {opacity: '1'}: {}}>So he/she decided to find a solution which might mix the best of both worlds. </p>
            <p data-id='6' style={showEl === '6'? {opacity: '1'}: {}}>He/she finds this website and wants to seek help. She starts her email like this:</p>
            <div data-id='7' style={showEl === '7'? {opacity: '1'}: {}}>
                <textarea rows="4" cols="100" defaultValue={textAreaValue} />
                {/* <div> */}
                    <Button text="Send this letter" action="send" color="copper"/>
                    <Button text="Burn it and write again" action="delete" color="grey"/>
                {/* </div> */}
            </div>
            <p data-id='8' style={showEl === '8'? {opacity: '1'}: {}}>He/she clicks send and exhales deeply. He/she is excited how it will go.</p>
        </div>
    );
};

export default Story;