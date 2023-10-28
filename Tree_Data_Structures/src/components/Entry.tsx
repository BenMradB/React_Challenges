import React, { useState } from "react";
import {
  VscFileCode,
  VscFolder,
  VscTriangleRight,
  VscTriangleDown,
} from "react-icons/vsc";
import { SiFiles } from "react-icons/si";
import { FaFileSignature } from "react-icons/fa6";
type EntryType = {
  name: string;
  children?: [];
};

const Entry = ({
  entry,
  indentationLevel,
}: {
  entry: EntryType;
  indentationLevel: number;
}) => {
  const [toggleExpanded, setToggleExpanded] = useState(false);

  return (
    <div
      className={`entryContainer`}
      style={{
        paddingLeft: `${indentationLevel * 10}px`,
        marginBottom: "10px",
      }}
    >
      {toggleExpanded && (
        <span
          style={{
            position: "absolute",
            left: `${(indentationLevel + 0.6999) * 10}px`,
            height: "calc(100% - 30px)",
            top: "30px",
            width: "1px",
            backgroundColor: " rgba(128, 128, 128, 0.432)",
          }}
        ></span>
      )}
      <div
        className="entryHeader"
        onClick={() => entry.children && setToggleExpanded((curr) => !curr)}
      >
        <div className="iconsContainer">
          {entry.children ? (
            <>
              {toggleExpanded ? <VscTriangleDown /> : <VscTriangleRight />}
              <SiFiles />
            </>
          ) : (
            <FaFileSignature />
          )}
        </div>
        <p>{entry.name}</p>
      </div>
      {toggleExpanded &&
        entry.children?.map((entry, key) => (
          <Entry
            key={key}
            entry={entry}
            indentationLevel={indentationLevel + 1}
          />
        ))}
    </div>
  );
};

export default Entry;
