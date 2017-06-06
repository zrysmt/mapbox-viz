import './common/css/index.scss';

import util from './common/util.js';
// import stats from './common/libs/stats.js';
import Stats from 'stats.js';

import { BaseMap, map } from './component/basemap.js';



function init() {
    let baseMap = new BaseMap();
    baseMap.init();
    util.adaptHeight("map", 0);
}

init();

//show fps
let stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);

function animate() {

    stats.begin();

    // monitored code goes here

    stats.end();

    requestAnimationFrame(animate);

}

requestAnimationFrame(animate);
