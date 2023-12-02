const express = require('express');
const app = express();

const cron = require('node-cron');
const fs = require('fs');

// https://crontab.guru/ check how cron worked
// * * * * * * = second minute hour day(month) month day(week)
cron.schedule('*/5 * * * * *', function() {
    let data = `Cron Job is ruuning\n`;

    fs.appendFile('logs.txt', data, function(err) {
        if(err) throw err;

        console.log('File Data Added.')
    })
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})