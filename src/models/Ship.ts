export class Ship {
  id: number
  name: string
  model: string
  registry: string
  picture: string

  constructor(id: number, name: string, model: string, registry: string, picture: string) {
    this.id = id
    this.name = name
    this.model = model
    this.registry = registry
    this.picture = picture
  }
}
