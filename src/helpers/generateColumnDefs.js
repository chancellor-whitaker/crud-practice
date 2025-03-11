import { primaryKey } from "../constants/primaryKey";

export const generateColumnDefs = (rowData, key = primaryKey) =>
  [
    ...new Set(
      [rowData]
        .filter((element) => element)
        .flat()
        .map((row) => Object.keys(row))
        .flat()
    ),
  ].map((field) => ({ editable: field !== key, field }));
