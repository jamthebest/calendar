var app = new Vue({
	el: '#app',
	data: {
		message: 'You loaded this page on ' + new Date(),
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
	created: function() {},
	mounted: function() {
		this.$form = $(this.$el).find('.form');
		$(this.$el).find('#calendar').calendar({
			type: 'date'
		});
	},
	methods: {
		apply: function() {
			var values = this.$form.form('get values');
			console.log(values);
		}
	}
})