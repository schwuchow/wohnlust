import React, { useRef, useEffect } from 'react';
import Button from '../common/button/Button';

const Story = () => {
    const ref = useRef();

    useEffect(() => {

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver(handleObserve, options);

        function handleObserve(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(entry, 'yea');
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
            <p>A long long time ago, there was an ordinary, likeable human, called xyz.</p>
            <p>XYZ was getting disillusioned from the housing market, dreaming of an affordable, decent space he/she can finally call "home".</p>
            <p>Neither did he/she feel comfortable in a tiny, single appartment with nobody around.</p>
            <p>Nor in a bigger, shared one, where different living standards kept clashing.</p>
            <p>So he/she decided to find a solution which might mix the best of both worlds. </p>
            <p>He/she finds this website and wants to seek help. She starts her email like this:</p>
            <div>
                <textarea rows="4" cols="100" defaultValue="Hello Mr. Realtor,
                    I'm a looking for a great place to live.
                    Could you get in touch with me?" />
                {/* <div> */}
                    <Button action="Send this letter" />
                    <Button action="Burn it and write again" />
                {/* </div> */}
            </div>
            <p>He/she clicks send and exhales deeply. He/she is excited how it will go.</p>
        </div>
    );
};

export default Story;