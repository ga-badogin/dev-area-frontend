const resolvers = new Map<string, () => void>()

export const registerResolver = (callback: () => void) => {
  const id = crypto.randomUUID()

  resolvers.set(id, callback)

  return id
}

export const getResolver = (id: string) => {
  const resolver = resolvers.get(id)
  resolvers.delete(id)
  return resolver
}
