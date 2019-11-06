package bank.stepDefinitions;

import commons.AbstractTest;
import commons.PageGeneratorManager;
import cucumber.api.java.en.Given;
import org.openqa.selenium.WebDriver;
import pageObjects.DynamicPageObject;

public class DynamicPageSteps{
    WebDriver driver;
    DynamicPageObject dynamicPage;
    AbstractTest abstractTest;
    NewCustomerPageSteps newCustomerPage;
    public DynamicPageSteps() {
        driver = cucumberOptions.Hooks.openAndQuitBrowser();
        dynamicPage = PageGeneratorManager.getDynamicPage(driver);
        abstractTest = new AbstractTest();
    }

    @Given("^I input to \"([^\"]*)\" textbox with data \"([^\"]*)\"$")
    public void iInputToTextboxWithData(String nameID, String value) {
        dynamicPage.inputToDynamicTextbox(driver, nameID, value);
    }

    @Given("^I input to \"([^\"]*)\" textbox with random data \"([^\"]*)\"$")
    public void iInputToTextboxWithRandomData(String nameID, String value) {
        value = value + abstractTest.randomDataTest();
        dynamicPage.inputToDynamicTextbox(driver, nameID, value);
    }

    @Given("^I input to \"([^\"]*)\" textbox with \"([^\"]*)\" data \"([^\"]*)\"$")
    public void iInputToTextboxWithData(String nameID, String randomValue, String value){
        if(randomValue.equals("1")) {
            value = value + " " + abstractTest.randomDataTest();
        } else if (randomValue.equals("2")){
            value = value + abstractTest.randomDataTest();

        }
        if (nameID.startsWith("email")){
            value = value + "@gmail.com";
        }
        dynamicPage.inputToDynamicTextbox(driver, nameID, value);
    }

    @Given("^I input to \"([^\"]*)\" textarea with data \"([^\"]*)\"$")
    public void iInputToTextareaWithData(String nameID, String value) {
        dynamicPage.inputToDynamicTextArea(driver,nameID,value);
    }

    @Given("^I select item in \"([^\"]*)\" dropdown with data \"([^\"]*)\"$")
    public void iSelectItemInDropdownWithData(String dropDownID, String valueInDropdown) {
        dynamicPage.selectToDynamicDropdownList(driver, dropDownID, valueInDropdown);
    }

    @Given("^I select \"([^\"]*)\" radio button$")
    public void iSelectRadioButton(String radioButtonNameValue) {
        dynamicPage.clickToDynamicRadioButton(driver, radioButtonNameValue);
    }


    @Given("^I click to \"([^\"]*)\" button$")
    public void iClickToButton(String ButtonNameValue) {
        dynamicPage.clickToDynamicButton(driver, ButtonNameValue);
    }

    @Given("^I open \"([^\"]*)\" page$")
    public void iOpenPage(String pageName) {
        dynamicPage.openDynamicPageLink(driver, pageName);
    }

    @Given("^Verify message \"([^\"]*)\" displays success$")
    public void verifyMessageDisplaysSuccess(String message) {
        abstractTest.verifyTrue(dynamicPage.isDynamicPageOrMessageDisplayed(driver, message));
    }

    @Given("^Verify alert message \"([^\"]*)\" displayed and accept$")
    public void verifyAlertMessageDisplayedAndAccept(String messageAlert) {
        abstractTest.verifyTrue(dynamicPage.isDynamicAlertMessageDisplayedAndAcceptAlert(driver,messageAlert));
    }

    @Given("^Verify information \"([^\"]*)\" is \"([^\"]*)\" displayed$")
    public void verify_information_something_is_something_displayed(String rowName, String expected){
        abstractTest.verifyEquals(dynamicPage.getDynamicTextInTable(driver,rowName),expected);
    }

    @Given("^I sleep with \"([^\"]*)\" seconds$")
    public void iSleepWithSeconds(String secondValue) {
        long timeInSecond = Long.parseLong(secondValue);
        dynamicPage.sleepInSecond(driver, timeInSecond);
    }

    @Given("^I input (first|second) Account ID$")
    public void iInputFirstAccountID(String account) {
        if(account.equalsIgnoreCase("first")){
        }
        if(account.equalsIgnoreCase("second")){
        }
    }

    @Given("^I (?:transfer|withdraw) to \"(.*?)\" USD$")
    public void iTransferToUSD(String amount) {

    }

    @Given("^I withdraw to \"([^\"]*)\" USD$")
    public void iWithdrawToUSD(String arg1) {
    }

}

