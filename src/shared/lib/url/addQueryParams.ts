export function getQueryParams(
  params: OptionalRecord<string, string | number>
) {
  const searchParams = new URLSearchParams(window.location.search)

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.set(key, value.toString())
    }
  })

  return `?${searchParams}`
}

export function addQueryParams(
  params: OptionalRecord<string, string | number>
) {
  window.history.pushState(null, '', getQueryParams(params))
}
