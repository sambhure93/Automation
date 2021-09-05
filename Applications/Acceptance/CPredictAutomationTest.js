
const { I, abstractTest, predictAutomation } = inject();

Feature('Sample Test for Angular Application');

Scenario('sample test', (Data) => {
    predictAutomation.userAuthentication(Data['validateUserAuthentication']);
    predictAutomation.validatePredictHeader();
	}).injectDependencies({ Data : abstractTest.getTestDataFile(__filename) }).tag("@Smoke");