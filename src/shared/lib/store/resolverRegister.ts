class ResolverManager {
  private resolvers = new Map<string, () => void>()

  set(callback: () => void) {
    const id = crypto.randomUUID()

    this.resolvers.set(id, callback)

    return id
  }

  get(id: string) {
    const resolver = this.resolvers.get(id)
    this.resolvers.delete(id)
    return resolver
  }
}

export const resolverManager = new ResolverManager()
