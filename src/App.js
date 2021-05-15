import React from 'react'
import { Provider } from 'react-redux'
import Jugadores from './components/Jugadores';
import store from './store';
import EquipoSeleccionado from './components/EquipoSeleccionado'

import "../src/styles/styles.scss"


const App = () => (
<Provider store={store}>
    <main>
      <h1>LET'S PLAY FOOTBALL!</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
)


export default App;
