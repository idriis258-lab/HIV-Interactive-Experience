export function formatTemplate(
  template: string,
  values?: Record<string, string | number>,
): string {
  if (!values) return template
  return template.replace(/\{(\w+)\}/g, (match, key: string) => {
    const value = values[key]
    return value === undefined ? match : String(value)
  })
}
