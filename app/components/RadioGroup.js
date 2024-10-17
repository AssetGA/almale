const RadioGroup = ({ options, name, selectedOption, onChange }) => {
  return (
    <div>
      {options.map((option) => (
        <label
          key={option.value}
          className="inline-flex items-center mb-2 border border-gray py-2 px-4 rounded-md mr-2"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={(e) => onChange(e.target.value)}
            className="form-radio h-4 w-4"
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
