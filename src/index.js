import './style.css';
import { getData } from './modules/addData.js';
import refreshData from './modules/score.js';
import saveScore from './modules/returnData.js';

const submitBtn = document.querySelector('.submit');
const refreshbtn = document.querySelector('.refresh');

getData();
document.addEventListener('DOMContentLoaded', refreshData);
refreshbtn.addEventListener('click', refreshData);
submitBtn.addEventListener('click', saveScore);