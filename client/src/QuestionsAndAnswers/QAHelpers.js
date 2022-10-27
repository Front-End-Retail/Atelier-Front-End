export const SortbyHelpfulness = (dataArray, sortingProperty) => {
  dataArray.sort((a, b) => {
    return a.sortingProperty - b.sortingProperty
  })

  return dataArray;
}