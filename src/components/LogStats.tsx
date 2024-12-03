import { Ship } from '../models/Ship';
import { logs } from '../AppState';

function LogStats({ ship }: { ship: Ship }) {

  const logCounts = logs.reduce((acc, log) => {
    if (log.shipId === ship.id) {
      if (acc[log.tag]) {
        acc[log.tag]++;
      } else {
        acc[log.tag] = 1;
      }
    }
    return acc;
  }, {} as { [tag: string]: number });

  return (
    <div>
      <div className='d-flex gap-3'>
        {Object.entries(logCounts).map(([tag, count]) => (
          <span key={tag}>{tag}: {count}</span>
        ))}
      </div>
    </div>
  );
}

export default LogStats;