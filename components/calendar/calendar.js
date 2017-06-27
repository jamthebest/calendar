Vue.component('calendar', {
    template: '#calendar-template-id',
    props: {
        year: {
            type: Number
        },
        month: {
            type: Number
        },
        init: {
            type: Number
        },
        end: {
            type: Number
        },
        holidays: {
            type: Object,
            default: function() {
                return {};
            }
        }
    },
    data: function() {
        return {
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        };
    },
    computed: {
        lastDate: function() {
            var date = new Date(this.year, this.month, 0);
            return date.getDate();
        },
        firstDay: function() {
            var date = new Date(this.year, this.month - 1, 1);
            return date.getDay();
        },
        initSelectedDay: function() {
            return (this.init + this.firstDay - 1) % 7;
        },
        initWeek: function() {
            return Math.ceil((this.init + this.firstDay - 1) / 7) || 1;
        },
        weeks: function() {
            return Math.ceil(((this.end - this.init + 1) + this.initSelectedDay) / 7);
        }
    },
    created: function() {
        // console.log(this)
    },
    mounted: function() {},
    destroyed: function() {},
    methods: {
        isSelected: function(day, week) {
            var rowDate = ((this.initWeek + week - 2) * 7) + day - this.firstDay;
            var greatherInitSelected = rowDate >= this.init;
            var smallerEndSelected = rowDate <= this.end;
            return greatherInitSelected && smallerEndSelected;
        },
        isDisabled: function(day, week) {
            var rowDate = ((this.initWeek + week - 2) * 7) + day - this.firstDay;
            var greatherInitSelected = rowDate >= this.init;
            var smallerEndSelected = rowDate <= this.end;
            return !greatherInitSelected || !smallerEndSelected;
        },
        getDate: function(day, week) {
            var rowDate = ((this.initWeek + week - 2) * 7) + day - this.firstDay;
            var greatherInitSelected = rowDate >= this.init;
            var smallerEndSelected = rowDate <= this.end;
            return greatherInitSelected && smallerEndSelected ? rowDate : '';
        },
        isHoliday: function(day, week) {
            var rowDate = ((this.initWeek + week - 2) * 7) + day - this.firstDay;
            var greatherInitSelected = rowDate >= this.init;
            var smallerEndSelected = rowDate <= this.end;
            var isHoliday = this.holidays[this.year + '-' + (this.month < 10 ? '0' : '') + this.month + '-' + (rowDate < 10 ? '0' : '') + rowDate] !== undefined;
            return greatherInitSelected && smallerEndSelected && isHoliday;
        },
        getHoliday: function(day, week) {
            var rowDate = ((this.initWeek + week - 2) * 7) + day - this.firstDay;
            var greatherInitSelected = rowDate >= this.init;
            var smallerEndSelected = rowDate <= this.end;
            var holiday = this.holidays[this.year + '-' + (this.month < 10 ? '0' : '') + this.month + '-' + (rowDate < 10 ? '0' : '') + rowDate];
            if (holiday) {
                var html = '<div class="holiday-list">\n\t<ul>\n\t';
                html += holiday.reduce(function(res, hol) {
                    res += '\t<li><a href="#">' + hol.name + '</a></li>\n\t';
                    return res;
                }, '');
                html += '</ul>\n</div>';
                holiday = html;
            }
            return greatherInitSelected && smallerEndSelected && holiday ? holiday : false;
        }
    }
});