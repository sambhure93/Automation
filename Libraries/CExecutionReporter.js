module.exports = {
	"reporterOptions": {
		"codeceptjs-cli-reporter": {
			"stdout": "-",
			"options": {
				"steps": true
			}
		},
		"mochawesome": {
			"stdout": "../CodeceptJSLogs/console.log",
			"options": {
				"reportDir": "../CodeceptJSLogs",
				"reportFilename": "report"
			},
		},
		"mocha-junit-reporter": {
			"stdout": "../CodeceptJSLogs/console.log",
			"options": {
				"mochaFile": "../CodeceptJSLogs/result.xml",
				"attachments": true
			}
		}
	}
}