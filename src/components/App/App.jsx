import React from 'react'
import { Provider } from 'mobx-react'
import Router from '../../router/router'
import styled from 'styled-components'
import { createBrowserHistory, History } from 'history'
import { createStores } from '../../stores/createStore'
import UserModel from '../../models/UserModel'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const history = createBrowserHistory()
const defautlUser = UserModel.create({
  name: 'Default Name'
})
const stores = createStores(history, defautlUser)

const App = () => (
  <Provider {...stores}>
    <Container>
      <Router history={history} />
    </Container>
  </Provider>
)

export default App
