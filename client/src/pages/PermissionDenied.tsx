import React from "react";
import Error from "./Auth/Error";

const PermissionDenied = () => {

  return (
    <Error
      title="Permission Denied"
      heading="Permission Denied"
      subtitle={`You either tried some shady route or you came here by mistake.
    Whichever it is, try using the navigation`}
      imageUrl="/images/undraw_safe_bnk7.svg"
    />
  );
};

export default PermissionDenied;
