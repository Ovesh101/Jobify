import React from 'react';

// Define the FormRowSelect component
const FormRowSelect = ({ name, labelText, list, defaultValue = '', onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      {defaultValue === 'Pending' ? (
        <div className="form-text">Pending</div>
      ) : (
        <select
          name={name}
          id={name}
          className="form-select"
          defaultValue={defaultValue}
          onChange={onChange}
        >
          {list.map((itemValue) => (
            <option key={itemValue} value={itemValue}>
              {itemValue}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default FormRowSelect;
