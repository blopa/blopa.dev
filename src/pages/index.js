import React, { useEffect } from "react"

const IndexPage = () => {
    useEffect(() => {
        window.location.replace(
            'https://github.com/blopa/blopa.dev'
        );
    }, []);

    return (<p></p>)
}

export default IndexPage;
