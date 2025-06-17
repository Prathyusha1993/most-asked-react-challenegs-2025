import React, { useState } from "react";

function DynamicForm({ schema, handleSubmit }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  const renderField = (field) => {
    switch (field.type) {
      case "text":
      case "email":
      case "tel":
        return (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              required={field.required}
            />
          </div>
        );
      case "checkbox":
        return (
          <div key={field.name}>
            <label htmlFor={field.name}>
              {field.label}
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                checked={formData[field.name] || false}
                onChange={handleChange}
              />
            </label>
          </div>
        );
      case "select":
        return (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <select
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
            >
              <option value="">Select Option</option>
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      case "textarea":
        return (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <textarea
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
            />
          </div>
        );
      case "number":
        return (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              required={field.required}
            />
          </div>
        );
    default:
        return null;
    }
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {schema.fields.map((field) => renderField(field))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DynamicForm;
