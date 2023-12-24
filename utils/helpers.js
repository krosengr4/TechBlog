//! This file contains helper function to get the date and generate random amount

// Helper function that formates the date and time
module.exports = {
    // format_time: (date) => {
    //     return date.toLocalTimeString();
    // },
    // format_date: (date) => {
    //     return date.toLocalDate();
    // },
    format_datetime: (date) => {
        return date.toLocalTimeString()+'on'+ date.toLocalDateString();
    }
};