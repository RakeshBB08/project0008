const { spawn } = require('child_process');

const programPath = '~/inteRn/open5gs/build/tests/app/5gc';

model.exports.startCore = async(req,res) => {
    try {
        const childProcess = spawn(programPath, [], {
            // Set minimal permissions (adjust based on program requirements)
            uid: 1000, // Unprivileged user
            gid: 1000, // Unprivileged group
            // env: { /* Set any necessary environment variables */ }
        });

        // Handle child process output and errors (implement proper logging)
        childProcess.stdout.on('data', (data) => {
            console.log(`Program output: ${data.toString()}`);
        });

        childProcess.stderr.on('data', (data) => {
            console.error(`Program error: ${data.toString()}`);
        });

        await new Promise((resolve, reject) => {
            childProcess.on('close', (code) => {
                if (code === 0) {
                    resolve();
                } else {
                    reject(new Error(`Program exited with code ${code}`));
                }
            });
        });

        console.log('core started successfully');
    } catch (error) {
        console.error('Error starting core network:', error);
    }
}