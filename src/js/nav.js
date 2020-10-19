import main from './main';
import api from './api';
import goal from '../img/goal.png';
import bgMatch from '../img/bg-2.jpg';
import bgTeam from '../img/bg-4.jpg';

document.addEventListener('DOMContentLoaded', function () {

	// SIDEBAR NAVIGATION
	const sidebar = document.querySelectorAll('.sidenav');
	M.Sidenav.init(sidebar);
	loadNav();

	function loadNav() 
	{
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status != 200) return;

				// Muat daftar tautan menu
				document.querySelectorAll(".topnav, .sidenav")
					.forEach(function (elm) {
						elm.innerHTML = xhttp.responseText;
					});

				// Daftarkan event listener untuk setiap tautan menu
				document.querySelectorAll('.sidenav a, .topnav a')
					.forEach(function (elm) {
						elm.addEventListener('click', function (event) {
							// Tutup sidenav
							let sidenav = document.querySelector('.sidenav');
							M.Sidenav.getInstance(sidenav).close();

							// Muat konten halaman yang dipanggil 
							page = event.target.getAttribute('href').substr(1);
							loadPage(page);
						});
					});
			}
		};
		xhttp.open("GET", './src/nav.html', true);
		xhttp.send();
	}

	// Load page content
	let page = window.location.hash.substr(1);
	if (page === '') page = 'home';
	loadPage(page);

	function loadPage(page) 
	{
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function () {
			if (this.readyState === 4) {
				let content = document.querySelector("#body-content");
				if (this.status === 200) {
					content.innerHTML = xhttp.responseText;
					if (page === 'home') {
						main.imgCarousel();
						main.initCarousell();
						api.topScore();
						api.getStanding();
						document.querySelector('#goal').src = goal;
					} else if (page === 'team') {
						api.getTeam();
						main.initParallax();
						document.querySelector('#bg-team').src = bgTeam;
					} else if (page === 'competition') {
						api.getMatchOfMonth();
						main.initCollapsible();
						main.initParallax();
						document.querySelector('#bg-match').src = bgMatch;
					} else if (page === 'saved') {
						api.getSavedTeam();
					}
				} else if (this.status === 404) {
					content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
				} else {
					content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
				}
			}
		};
		xhttp.open("GET", './src/pages/' + page + '.html', true);
		xhttp.send();
	}

	if ('serviceWorker' in navigator) {
		window.addEventListener('load', function() {
		  navigator.serviceWorker.register('./src/service-worker.js')
		  .then(function() {
			console.log('Pendaftaran ServiceWorker berhasil');
		  })
		  .catch(function(){
			console.log('Pendaftaran ServiceWorker gagal');
		  });
		})
	} else {
		console.log("ServiceWorker belum didukung browser ini.")
	}

});