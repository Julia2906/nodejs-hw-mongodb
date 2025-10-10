const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;

  const isContactType = (contactType) =>
    ['home', 'personal', 'work'].includes(contactType);

  if (isContactType(contactType)) return contactType;
};

const parseIsFavourite = (value) => {
  const isString = typeof value === 'string';
  if (!isString) return;

  if (value === 'true') return true;
  if (value === 'false') return false;

  return;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
