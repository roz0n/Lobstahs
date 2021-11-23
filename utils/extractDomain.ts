// RegExp credit: https://stackoverflow.com/a/41702438

export function extractDomain(domain: string): string {
  const matches = domain.match(/^(?:https?:)?(?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im);
  return matches && matches.length ? matches[1] : "";
}
