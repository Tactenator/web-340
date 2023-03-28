import { Team } from './team.js'; 

const teams = [
    new Team ('The Burg Snurglers', 'Soda Popinski', '24'), 
    new Team ('Bob BlaBlas Bombadiers', 'Tobias Funke', '50'), 
    new Team ('The Mighty Nein', 'Frumpkin the Cat', '8'), 
    new Team ('Vox Machina', 'Trinket the Bear', '7'), 
    new Team ('Bells Hells', 'Mister the Ape', '9')
]

const getTeams = () => {
    return teams; 
}

export const getTeam = (name) => {
    return teams.find(name)
}

const displayTeam = (team) => {
    return `Name: ${team.name}`
}