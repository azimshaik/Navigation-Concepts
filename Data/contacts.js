const NUM_CONTACTS = 10000;

const firstNames = [
  "Azim",
  "Abid",
  "Aleem",
  "Avinash",
  "Naveen",
  "Samrat",
  "Ameem",
  "Sasha",
  "John",
  "Peter",
  "Mike",
  "Doug",
  "Rose",
  "Lilly",
  "Bob"
];
const lastNames = [
  "Azim",
  "Abid",
  "Aleem",
  "Avinash",
  "Naveen",
  "Samrat",
  "Ameem",
  "Sasha",
  "John",
  "Peter",
  "Mike",
  "Doug",
  "Rose",
  "Lilly",
  "Bob"
];
const rand = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const generateName = () =>
  `${firstNames[rand(firstNames.length - 1)]} ${
    lastNames[rand(lastNames.length - 1)]
  } `;

const generatePhoneNumber = () =>
  `${rand(999, 100)}-${rand(999, 100)}-${rand(9999, 1000)}`;

const createContact = () => ({
  name: generateName(),
  phone: generatePhoneNumber()
});

//compare two names for alphabetizing
export const compareNames = (contact1, contact2) =>
  contact1.name > contact2.name;

//add keys to based on index
const addKeys = (val, key) => ({ key, ...val });

//create and array of length NUM_CONTACTS and alphabetically by name
export default Array.from({ length: NUM_CONTACTS }, createContact).map(addKeys);
