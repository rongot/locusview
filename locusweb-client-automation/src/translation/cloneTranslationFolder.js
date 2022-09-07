// require exec from child_process
const { exec , execSync} = require('child_process');
const fs = require('fs');

// execute git --version
const cloneCommands = [
    'git init Localization', 
'cd Localization && git config core.sparseCheckout true && git remote add -f origin https://github.com/locusview/locusweb-client.git && echo "src/i18n/" > .git/info/sparse-checkout && git checkout master'
]

const pullCommands=[
    'cd Localization && git reset --hard origin/master && git stash && git pull origin master'  
]

// execute git --version
async function runCommand(command) {    
        try {
            const result = await execSync(command);
            console.log('stdout:', result.toString());
        } catch (error) {
            console.log('Failed to run: ', command);
        }   
};

runCommand('git --version');

 async function runCommands(arr){
   
    for (const iterator of arr) {
        console.log(iterator.toString())
        await runCommand(iterator.toString());        
    }
};
// check if Localization exist
const dir='Localization'
if (fs.existsSync(dir)) {// if exits pull
    console.log('Localization directory exists, do pull');
    runCommands(pullCommands);

} else {// else clone
    console.log('Localization directory not found, do clone');
    runCommands(cloneCommands);
}

