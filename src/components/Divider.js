import React from "react";

export default function Spacer() {
  return (
    <>
      <div></div>
      <style jsx>{`
        div {
          grid-column: 2/7;
          border-top: 1.6px solid rgba(0, 0, 0, 0.7);
          margin: 40px 0;
        }

        @media only screen and (max-width: 700px) {
          div {
            margin: 15px 0;
            grid-column: 1 /7;
          }
        }
      `}</style>
    </>
  );
}
