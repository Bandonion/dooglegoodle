function getFormatedData(date2) {
    date = date2;

    prevMonth    = _getPrevMonth();
    currentMonth = _getCurrentMonth();
    nextMonth    = _getNextMonth();
    firstDayOfMonth = _getFirstDayOfMonth(currentMonth.object);
    lastDayOfMonth  = _getLastDayOfMonth(currentMonth.object);
    selectedDayOfMonth  = _getSelectedDayOfMonth();

    calendar = {
        month: currentMonth.monthName,
        year: currentMonth.year,
        weekdays: ['Mo', 'Di','Mi','Do ','Fr','Sa','So'],
        prev: _getDayRangePrev( prevMonth.days - firstDayOfMonth, prevMonth.days ),
        current:  _getDayRangeCurrent(0, currentMonth.days, selectedDayOfMonth),
        next: _getDayRangeNext( 0, 6 - lastDayOfMonth)
    };
    return calendar
};

function _getDayRangePrev(start, end) {
    days = [];

    while(start < end) {
        item = {
            day: ++start,
            activ: true,
            month: "calendar-day-prev-month calendar-day-elapsed"
        };
        days.push( item );
    }
    return days
};

function _getDayRangeNext(start, end) {
    days = [];

    while(start < end) {
        item = {
            day: ++start,
            activ: true,
            month: "calendar-day-next-month calendar-day-elapsed"
        };
        days.push( item );
    }
    return days
};

function _getDayRangeCurrent(start, end, current) {
    days = [];

    while(start < end) {
        item = {
            day: ++start,
            activ: true,
            month: "calendar-day-current-month calendar-day-selectable"
        };

        if(current && current === start){
            item.selected = "calendar-day-selected"
        }
        days.push( item );
    }
    return days
};

function _getPrevMonth() {
    date = date || new Date();
    return _getValuesOfDate(new Date(date.getFullYear(), date.getMonth(), 0));
};

function _getNextMonth() {
    date = date || new Date();
    return _getValuesOfDate(new Date(date.getFullYear(), date.getMonth() + 2, 0));
};

function _getCurrentMonth() {
    date = date || new Date();
    return _getValuesOfDate(new Date(date.getFullYear(), date.getMonth() + 1, 0));
};

function _getFirstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

function _getLastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
};

function _getSelectedDayOfMonth() {
    return date.getDate()
};

function _getValuesOfDate(date) {
    return {
        days: date.getDate(),
        monthName: date.getMonth(),
        monthDigits: date.getMonth() + 1,
        year: date.getFullYear(),
        object: date
    };
};