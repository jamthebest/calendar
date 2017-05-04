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
        weeks: function() {
            return Math.ceil((this.firstDay + this.lastDate) / 7);
        }
    },
    created: function() {
        console.log(this)
    },
    mounted: function() {},
    destroyed: function() {},
    methods: {}
});