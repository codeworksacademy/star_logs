import { Ship } from '../models/Ship'
import LogStats from './LogStats'

const stylesheet = {
  ship: {
    border: '1px solid black',
    padding: '10px',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}


function ShipComponent({ ship, onSelect }: { ship: Ship, onSelect: (ship: Ship) => void }) {
  return (
    <div key={ship.id} style={stylesheet.ship}>
      <img src={ship.picture} alt={ship.name} width={100} />
      <div>
        <p>
          {ship.name} ({ship.registry}) - {ship.model}
        </p>
        <LogStats ship={ship} />

      </div>

      <button onClick={() => onSelect(ship)}>Set Active</button>
    </div>
  )
}

export default ShipComponent