/* eslint-disable react/prop-types */
import React from "react";

const FormInput = React.forwardRef(function FormInput(
    {
        onMouseEnter,
        onMouseLeave,
        inputLabel,
        labelFor,
        inputType = "text",
        inputId,
        inputName,
        placeholderText,
        ariaLabelName,
        onChange,
        className,
        inputGroupClassNames,
        showPasswordRequirement,
        labelClasses,
    },
    ref
) {
    return (
        <div className={inputGroupClassNames}>
            {inputLabel && (
                <label
                    className={`block text-[#101928] text-sm font-medium ${labelClasses}`}
                    htmlFor={labelFor}
                >
                    {inputLabel}
                </label>
            )}
            <input
                onMouseEnter={onMouseEnter}
                className={className}
                ref={ref}
                type={inputType}
                id={inputId}
                name={inputName}
                placeholder={placeholderText}
                aria-label={ariaLabelName}
                onChange={onChange}
                onMouseLeave={onMouseLeave}
                required
            />
            {inputType === "password" && showPasswordRequirement && (
                <p className="text-sm text-[#667185] mt-2">
                    minimum 8 charaters and special character
                </p>
            )}
        </div>
    );
});

export default FormInput;
