import { createReduxStore } from '../config/createReduxStore'

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
