import React, { useEffect, useState } from "react";
import Error from "./Error";

const Exception = (props: any) => {

  const [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    if (props.location.state?.message) {
      setSubtitle(props.location.state?.message);
    } else {
      setSubtitle("Throw Exception");
    }
  }, []);

  return (
    <Error
      title="Exception"
      heading="Exception"
      subtitle={subtitle}
      imageUrl="/images/undraw_fixing_bugs_w7gi.svg"
    />
  );
};

export default Exception;
