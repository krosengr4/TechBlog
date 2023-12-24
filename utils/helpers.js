//! This file contains helper function to get the date and generate random amount

module.exports = {
    format_date: (date) => {
        // format the date as MM/DD/YYYY
        return date.toLocalDateString();
    },
};