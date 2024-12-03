import { Log } from './models/Log'
import { Ship } from './models/Ship'

export const ships = [
  new Ship(1, 'USS Enterprise', 'Constitution', 'NCC-1701', 'https://i.imgur.com/KcVFWbl.png'),
  new Ship(2, 'USS Reliant', 'Miranda', 'NCC-1864', 'https://i.imgur.com/Muyh8zC.png')
]
export const tags = ['Mission', 'Combat', 'Discovery']

export const logs = [
  new Log(1, 1, 'Captain James T. Kirk', '1513.1', 'We have been ordered to investigate a distress call from the planet Talos IV.', 'Mission'),
  new Log(2, 1, 'Captain James T. Kirk', '1513.4', 'We have been attacked by a Romulan Bird of Prey.', 'Combat'),
  new Log(3, 2, 'Captain Clark Terrell', '2285.5', 'We have discovered the Botany Bay adrift in space.', 'Discovery'),
  new Log(4, 2, 'Captain Clark Terrell', '2285.6', 'We have been ordered to investigate the planet Ceti Alpha VI.', 'Mission'),
  new Log(5, 2, 'Captain Clark Terrell', '2285.7', 'We have been attacked by Khan Noonien Singh.', 'Combat'),
  new Log(6, 2, 'Captain Clark Terrell', '2285.8', 'We have been ordered to investigate the planet Genesis.', 'Mission'),
  new Log(7, 2, 'Captain Clark Terrell', '2285.9', 'We have been attacked by Klingon warships.', 'Combat'),
  new Log(8, 2, 'Captain Clark Terrell', '2285.10', 'We have been ordered to escort the USS Enterprise to the Genesis Planet.', 'Mission'),
  new Log(9, 2, 'Captain Clark Terrell', '2285.11', 'We have been attacked by Klingon warships.', 'Combat'),
  new Log(10, 2, 'Captain Clark Terrell', '2285.12', 'We have been ordered to investigate the planet Genesis.', 'Mission'),
  new Log(11, 2, 'Captain Clark Terrell', '2285.13', 'We have been attacked by Khan Noonien Singh.', 'Combat'),
  new Log(12, 2, 'Captain Clark Terrell', '2285.14', 'We have been ordered to investigate the planet Genesis.', 'Mission'),
  new Log(13, 2, 'Captain Clark Terrell', '2285.15', 'We have been attacked by Klingon warships.', 'Combat'),
  new Log(14, 2, 'Captain Clark Terrell', '2285.16', 'We have been ordered to escort the USS Enterprise to the Genesis Planet.', 'Mission'),
  new Log(15, 2, 'Captain Clark Terrell', '2285.17', 'We have been attacked by Klingon warships.', 'Combat'),
  new Log(16, 2, 'Captain Clark Terrell', '2285.18', 'We have been ordered to investigate the planet Genesis.', 'Mission'),
  new Log(17, 2, 'Captain Clark Terrell', '2285.19', 'We have been attacked by Khan Noonien Singh.', 'Combat'),
]