import { generateRandomString } from "./generateRandomString";
import { primaryKey } from "../constants/primaryKey";
import { generateNewId } from "./generateNewId";

export const generateNewRow = (
  rowData = [],
  columnDefs = [],
  key = primaryKey,
  generator = generateRandomString
) => {
  const newId = generateNewId(rowData, key, generator);

  const fields = columnDefs
    .map(({ field }) => field)
    .filter((field) => field !== key);

  return Object.fromEntries([
    [key, newId],
    ...fields.map((field) => [field, null]),
  ]);
};
