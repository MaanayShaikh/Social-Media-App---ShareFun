import React from "react";

const TextInput = React.forwardRef(
  (
    { type, placeholder, styles, label, labelStyle, register, name, error },
    ref
  ) => {
    return (
      <div className="w-full flex flex-col mt-2">
        {label && (
          <label
            htmlFor={name}
            className={`text-ascent-2 text-sm mb-2 ${labelStyle}`}
          >
            {label}
          </label>
        )}

        <div>
          <input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            className={`bg-secondary rounded border border-[#66666690] outline-none text-sm text-ascent-1 px-4 py-3 placeholder:text-[#666] ${styles}`}
            {...register}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
          />
        </div>
        {error && (
          <span
            id={`${name}-error`}
            className="text-xs text-[#f64949fe] mt-0.5"
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

export default TextInput;
