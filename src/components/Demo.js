import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";

let selectedIds = [];
const RenderMembers = ({ fields, meta: { error, submitFailed } }) => {
  // console.log("props -------- ", props);
  const selectedRow = (isSelected, index) => {
    console.log("isSelected ", isSelected);
    if (isSelected) {
      !selectedIds.includes(index) && selectedIds.push(index);
    } else {
      selectedIds.includes(index) && selectedIds.pop(index);
    }
    console.log("selectedIds ", selectedIds);
  };

  const onSeletedRemoveClick = () => {
    selectedIds.forEach(id => {
      console.log("fields ", fields, id);
      fields.remove(id);
    });
  };

  const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  );
  return (
    <ul>
      <table>
        <thead>
          <tr>
            <th> </th>
            <th>
              <input type="checkbox" />
            </th>
            <th>Account Number</th>
            <th>ISIN</th>
            <th>Side</th>
            <th>Qty Type</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Client Reference</th>
          </tr>
        </thead>

        {fields.map((member, index) => (
          // <li key={index}>
          //   <button
          //     type="button"
          //     title="Remove Member"
          //     onClick={() => fields.remove(index)}
          //   />
          <tbody key={index}>
            <tr>
              <td>{index + 1}</td>
              <td>
                <input
                  type="checkbox"
                  onChange={e => selectedRow(e.target.checked, index)}
                />
              </td>
              <td>
                <select style={{ width: "100px" }}>
                  <option key="1" value="1">
                    1
                  </option>
                </select>
              </td>
              <td>
                <Field name={`${member}.isin`} component="input" type="text" />
              </td>
              <td>
                <select>
                  <option key="2" value="2">
                    2
                  </option>
                </select>
              </td>
              <td>
                <select>
                  <option key="3" value="3">
                    3
                  </option>
                </select>
              </td>
              <td>
                <input />
              </td>
              <td>
                <select>
                  <option key="2" value="2">
                    2
                  </option>
                </select>
              </td>
              <td>
                <input />
              </td>
            </tr>
          </tbody>
          // </li>
        ))}
      </table>
      <button type="button" onClick={() => fields.push({})}>
        Add Member
      </button>
      {submitFailed && error && <span>{error}</span>}
      <button type="button" onClick={onSeletedRemoveClick}>
        Remove Selected Orders
      </button>
    </ul>
  );
};

const DemoForm = props => {
  console.log("DemoForm ", props);
  const { handleSubmit, pristine, reset, submitting } = props;
  const selectedIds = [];
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="members" component={e => <RenderMembers {...e} />} />
      <div>
        <button type="submit" disabled={submitting}>
          Enter Selected Orders
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Form
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "demo", // a unique identifier for this form
  validate
})(DemoForm);
