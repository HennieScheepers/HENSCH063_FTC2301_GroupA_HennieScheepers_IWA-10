const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

// added reconciliation day as new Date object
holidays[0].date = new Date(`16 December ${currentYear}`)

// Fixed the evaluation of the 9th holiday to output
console.log(holidays.futureId !== undefined? holidays.futureId.name : `ID ${futureId} not created yet`)

//added let to copied as it might change (user input)
let copied = { 
    id: 6,
    name: 'X-mas Day',
    date : new Date(`25 December ${currentYear}`)
}

correctDate = copied.date
isEarlier = copied.date < holidays[6].date

//Fixed evaluation for isEarlier
isEarlier ? console.log('New date is earlier:', isEarlier) : console.log('New date is earlier:', isEarlier)

//Chaged or || operator to : in order to determine output values
console.log(`ID change: ${copied.id !== holidays[6].id ? copied.id : 'false'}`)
console.log(`Name change: ${copied.name !== holidays[6].name ? copied.name : 'false'}`)
// Added en-gb to format time correctly
console.log(`Date change: ${copied.date !== holidays[6].date ? copied.date.toLocaleDateString(['en-gb']): 'false'}`)


const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

// Used Date(0) to set to the beginning of epoch
const firstHoliday = new Date(0)
// Used .setUTCMilliseconds to convert timestamp to milliseconds from epoch
firstHoliday.setUTCMilliseconds(firstHolidayTimestamp)
const firstDay = firstHoliday.getDate()
const firstMonth = firstHoliday.getMonth() + 1

const lastHoliday = new Date(0)
lastHoliday.setUTCMilliseconds(lastHolidayTimestamp)
const lastDay = lastHoliday.getDate()
const lastMonth = lastHoliday.getMonth()

//Evaluations to check if we need to add a zero before the day/month
console.log(`${firstDay < 10 ? `0${firstDay}` : firstDay}/${firstMonth < 10 ? `0${firstMonth}` : firstMonth}/${currentYear}`)
console.log(`${lastDay < 10 ? `0${lastDay}` : lastDay}/${lastMonth < 10 ? `0${lastMonth}` : lastMonth}/${currentYear}`)

const randomHoliday = holidays[Math.floor(Math.random() * 10)]
console.log(randomHoliday.date.toLocaleDateString('en-gb'))
