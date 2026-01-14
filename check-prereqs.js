// check-prereqs.js
// Simple Node script to verify required tools are available.
// Returns exit code 0 if both Node.js and Git are found, otherwise prints a helpful message.
const { execSync } = require('child_process');
function check(command, name) {
    try {
        const output = execSync(`${command} --version`, { stdio: 'pipe' }).toString().trim();
        console.log(`${name} version: ${output}`);
        return true;
    } catch (e) {
        console.error(`${name} is not installed or not in PATH.`);
        return false;
    }
}
const nodeOk = check('node', 'Node.js');
const gitOk = check('git', 'Git');
if (!nodeOk || !gitOk) {
    process.exit(1);
}
process.exit(0);
