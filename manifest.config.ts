import { defineManifest } from "@crxjs/vite-plugin";
import packageJson from './package.json';
const { version } = packageJson;

const [major, minor, patch, label = '0'] = version
    .replace(/[^\d.-]+/g, '')
    .split(/[.-]/);


export default defineManifest(async (env) => ({
    manifest_version: 3,
    name:
        env.mode === 'staging'
            ? '[INTERNAL] Modern Portal'
            : 'Modern Portal',
    description: "Modernize portal.nkz.ac.jp",
    version: `${major}.${minor}.${patch}.${label}`,
    version_name: version,
    action: {
        "default_popup": "index.html",
        "default_icon": "src/assets/icon.png"
    }
}));