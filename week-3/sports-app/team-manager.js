import { Team } from './team.js'; 

const teams = [
    new Team ('The Burg Snurglers', 'Soda Popinski', '24'), 
    new Team ('Bob BlaBlas Bombadiers', 'Tobias Funke', '50'), 
    new Team ('The Mighty Nein', 'Frumpkin the Cat', '8'), 
    new Team ('Vox Machina', 'Trinket the Bear', '7'), 
    new Team ('Bells Hells', 'Mister the Ape', '9')
]

export const getTeams = () => {
    const message = '-- DISPLAYING TEAMS --'
    let teamDisplay = '' 
    teams.forEach(team => {
        teamDisplay += `
Name: ${team.name}
Mascot: ${team.mascot}
Player Count: ${team.playerCount}
        `
    })
    return `${message} ${teamDisplay}`
}

export const getTeam = (e) => {
    const findTeam = teams.find(item => item.name === e)
    return `-- DISPLAYING A SINGLE TEAM --
Name: ${findTeam.name}
Mascot: ${findTeam.mascot}
Player Count: ${findTeam.playerCount}`
}

export const displayTeam = ({name, mascot, count}) => {
    return `-- DISPLAYING A SINGLE TEAM -- \n
            Name: ${name} \n
            Mascot: ${mascot} \n
            Player Count: ${count}
           `
}