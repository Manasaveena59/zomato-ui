import React from "react";


class PageNotFoundComponent extends React.Component {
    render() {
        const params = window.location;
    return (
        <div className="carousel-wrapper">
           <h1>404 - Page Not Found</h1>
           <p>url:{params.href}</p>
           <p>query Parameters: {params.search}</p>
           <p>host: {params.host}</p>
           <p>pathname: {params.pathname}</p>
           <h3>something went please try again</h3>
           </div>

    );
}
}
 export default PageNotFoundComponent;