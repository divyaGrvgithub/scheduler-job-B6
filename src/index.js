// 4)Problem Statement

// Hint:You Will have to Self Explore cron jobs in Nodejs,For this Assignment
// Build a scheduler in JS with NodeJS framework and a script to run it for 10 events.
// The event will consist of a text (string) and a date time at which it will run.
// The scheduler must schedule the event to trigger a function at the date time mentioned in the event body.  
// The trigger function (API) must accept the text as input, sleep for the duration of text length and return text backwards


const cron = require('node-cron');
const events =  [
    { text: "textOne", dateTime: "5 44 21 11 2 6" },
    { text: "textTwo", dateTime: "30 10 21 12 2 0" },
    { text: "textThree", dateTime: "30 15 23 13 2 1" },
    { text: "textFour", dateTime: "30 15 23 14 2 2" },
    { text: "textFive", dateTime: "30 15 23 15 2 3" },
    { text: "textSix", dateTime: "30 15 23 16 2 4" },
    { text: "textSeven", dateTime: "30 15 23 17 2 5" },
    { text: "textEight", dateTime: "30 15 23 18 2 6" },
    { text: "textNine", dateTime: "30 15 23 19 2 0" },
    { text: "textTen", dateTime: "30 15 23 20 2 1" }
];

// So, the script must go through this list and for each event item, hit NodeJS
// scheduler API asking it to schedule the event (let us say event 1) to trigger
// the function at “2020-07-10 15:00:00.000”. The function must take the text
// as param (textOne) sleep for (7 seconds) and return/console log (enotxet)


const trigger = (text) =>  {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text.split("").reverse().join(""));
        }, 7000);
    });
};

const scheduler = function () {
    for (const event of events) {
        cron.schedule(event.dateTime, async () => {
            const result = await trigger(event.text);
            console.log(`text: ${result}`);
            let currentDate = new Date();
            let dateTime = currentDate.getFullYear() + "-"
                + (currentDate.getMonth() + 1) + "-"
                + currentDate.getDate() + " "    
                + currentDate.getHours() + ":"
                + currentDate.getMinutes() + ":"
                + currentDate.getSeconds() + "."
                + currentDate.getMilliseconds();
            console.log(`dateTime: ${dateTime}`);
        }) ;
    }
} ;

scheduler();
