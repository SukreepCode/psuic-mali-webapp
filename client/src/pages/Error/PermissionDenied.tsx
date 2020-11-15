import React, { useEffect, useState } from "react";
import Error from "./Error";

const PermissionDenied = (props: any) => {

  const [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    if (props.location.state?.message) {
      setSubtitle(props.location.state?.message);
    } else {
      setSubtitle("You don't be allowed to access this page");
    }
  }, []);

  return (
    <Error
      title="Permission Denied"
      heading="Permission Denied"
      subtitle={subtitle}
      imageUrl="/images/undraw_safe_bnk7.svg"
    />
  );
};

export default PermissionDenied;
