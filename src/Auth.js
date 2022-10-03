import React from 'react';

const Auth = () => {
    let PARAMS = (new URL(document.location)).searchParams;
    let code = PARAMS.get("code")
    return (
        <div>
            { code }
        </div>
    );
};

export default Auth;