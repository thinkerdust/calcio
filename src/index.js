import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './css/style.css';
import './js/nav.js';

// icon
import icon from './img/icon.png';
import appleIcon from './img/apple-touch-icon.png';

document.querySelector('link[rel="icon"]').href = icon;
document.querySelector('link[rel="apple-touch-icon"]').href = appleIcon;