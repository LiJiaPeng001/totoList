import { createAuthority } from '@peeeng/utils/authority'

const maxAge = 1000 * 60 * 60 * 24 * 700000

export const useTake = createAuthority({
  localKey: 'peeeng-takes',
  maxAge,
})
