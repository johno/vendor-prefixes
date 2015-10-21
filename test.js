import test from 'ava'
import vendorPrefixes from './'

const prefixes = [
  '-ms-',
  'mso-',
  '-moz-',
  '-o-',
  '-xv-',
  '-atsc-',
  '-wap-',
  '-khtml-',
  '-webkit-',
  'prince-',
  '-ah-',
  '-hp-',
  '-ro-',
  '-rim-',
  '-tc-'
]

test('returns an array of all prefixes', t => {
  t.plan(1)

  t.same(vendorPrefixes(), prefixes)
})
