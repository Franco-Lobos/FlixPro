import { getCharacterUrls } from './common'
import { SubscriptionStatus } from '../utils/types'

/* Environment */

export const USE_PLAUSIBLE = false

export const MODEL_TYPE = 'glb'

export const MAX_CHARACTER_CNT = 20

export const REALTIME_DURATION = 30000

export const USER_NAME = 'random'


/* Static */

export const PLAUSIBLE_STEP_CNT = 2

export const AXIS_SIZE = 10

export const GROUND_SIZE = 3000

export const GROUND_HEIGHT = 2

export const TREE_URLS = [
  './models/fbx/trees/Tree1.fbx',
  './models/fbx/trees/Tree2.fbx',
  './models/fbx/trees/Tree3.fbx',
  './models/fbx/trees/Tree4.fbx',
  './models/fbx/trees/Tree5.fbx',
]

export const BILLBOARD_URL = './models/fbx/billboard.fbx'

export const BILLBOARD_HTML_SIZE = 1200

export const DEFAULT_LINEAR_DAMPING = 1000

export const LERP_ALPHA = 0.1

export const FLOATING_HEIGHT = 0

export const CHARACTER_COL_CNT = 10


/* Dynamic */

export const BACKEND_URL = 'http://127.0.0.1:4000/api/user'

export const HTML_ASPECT = BILLBOARD_HTML_SIZE / 400

export const GRAVITY = 980 * HTML_ASPECT

export const LAND_SCALE = 0.06 * HTML_ASPECT

export const LAND_INIT_POS = [36 / LAND_SCALE, -46.8 / LAND_SCALE, -70 / LAND_SCALE]

export const TREE_SCALE = 0.6 * HTML_ASPECT

export const LEFT_TREES_POS = [120 / TREE_SCALE, 0, 0 / TREE_SCALE]

export const RIGHT_TREES_POS = [-120 / TREE_SCALE, 0, 30 / TREE_SCALE]

export const BILLBOARD_SCALE = 0.06 * HTML_ASPECT

export const BILLBOARD_INIT_POS = [0, 0, 12 * HTML_ASPECT]

export const BILLBOARD_DES_POS = BILLBOARD_INIT_POS

export const CHARACTER_URLS = getCharacterUrls(MODEL_TYPE, 5)

export const DEFAULT_ANGULAR_DAMPING = DEFAULT_LINEAR_DAMPING * 10

export const CHARACTER_SCALE = 0.015 * HTML_ASPECT

export const WALKING_SPEED = DEFAULT_LINEAR_DAMPING * 4

export const INIT_ORIGIN_POS = [BILLBOARD_DES_POS[0] + 15, 0, BILLBOARD_DES_POS[2] - (30 * HTML_ASPECT)]

export const VIEW_ORIGIN_POS = [BILLBOARD_DES_POS[0] + 15, 0, BILLBOARD_DES_POS[2]]

export const QUIT_ORIGIN_POS = [BILLBOARD_DES_POS[0] + 60, 0, BILLBOARD_DES_POS[2] + (5 * HTML_ASPECT)]

export const CHARACTERS_GAP = HTML_ASPECT * 1.6

export const TOLERANCE_DISTANCE = HTML_ASPECT * 10

export const CAMERA_INIT_POS = [-25 * HTML_ASPECT, 25 * HTML_ASPECT, -25 * HTML_ASPECT]

export const CAMERA_DES_POS = CAMERA_INIT_POS



// UI
export const MENU_SECTION_CLASSES = `border-y-[1px] border-gray-300 py-4 text-sm text-gray-500`;
export const MENU_ICON_CLASSES = `w-5 h-5 `;


export const COLORS = {
  themeBlack: '#323232',
}


//DEFAULTS
export const DEFAULT_USER_SUBSCRIPTION = SubscriptionStatus.FREE_TIER;
export const HARCODED_VERSION = '3.4.66';


