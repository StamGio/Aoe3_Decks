import React from "react";

type CivilizationsListProps = {
  civilizations: string[];
};

const CivilizationsList: React.FC<CivilizationsListProps> = ({
  civilizations,
}) => {
  return (
    <ul>
      {civilizations.map((civilization, index) => (
        <li key={index}>{civilization}</li>
      ))}
    </ul>
  );
};

export default CivilizationsList;
