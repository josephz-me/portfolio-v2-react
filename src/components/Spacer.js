import React from "react";

export default function Spacer() {
  return (
    <>
      <div></div>
      <br />
      <style jsx>{`
        div {
          margin: 20px 0;
          grid-column: 1 /7;
        }

        @media only screen and (max-width: 700px) {
          div {
            margin: 10px 0;
            grid-column: 1 /7;
          }
        }
      `}</style>
    </>
  );
}
