export default function Input({
    label,
    labelFor,
    placeholder,
    type = "text",
    className,
    value,
    onChange,
    required = false,
    labelClassName = "",
    ...inputProps
  }) {
    const getIdFromLabel = (label) => {
      let id = label.toLowerCase().replace(" ", "-");
      return id;
    };
  
    const name = getIdFromLabel(labelFor || label);
  
    return (
      <div className="my-2">
        <label
          htmlFor={labelFor || label}
          className={`block capitalize font-medium mb-2 ${labelClassName}`}
        >
          {label}
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            id={name}
            className={`w-full border-[1px] px-6 py-2 border-gray-300 rounded-md outline-blue-500 ${className}`}
            placeholder={placeholder}
            required={required}
            {...inputProps}
          />
        </div>
      </div>
    );
  }
  