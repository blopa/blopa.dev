import React, { useEffect } from "react"

const NotFoundPage = () => {
    useEffect(() => {
        window.location.replace(
            'https://github.com/blopa/blopa.dev'
        );
    }, []);

    return (<p></p>)
}

export default NotFoundPage;
