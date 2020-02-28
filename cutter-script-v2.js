var vm = new Vue({
    el: "#app",
    data: {
        onQueue: [],
        onCutter: [],
        timeIn: [],
        times: [],
        timeOn: [],
        cutTimes: [],
        time: '',
        firstName: "",
        lastName: ""
    },
    computed: {
        // Calculates number of people in queue
        numQueue: function () {
            return this.onQueue.length;
        },
        numCutter: function () {
            return this.onCutter.length
        }
    },
    methods: {
        addToQueue: function (first, last) {
            var name = first + " " + last;
            this.onQueue[this.onQueue.length] = name;
            var today = new Date();
            // HH:MM AM/PM Format
            this.timeIn[this.timeIn.length] = today.toLocaleTimeString();
            this.onQueue.splice();
            this.timeIn.splice();
        },
        addToCutter: function (index, time) {
            this.onCutter[this.onCutter.length] = this.onQueue[index];
            var now = new Date();
            this.timeOn[this.timeOn.length] = now.toLocaleTimeString();
            now.setMinutes(now.getMinutes() + parseInt(time));
            // HH:MM AM/PM Format
            this.times[this.times.length] = now.toLocaleTimeString();
            this.onQueue.splice(index, 1);
            this.timeIn.splice(index, 1);
            this.onCutter.splice();
        },
        removeCutter: function (index) {
            this.timeOn.splice(index, 1);
            this.onCutter.splice(index, 1);
            this.cutTimes.splice(index, 1);
            this.times.splice(index, 1);
        },
        getQueueName: function (index) {
            return this.onQueue[index];

        },
        getCutterName: function (index) {
            return this.onCutter[index];
        },
        getTimeIn: function (index) {
            return this.timeIn[index];
        },
        getTime: function (index) {
            return this.times[index];
        },
        getTimeOn: function (index) {
            return this.timeOn[index];
        },
        getCurrent: function () {
            var today = new Date();
            // HH:MM AM/PM Format
            return today.toLocaleTimeString();
        }
    }
})