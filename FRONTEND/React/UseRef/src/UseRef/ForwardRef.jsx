// App.jsx
import React, { forwardRef, useRef, useId } from "react";

/* ---------------------------------------------------------------------------
 ✅ Component: ForwardRefs (Used in both versions)
---------------------------------------------------------------------------- */
export const ForwardRefs = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username.current.value);
    console.log("Password:", password.current.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* Choose one of the below based on React version */}

      {/* 🧪 React <= 18 */}
      {/* <BeforeReact19Input label="Username" ref={username} />
      <BeforeReact19Input label="Password" ref={password} /> */}

      {/* 🧪 React 19+ */}
      <AfterReact19Input label="Username" ref={username} />
      <AfterReact19Input label="Password" ref={password} />

      <button type="submit">Submit</button>
    </form>
  );
};

/* ---------------------------------------------------------------------------
 🧠 Before React 19 (React <= 18) — Requires forwardRef
---------------------------------------------------------------------------- */
// Uncomment if using React <=18
/*
const BeforeReact19Input = forwardRef((props, ref) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input id={id} type="text" ref={ref} />
    </div>
  );
});
*/

/* ---------------------------------------------------------------------------
 🚀 After React 19 — ref can be passed directly like a prop (No forwardRef)
---------------------------------------------------------------------------- */
// Comment this out if using React <=18
const AfterReact19Input = (props) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input id={id} type="text" ref={props.ref} />
    </div>
  );
};
