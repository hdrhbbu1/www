import leftPad from 'left-pad'

export function toAbsolute(host, slug) {
  if (host.charAt(host.length - 1) === '/') {
    host = host.slice(0, -1)
  }

  if (slug.charAt(0) !== '/') {
    slug = '/' + slug
  }

  return host + slug
}

export const toMediaURL = (base, { archiveId }) =>
  ({ filename }) => [base, archiveId, filename].join('/')

const format = i => leftPad(i, 2, '0')

export function hhmmss(input) {
  const time = Number(input)
  const minutes = Math.floor(time / 60)
  const seconds = Math.round(time - minutes * 60, 2)
  const hours = Math.floor(time / 3600)

  return [format(hours), format(minutes), format(seconds)].join(':')
}
