import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const { type, placeholder, field } = props;

  return (
    <>
      <label htmlFor={field.name}>{field.name}</label>
      <input
        id={field.name}
        type={type}
        placeholder={placeholder}
        {...props}
        {...field}

        // name={field.name}
        // value={field.value}
        // onChange={field.onChange}
        // onBlur={field.onBlur}
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
Input.defaultProps = {
  type: "text",
  placeholder: "",
};

export default Input;
