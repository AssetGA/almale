"use client";

import React from "react";

const TextField = ({
  type,
  name,
  value,
  onChange,
  className,
  placeholder,
  error,
  required,
}) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <div className="input-group">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className={className}
        placeholder={placeholder}
        required={required}
      />
      {error ? (
        <div className="h-5 text-red text-sm">{error}</div>
      ) : (
        <div className="h-5"> </div>
      )}
    </div>
  );
};

export default TextField;
