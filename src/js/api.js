import {
    deleteById,
    getAll,
    saveForLater
} from "./db";

const base_url = 'https://api.football-data.org/v2/';
const token = 'd9597e3d5e424937a5050d5c9ff30314';
const id_liga = '2021';
const team_url = `${base_url}competitions/${id_liga}/teams`;
const standing_url = `${base_url}competitions/${id_liga}/standings?standingType=TOTAL`;
const match_url = `${base_url}competitions/${id_liga}/matches`;

const fetchApi = url => {
    return fetch(url, {
            method: "get",
            headers: {
                'X-Auth-Token': token
            }
        })
        .then(status)
        .then(json)
        .catch(error);
};

function status(response) {
    if (response.status !== 200) {
        console.log('Error :' + response.status);
        return Promise.reject(new Error(response.statusText));
    } else {
        return Promise.resolve(response);
    }
}

function json(response) {
    return response.json();
}

function error(error) {
    console.log('Error : ' + error);
}

function addListener(data) {
    const element = document.getElementById(data.id);
    element.addEventListener('click', () => {
        saveForLater(data)
        element.style.display = 'none'
    })
}

export default class api {
    static topScore() {
        const tbTopS = document.querySelector('#top-scorer');
        const preLoader = `<div class="progress">
                                <div class="indeterminate"></div>
                            </div>`;
        tbTopS.innerHTML = preLoader;
        fetchApi(base_url + 'competitions/PL/scorers')
            .then((data) => {
                const {
                    scorers
                } = data;
                let result = `<thead>
                            <tr>
                                <th>No</th>
                                <th>Player</th>
                                <th>Club</th>
                                <th>Gol</th>
                            </tr>
                        </thead>
                    
                        <tbody>
                    
                        </tbody>`;

                scorers.forEach((top, index) => {
                    // console.log(top);
                    result +=
                        `<tr>
                    <td>` + (index + 1) + `</td>
                    <td>` + (top['player']['name']) + `</td>
                    <td>` + (top['team']['name']) + `</td>
                    <td>` + (top['numberOfGoals']) + `</td>
                </tr>`;
                })
                tbTopS.innerHTML = result;
            })
    }

    static getStanding() {
        const tbStand = document.querySelector('#tb-standings');
        const preLoader = `<div class="progress">
                                <div class="indeterminate"></div>
                            </div>`;
        tbStand.innerHTML = preLoader;
        fetchApi(standing_url)
            .then((data) => {
                const {
                    standings: [{
                        table: clubs
                    }]
                } = data;
                let result = `<thead>
                            <tr>
                                <th>Position</th>
                                <th>Club</th>
                                <th>MP</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>Pts</th>
                            </tr>
                        </thead>
                    
                        <tbody>
                    
                        </tbody>`;

                clubs.forEach(items => {
                    result +=
                        `<tr>
                    <td>` + (items['position']) + `</td>
                    <td>` + (items['team']['name']) + `</td>
                    <td>` + (items['playedGames']) + `</td>
                    <td>` + (items['won']) + `</td>
                    <td>` + (items['draw']) + `</td>
                    <td>` + (items['lost']) + `</td>
                    <td>` + (items['goalsFor']) + `</td>
                    <td>` + (items['goalsAgainst']) + `</td>
                    <td>` + (items['goalDifference']) + `</td>
                    <td>` + (items['points']) + `</td>
                </tr>`;
                })
                tbStand.innerHTML = result;
            })
    }

    static getTeam() {
        const card = document.querySelector('#cards-team');
        const preLoader = `<div class="progress">
                                <div class="indeterminate"></div>
                            </div>`;
        card.innerHTML = preLoader;
        fetchApi(team_url)
            .then((data) => {
                const {
                    teams
                } = data;
                let result = '';

                teams.forEach((items) => {
                    result +=
                        `<div class="col s12 m4 l4">
                    <div class="card hoverable">
                        <div class="card-image">
                            <img src="` + (items.crestUrl) + `" alt="gambar" class="responsive-img">
                            <a class="btn-floating halfway-fab waves-effect waves-light" id="${items.id}">
                            <i class="material-icons">add</i></a>
                        </div>
                        <div class="card-content">
                            <span class="card-title brand-name center-align">` + (items.name) + `</span>
                            <h6>Address</h6>
                            <p>` + (items.address) + `</p>
                            <h6>Founded</h6>
                            <p>` + (items.founded) + `</p>
                            <h6>Venue</h6>
                            <p>` + (items.venue) + `</p>
                            <a href="` + (items.website) + `">Link Website</a>
                        </div>
                    </div>
                </div>`;
                })
                card.innerHTML = result;
                teams.forEach((items) => {
                    addListener(items)
                })
                // cek saved Team
                getAll().then(data => {
                    data.forEach(items => {
                        document.getElementById(items.id).style.display = 'none'
                    })
                })
            })
    }

    static getMatchOfMonth() {
        let date = new Date();
        let a = new Date(date.getFullYear(), date.getMonth(), 2);
        let b = new Date(date.getFullYear(), date.getMonth() + 1, 1);
        let firstDay = a.toISOString().split('T')[0];
        let lastDay = b.toISOString().split('T')[0];
        const collaps = document.querySelector('#match-scheduled');
        const preLoader = `<div class="progress">
                                <div class="indeterminate"></div>
                            </div>`;
        collaps.innerHTML = preLoader;
        fetchApi(match_url + '/?status=SCHEDULED&dateFrom=' + firstDay + '&dateTo=' + lastDay)
            .then((data) => {
                const {
                    matches
                } = data;
                let result = '';

                matches.forEach((items) => {
                    const utc = new Date(items['utcDate']);
                    let options = {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }
                    const date = utc.toLocaleDateString('en-US', options);
                    result +=
                        `<li>
                    <div class="collapsible-header brand-name"><i class="material-icons">sports_soccer</i>` + (items['awayTeam']['name']) + ` VS ` + (items['homeTeam']['name']) + `</div>
                    <div class="collapsible-body">
                        <p class="flow-text"> Macthday ` + (items['matchday']) + `</p>
                        <p class="flow-text"> Scheduled ` + (date) + `</p>
                    </div>
                </li>`;
                })
                collaps.innerHTML = result;
            })
    }

    static getSavedTeam() {
        getAll().then((data) => {
            let html = '';
            if (data.length === 0) {
                html = 'Tidak ada team tersimpan';
            } else {
                data.forEach(items => {
                    html += `<p>Ini team ${items.name}</p> 
                    <span id="${items.id}">Delete Team ?</span>`
                })
            }
            document.getElementById('savedTeamList').innerHTML = html;
            if (data.length > 0) {
                data.forEach(items => {
                    document.getElementById(items.id).addEventListener('click', () => {
                        deleteById(items.id)
                        this.getSavedTeam()
                    })
                })
            }
        })
    }
}