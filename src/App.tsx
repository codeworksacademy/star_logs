import './App.css'
import { Ship } from './models/Ship'
import ShipComponent from './components/Ship'
import LogComponent from './components/LogComponent'
import { useState } from 'react'
import { ships, logs } from './AppState'
import LogForm from './components/LogForm'
import Modal from './components/Modal'

function App() {

  const [ship, setActiveShip] = useState<Ship>()
  const filteredLogs = logs.filter(log => log.shipId === ship?.id)

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Starfleet Logs</h1>
      {
        ships.map(ship => (
          <ShipComponent key={ship.id} ship={ship} onSelect={setActiveShip} />
        ))
      }

      {
        filteredLogs.map(log => (
          <LogComponent key={log.id} log={log} />
        ))
      }

      <button className='fab' data-bs-toggle="modal" data-bs-target="#logform">Add Log</button>

      <Modal id='logform' title='Add Log'>
        <LogForm />
      </Modal>

    </div>
  )
}




export default App
