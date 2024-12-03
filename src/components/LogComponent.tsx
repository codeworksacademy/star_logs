import { Log } from '../models/Log'
import './LogComponent.css'

const stylesheet = {
  log: {
    border: '1px solid black',
    padding: '10px',
    margin: '10px'
  }
}

function LogComponent({ log }: { log: Log }) {
  return (
    <div key={log.id} style={stylesheet.log}>
      <div className='d-flex justify-content-between align-items-center'>
        <h2>{log.title}</h2>
        <p className={log.tag.toLowerCase() + ' log'}><strong>Tag:</strong> {log.tag}</p>
      </div>
      <p>{log.summary} - {log.crewMember}</p>
    </div>
  )
}

export default LogComponent