import { defineManifest } from '@crxjs/vite-plugin';
import packageJson from './package.json';
const { version } = packageJson;

const [major, minor, patch, label = '0'] = version
    .replace(/[^\d.-]+/g, '')
    .split(/[.-]/);

const iconPath = 'src/assets/icons/'


export default defineManifest(async (env) => ({
    manifest_version: 3,
    name:
        env.mode === 'staging'
            ? '[INTERNAL] Modern Portal'
            : 'Modern Portal',
    description: 'Modernization of portal site \'portal.nkz.ac.jp\' for students.',
    version: `${major}.${minor}.${patch}.${label}`,
    version_name: version,
    icons: {
        '16': `${iconPath}icon16.png`,
        '32': `${iconPath}icon32.png`,
        '48': `${iconPath}icon48.png`,
        '128': `${iconPath}icon128.png`
    },
    action: {
        "default_popup": "index.html",
        "default_icon": `${iconPath}icon1280.png`
    },
    content_scripts: [
        {
            "matches": [
                "*://*.portal.nkz.ac.jp/portal/*"
            ],
            "js": [
                "./src/contentScripts/scripts/general.js",
            ]
        }
    ],
    permissions: ["storage"]
}));