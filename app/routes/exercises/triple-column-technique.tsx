import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

function TripleColumnRow({ removeItem }: { removeItem: () => void }) {
  return (
    <div className="grid grid-cols-4 gap-2 py-2">
      <input type="text" className="input-bordered input w-full max-w-xs" />
      <input type="text" className="input-bordered input w-full max-w-xs" />
      <input type="text" className="input-bordered input w-full max-w-xs" />
      <button
        className="btn-outline btn-accent btn w-12"
        onClick={() => removeItem()}
      >
        <FontAwesomeIcon icon={faTrash} className="h-4" />
      </button>
    </div>
  );
}

export let handle = {
  i18n: "home",
};

export default function TripleColumnTechnique() {
  let { t } = useTranslation("home");
  const [rows, setRows] = React.useState([{ id: uuidv4() }]);

  function addRow() {
    setRows((prevVal) => [...prevVal, { id: uuidv4() }]);
  }

  function removeRow(index: number) {
    setRows((prevVal) => {
      const newArray = [...prevVal];
      newArray.splice(index, 1);

      if (newArray.length === 0) {
        return [{ id: uuidv4() }];
      }

      return newArray;
    });
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-2">
        <p>{t("made", "Automatic Thought (Self-Criticism)")}</p>
        <p>{t("kure")}</p>
        <p>Rational Response (Self-Defense)</p>
      </div>
      {rows.map(({ id }, index) => (
        <TripleColumnRow
          key={id}
          removeItem={() => {
            removeRow(index);
          }}
        />
      ))}
      <button
        className="btn-outline btn-secondary btn-sm btn gap-2"
        onClick={() => addRow()}
      >
        <FontAwesomeIcon icon={faPlus} className="h-4" /> Add Row
      </button>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}
