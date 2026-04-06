import React from "react";

interface ArtifactDetailsInfoRowProps {
  label: string;
  value: string;
}

const ArtifactDetailsInfoRow: React.FC<ArtifactDetailsInfoRowProps> = ({
  label,
  value,
}) => {
  return (
    <div className="grid md:grid-cols-[150px_1fr] gap-1 md:gap-4 w-full artifact-info-row">
      <span className="text-grey-medium uppercase text-sm ">{label}</span>
      <span className="text-white">{value}</span>
    </div>
  );
};
export default ArtifactDetailsInfoRow;
