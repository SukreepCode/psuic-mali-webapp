import React from "react";
import Error from "./Auth/Error";

const NotFound = () => {
  return (
      <Error
        title = "Page not found"
        heading = "404: The page you are looking for isn’t here"
        subtitle = {`You either tried some shady route or you came here by mistake.
        Whichever it is, try using the navigation`}
        imageUrl = "/images/undraw_page_not_found_su7k.svg"
      />
  );
};

export default NotFound;
