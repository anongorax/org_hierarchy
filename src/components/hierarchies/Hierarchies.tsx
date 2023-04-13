import React from "react";

export interface HierarchyProps {
  label: string;
}

const Hierarchy = (props: HierarchyProps) => {
  return <button>{props.label}</button>;
};

export default Hierarchy;