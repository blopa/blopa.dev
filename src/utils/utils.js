const fetch = require('node-fetch');

exports.downloadSpreadsheetFile = async (spreadsheetId, sheetId = 0, forceCors = false) => {
    let url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=xlsx&gid=${sheetId}`;
    if (forceCors) {
        url = `https://cors-anywhere.herokuapp.com/${url}`;
    }

    const response = await fetch(url);
    return await response.blob();
};
