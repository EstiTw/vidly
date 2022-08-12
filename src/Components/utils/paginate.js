import _ from "lodash";

export function paginate(items, pageSize, pageNumber) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

//the primitve way without lodash:
// const indexOfLastItem = pageNumber * pageSize;
// const indexOfFirstItem = indexOfLastItem - pageSize;
// eturn items.slice(indexOfFirstItem, indexOfLastItem);
