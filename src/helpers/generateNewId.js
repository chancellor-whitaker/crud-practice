import { generateRandomString } from "./generateRandomString";
import { primaryKey } from "../constants/primaryKey";

export const generateNewId = (
  rowData = [],
  key = primaryKey,
  generator = generateRandomString
) => {
  const existingIds = new Set(rowData.map((row) => row[key]));

  let newId = generator();

  while (existingIds.has(newId)) newId = generator();

  return newId;
};
