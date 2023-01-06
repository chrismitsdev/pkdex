export const paginate = (array, page = 1, showPerPage = 12) => {
  const offset = showPerPage * (page - 1)
  const totalPages = Math.ceil(array.length / showPerPage)
  const paginatedItems = array.slice(offset, showPerPage * page)

  return {
    previousPage: page - 1 ? page - 1 : null,
    nextPage: (totalPages > page) ? page + 1 : null,
    total: array.length,
    totalPages: totalPages,
    array: paginatedItems
  }
}