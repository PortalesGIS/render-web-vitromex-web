export const sortArrayJsonHelpers = (json = []) => {
  let jsonSort = []
  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };
  jsonSort = json.sort( compare );
  return jsonSort;
};
