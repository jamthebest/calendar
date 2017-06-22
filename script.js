var app = new Vue({
	el: '#app',
	data: {
		startDate: '',
		numberDays: '',
		countryCode: '',
		holidays: {},
		yearsCount: 0,
		codes: [{
			value: "AR",
			text: "Argentina"
		}, {
			value: "AO",
			text: "Angola"
		}, {
			value: "AT",
			text: "Austria"
		}, {
			value: "AU",
			text: "Australia"
		}, {
			value: "AW",
			text: "Aruba"
		}, {
			value: "BE",
			text: "Belgium"
		}, {
			value: "BG",
			text: "Bulgaria"
		}, {
			value: "BO",
			text: "Bolivia"
		}, {
			value: "BR",
			text: "Brazil"
		}, {
			value: "CA",
			text: "Canada"
		}, {
			value: "CH",
			text: "Switzerland"
		}, {
			value: "CN",
			text: "China"
		}, {
			value: "CO",
			text: "Colombia"
		}, {
			value: "CZ",
			text: "Czech Republic"
		}, {
			value: "DE",
			text: "Germany"
		}, {
			value: "DK",
			text: "Denmark"
		}, {
			value: "DO",
			text: "Dominican Republic"
		}, {
			value: "EC",
			text: "Ecuador"
		}, {
			value: "ES",
			text: "Spain"
		}, {
			value: "FI",
			text: "Finland"
		}, {
			value: "FR",
			text: "France"
		}, {
			value: "GB",
			text: "United Kingdom"
		}, {
			value: "GB-ENG",
			text: "England"
		}, {
			value: "GB-NIR",
			text: "Northern Ireland"
		}, {
			value: "GB-SCT",
			text: "Scotland"
		}, {
			value: "GB-WLS",
			text: "Wales"
		}, {
			value: "GR",
			text: "Greece"
		}, {
			value: "GT",
			text: "Guatemala"
		}, {
			value: "HK",
			text: "Hong Kong"
		}, {
			value: "HN",
			text: "Honduras"
		}, {
			value: "HR",
			text: "Croatia"
		}, {
			value: "HU",
			text: "Hungary"
		}, {
			value: "ID",
			text: "Indonesia"
		}, {
			value: "IE",
			text: "Ireland"
		}, {
			value: "IN",
			text: "India"
		}, {
			value: "IL",
			text: "Israel"
		}, {
			value: "IS",
			text: "Iceland"
		}, {
			value: "IT",
			text: "Italy"
		}, {
			value: "JP",
			text: "Japan"
		}, {
			value: "KZ",
			text: "Kazakhstan"
		}, {
			value: "LS",
			text: "Lesotho"
		}, {
			value: "LU",
			text: "Luxembourg"
		}, {
			value: "MG",
			text: "Madagascar"
		}, {
			value: "MQ",
			text: "Martinique"
		}, {
			value: "MT",
			text: "Malta"
		}, {
			value: "MU",
			text: "Mauritius"
		}, {
			value: "MX",
			text: "Mexico"
		}, {
			value: "MZ",
			text: "Mozambique"
		}, {
			value: "NL",
			text: "Netherlands"
		}, {
			value: "NO",
			text: "Norway"
		}, {
			value: "PE",
			text: "Peru"
		}, {
			value: "PK",
			text: "Pakistan"
		}, {
			value: "PH",
			text: "Philippines"
		}, {
			value: "PL",
			text: "Poland"
		}, {
			value: "PR",
			text: "Puerto Rico"
		}, {
			value: "PT",
			text: "Portugal"
		}, {
			value: "PY",
			text: "Paraguay"
		}, {
			value: "RE",
			text: "Réunion"
		}, {
			value: "RU",
			text: "Russia"
		}, {
			value: "SC",
			text: "Seychelles"
		}, {
			value: "SE",
			text: "Sweden"
		}, {
			value: "SG",
			text: "Singapore"
		}, {
			value: "SI",
			text: "Slovenia"
		}, {
			value: "ST",
			text: "Sao Tome and Principe"
		}, {
			value: "SK",
			text: "Slovakia"
		}, {
			value: "TN",
			text: "Tunisia"
		}, {
			value: "TR",
			text: "Turkey"
		}, {
			value: "UA",
			text: "Ukraine"
		}, {
			value: "US",
			text: "United States"
		}, {
			value: "UY",
			text: "Uruguay"
		}, {
			value: "VE",
			text: "Venezuela"
		}, {
			value: "ZA",
			text: "South Africa"
		}, {
			value: "ZW",
			text: "Zimbabwe"
		}]
	},
	computed: {
		initDate: function() {
			if (this.startDate) {
				return new Date(this.startDate);
			}
			return 0;
		},
		endDate: function() {
			if (this.initDate && this.numberDays) {
				return new Date(this.initDate.getFullYear(), this.initDate.getMonth(), this.initDate.getDate() + Number(this.numberDays) - 1);
			}
		},
		params: function() {
			if (this.initDate && this.endDate) {
				var response = {};
				var years = this.endDate.getFullYear() - this.initDate.getFullYear();
				response.months = years === 0 ? this.endDate.getMonth() - this.initDate.getMonth() + 1 : this.endDate.getMonth() - this.initDate.getMonth() + 1 + (years * 12);
				response.rows = Math.ceil(response.months / 2) || 1;
				var result = [];
				for (var i = 0; i < response.months; i++) {
					if (i === 0) {
						result.push({
							year: this.initDate.getFullYear(),
							month: this.initDate.getMonth(),
							init: this.initDate.getDate(),
							end: ((this.initDate.getMonth() === this.endDate.getMonth() && this.initDate.getFullYear() === this.endDate.getFullYear()) ? this.endDate : new Date(this.initDate.getFullYear(), this.initDate.getMonth() + 1, 0)).getDate()
						});
					} else {
						var init = new Date(this.initDate.getFullYear(), this.initDate.getMonth() + i, 1)
						result.push({
							year: init.getFullYear(),
							month: init.getMonth(),
							init: 1,
							end: ((init.getMonth() === this.endDate.getMonth() && init.getFullYear() === this.endDate.getFullYear()) ? this.endDate : new Date(init.getFullYear(), init.getMonth() + 1, 0)).getDate()
						});
					}
				}
				response.dates = result;
				return response;
			}
			return {};
		}
	},
	created: function() {},
	mounted: function() {
		this.$form = $(this.$el).find('.form');
		this.$form.form({
			fields: {
				'country-code': 'empty',
				'number-days': 'empty',
				'start-date': 'empty'
			}
		})
		$(this.$el).find('#calendar').calendar({
			type: 'date'
		});
	},
	methods: {
		apply: function() {
			this.$form.find('.error.message').empty();
			var values = this.$form.form('get values');
			var errors = [];
			if (!values['start-date']) {
				errors.push('Select a Start Date');
			}
			if (!values['number-days']) {
				errors.push('Fill a Number of Days');
			} else if (values['number-days'] < 1) {
				errors.push('The number of days must be greater than 0')
			}
			if (!values['country-code']) {
				errors.push('Select a Country');
			}
			if (errors.length === 0) {
				var numberDays = values['number-days'];
				var init = new Date(values['start-date']);
				var end = new Date(init.getFullYear(), init.getMonth(), init.getDate() + Number(numberDays) - 1);
				this.yearsCount = end.getFullYear() - init.getFullYear();
				this.callApiHolidays(init.getFullYear(), values);
			} else {
				this.$form.form("add errors", errors);
			}
		},
		callApiHolidays: function(year, values) {
			var _this = this;
			$.ajax({
				type: "GET",
				url: 'https://holidayapi.com/v1/holidays',
				data: {
					key: '71a915c1-adb9-4745-a1c2-1fc697e5d927',
					country: values['country-code'],
					year: year
				},
				success: function(res) {
					_this.holidays = Object.assign(_this.holidays, res.holidays);
					if (_this.yearsCount === 0) {
						_this.countryCode = values['country-code'];
						_this.numberDays = values['number-days'];
						_this.startDate = new Date(values['start-date']);
						setTimeout(function() {
							$('td[data-html]').popup({
								position: 'top center',
								hoverable: true
							});
						}, 10);
					} else {
						_this.yearsCount--;
						_this.callApiHolidays(++year, values);
					}
				},
				error: function(error) {
					console.error(error);
				}
			});
		},
		getElement: function(row, calendar, element) {
			return this.params.dates[((row - 1) * 2) + (calendar - 1)][element] + (element === 'month' ? 1 : 0);
		}
	}
})