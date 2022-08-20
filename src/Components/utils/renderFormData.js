export function renderFormData(match, items, headers) {
  const item = match ? items.find(m => m._id === match) : null;
  if (item) {
    const keys = Object.keys(item);
    keys.map(key => {
      if (!headers.includes(key)) delete item[key];
    });
  }

  return item;
}
