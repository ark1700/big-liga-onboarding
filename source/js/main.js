import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {loader} from './modules/loader';
import {tabletClick} from './modules/tablet-click';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

loader();
tabletClick();
