import React from "react";
import { PageOne } from "../Home/page-one";
import { PageTwo } from "../Home/page-two";
import { PageThree } from "../Home/page-three";
import { PageFour } from "../Home/page-four";
import { PageFive } from "../Home/page-five";

function Body() {
  return (
    <div>
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
    </div>
  );
}

export default Body;
