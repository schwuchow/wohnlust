import React from 'react';
import Button from '../common/button/Button';

const Story = () => {
    return (
        <div className="story">
            A long long time ago, there was an ordinary, likeable human, called xyz. <br/>
            XYZ was getting disillusioned from the housing market, dreaming of an affordable, decent space he/she can finally call "home". <br/>
            Neither did he/she feel comfortable in a tiny, single appartment with nobody around. <br/>
            Nor in a bigger, shared one, where different living standards kept clashing.<br/>
            So he/she decided to find a solution which might mix the best of both worlds. <br/>
            <p>He/she finds this website and wants to seek help. She starts her email like this:</p>
            <p>Hello Mr. Realtor, I'm a looking for a great place to live. Could you get in touch with me?</p>
            <Button action="Send this letter" />
            <p>Tear it up and write it again.</p>
            He/she clicks send and exhales deeply. He/she is excited how it will go.
        </div>
    );
};

export default Story;