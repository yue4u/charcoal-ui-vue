export function createDefer() {
  const defers: (() => void)[] = []

  const defer = (deferFn: () => void) => {
    defers.push(deferFn)
  }

  const dispose = () => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    while (true) {
      const deferFn = defers.pop()
      if (deferFn == null) {
        return
      }
      try {
        deferFn()
      } catch (err: unknown) {
        // eslint-disable-next-line no-console
        console.error('Uncaught defer error:', err)
      }
    }
  }

  return {
    defer,
    dispose,
  } as const
}
