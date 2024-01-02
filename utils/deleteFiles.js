const fs = require('fs');
const path = require('path');

function deleteFiles(filePaths) {
    if (filePaths && Array.isArray(filePaths)) {
        filePaths.forEach(filePath => {
            const fullPath = path.join(__dirname, '..', '', filePath);
            try {
                fs.unlinkSync(fullPath);
                console.log(`Deleted file: ${fullPath}`);
            } catch (error) {
                console.error(`Error deleting file ${fullPath}:`, error);
            }
        });
    }
}

module.exports = {
    deleteFiles,
};
