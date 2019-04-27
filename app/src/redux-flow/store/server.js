import configureStore from './index'

export default (req) => {
  const { initialStore } = req
  const store = configureStore({
    initialState: {
      ...initialStore
    }
  })

  return store
}
