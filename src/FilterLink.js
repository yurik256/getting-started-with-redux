import React from "react";

export const FilterLink = props => {
  const { filter, currentFilter, children, onFilterClick } = props;
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onFilterClick(filter);
      }}
    >
      {children}
    </a>
  );
};
