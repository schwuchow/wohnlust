import React from 'react';
import Button from '../common/button/Button';

const Story = () => {
    return (
        <div className="layout layout__story">
            <p>A long long time ago, there was an ordinary, likeable human, called xyz.</p>
            <p>XYZ was getting disillusioned from the housing market, dreaming of an affordable, decent space he/she can finally call "home".</p>
            <p>Neither did he/she feel comfortable in a tiny, single appartment with nobody around.</p>
            <p>Nor in a bigger, shared one, where different living standards kept clashing.</p>
            <p>So he/she decided to find a solution which might mix the best of both worlds. </p>
            <p>He/she finds this website and wants to seek help. She starts her email like this:</p>
            <textarea rows="4" cols="100">
                Hello Mr. Realtor,&#13;&#10;
                I'm a looking for a great place to live.
                Could you get in touch with me?
            </textarea><br/>
            <div>
                <Button action="Send this letter" />
                <Button action="Burn it and write again" />
            </div>
            <p>He/she clicks send and exhales deeply. He/she is excited how it will go.</p>
        </div>
    );
};

export default Story;