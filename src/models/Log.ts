
export class Log {
  id: number;
  shipId: number;
  crewMember: string;
  date: string;
  summary: string;
  tag: string;

  constructor(id: number, shipId: number, crewMember: string, date: string, summary: string, tag: string) {
    this.id = id;
    this.shipId = shipId;
    this.crewMember = crewMember;
    this.date = date;
    this.summary = summary;
    this.tag = tag;
  }

  get title(): string {
    return `${this.crewMember.split(' ')[0]}'s Log, star date ${this.date}`;
  }

}
