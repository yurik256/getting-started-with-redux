import React from "react";

const FilterLink = props => {
  const { filter, currentFilter, children, onClick } = props;
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </a>
  );
};

export default FilterLink;
