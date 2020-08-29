const path = require('path');
const { downloadSpreadsheetFile } = require('./src/utils/utils');
const { read, utils } = require('xlsx');
const SPREADSHEET_ID = '1EclVdCu9ioEUBIEbmKD4yJH4rlFCrTqzVypE748P34k';

exports.createPages = async ({ actions }) => {
    const { createPage } = actions
    const result = await downloadSpreadsheetFile(
        SPREADSHEET_ID
    );
    const workbook = read(await result.arrayBuffer(), { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const jsonObjects = utils.sheet_to_json(workbook.Sheets[sheetName], { raw: false });
    jsonObjects.forEach((jsonObject) => {
        const hash = jsonObject['Hash'];
        const redirectToUrl = jsonObject['Original'];
        if (!hash || !redirectToUrl) {
            return;
        }

        createPage({
            path: hash,
            component: path.resolve('./src/templates/redirect.js'),
            context: {
                redirectToUrl,
            },
        })
    });
}
