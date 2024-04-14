import React from "react";

const sortValues = [
  { value: "min-date", title: "Earlier first" },
  { value: "max-date", title: "Later first" },
  { value: "completed-first", title: "Completed first" },
  { value: "pending-first", title: "Pending first" },
];

const Dropdown = ({ sortedBy, setSortedBy }) => {
  return (
    <div className="flex children-styles">
      <select
        className="ml-auto inputStyles"
        value={sortedBy}
        onChange={({ target }) => setSortedBy(target.value)}
      >
        <option value="" disabled>
          Sort by
        </option>
        {sortValues.map((val) => (
          <option
            key={val.value}
            value={val.value}
            className="bg-slate-100"
          >
            {val.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
