import { ships, tags } from '../AppState'
import { logs } from '../AppState'
import { Log } from '../models/Log';

function LogForm() {

  const addLog = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Log added');

    const form = e.target as HTMLFormElement;
    const formData = {
      crewMember: (form.crewMember as HTMLInputElement).value,
      date: (form.date as HTMLInputElement).value,
      summary: (form.summary as HTMLTextAreaElement).value,
      tag: (form.tag as HTMLSelectElement).value,
      ship: parseInt((form.shipId as HTMLSelectElement).value)
    }

    const log = new Log(~~(Math.random() * 1000), formData.ship, formData.crewMember, formData.date, formData.summary, formData.tag);

    console.log(log);

    logs.push(log); // This is a temporary solution, we will replace this with a state management system later, It is not recommended to mutate the state directly like this due to performance issues and reactivity issues

    form.reset();
  }


  return (
    <form className='card' onSubmit={addLog}>
      <div className="card-body">
        <input className='form-control' type='text' placeholder='Crew Member' name="crewMember" />
        <input className='form-control' type='text' placeholder='Star Date' name="date" />
        <textarea className='form-control' rows={8} name="summary"></textarea>
        <select className='form-control' name="tag">
          {tags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
        <select className='form-control' name="shipId">
          {ships.map(ship => (
            <option key={ship.id} value={ship.id}>{ship.name}</option>
          ))}
        </select>
        <button className='my-3' type='submit'>Add Log</button>
      </div>
    </form>
  )
}

export default LogForm