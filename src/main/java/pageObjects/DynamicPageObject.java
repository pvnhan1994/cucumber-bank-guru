package pageObjects;

import commons.AbstractPage;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import pageUIs.DynamicPageUI;

public class DynamicPageObject extends AbstractPage {
    WebDriver driver;
    public DynamicPageObject(WebDriver mappingDriver) {

        driver = mappingDriver;
    }
    // 100> pages
    public void openDynamicPageLink(WebDriver driver, String pagename) {
        waitForElementVisible(driver, DynamicPageUI.DYNAMIC_MENU_LINK, pagename);
        clickToElement(driver, DynamicPageUI.DYNAMIC_MENU_LINK, pagename);
    }

    // Dynamic Page Object/ Page Element/ Page UI
    public void inputToDynamicTextbox(WebDriver driver, String textboxNameID, String valueToSendKey) {
        waitForElementVisible(driver, DynamicPageUI.DYNAMIC_TEXTBOX_BUTTON, textboxNameID);
        sendkeyElement(driver, DynamicPageUI.DYNAMIC_TEXTBOX_BUTTON, valueToSendKey,textboxNameID);
    }

    public void inputToDynamicTextArea(WebDriver driver, String textAreaNameID, String valueToSendKey) {
        waitForElementVisible(driver, DynamicPageUI.DYNAMIC_TEXT_AREA, textAreaNameID);
        sendkeyElement(driver, DynamicPageUI.DYNAMIC_TEXT_AREA, valueToSendKey,textAreaNameID);
    }

    public void clickToDynamicRadioButton(WebDriver driver, String radioButtonNameValue) {
        waitForElementVisible(driver, DynamicPageUI.DYNAMIC_RADIO_BUTTON,radioButtonNameValue);
        clickToElement(driver, DynamicPageUI.DYNAMIC_RADIO_BUTTON, radioButtonNameValue);
    }

    public void clickToDynamicButton(WebDriver driver, String ButtonNameValue) {
        waitForElementVisible(driver, DynamicPageUI.DYNAMIC_BUTTON,ButtonNameValue);
        clickToElement(driver, DynamicPageUI.DYNAMIC_BUTTON, ButtonNameValue);
    }

    public void selectToDynamicDropdownList(WebDriver driver,String dropDownID,  String valueInDropdown) {
        waitForElementVisible(driver, DynamicPageUI.DYNAMIC_DROPDOWN_LIST, dropDownID);
        selectItemInDropDown(driver, DynamicPageUI.DYNAMIC_DROPDOWN_LIST, valueInDropdown, dropDownID);
    }

    public boolean isDynamicPageOrMessageDisplayed(WebDriver driver, String pageHeadingName) {
        waitForElementVisible(driver, DynamicPageUI.DYNAMIC_PAGE_HEADING, pageHeadingName);
        return isControlDisplayed(driver, DynamicPageUI.DYNAMIC_PAGE_HEADING,pageHeadingName);
    }
    public String getDynamicTextInTable(WebDriver driver, String rowName) {
        waitForElementVisible(driver, DynamicPageUI.DYNAMIC_TABLE_ROW_NAME, rowName);
        return getTextElement(driver, DynamicPageUI.DYNAMIC_TABLE_ROW_NAME, rowName);

    }
    public String getDynamicTextInTableValidate(WebDriver driver, String rowName) {
        waitForElementVisible(driver, DynamicPageUI.DYNAMIC_TABLE_ROW_NAME_VALIDATE, rowName);
        return getTextElement(driver, DynamicPageUI.DYNAMIC_TABLE_ROW_NAME_VALIDATE, rowName);

    }
    public void pressTABToDynamicTextbox(WebDriver driver, String nameID) {
        waitForElementVisible(driver, DynamicPageUI.DYNAMIC_TEXTBOX_BUTTON, nameID);
        sendKeyboardToElement(driver, DynamicPageUI.DYNAMIC_TEXTBOX_BUTTON, Keys.TAB, nameID);
    }
    public void pressTABToDynamicTextArea(WebDriver driver, String nameID) {
        waitForElementVisible(driver, DynamicPageUI.DYNAMIC_TEXT_AREA, nameID);
        sendKeyboardToElement(driver, DynamicPageUI.DYNAMIC_TEXT_AREA, Keys.TAB, nameID);
    }
    public void clearDynamicTextArea(WebDriver driver, String nameID) {
        waitForElementVisible(driver, DynamicPageUI.DYNAMIC_TEXT_AREA, nameID);
        clearDataElement(driver, DynamicPageUI.DYNAMIC_TEXT_AREA, nameID);
    }
    public void clearDynamicTextbox(WebDriver driver, String nameID) {
        waitForElementVisible(driver, DynamicPageUI.DYNAMIC_TEXTBOX_BUTTON, nameID);
        clearDataElement(driver, DynamicPageUI.DYNAMIC_TEXTBOX_BUTTON, nameID);
    }
    public boolean isDynamicAlertMessageDisplayedAndAcceptAlert(WebDriver driver, String expectedAlertMessage) {
        waitForAlertPresent(driver);
        String actualAlertMessage = getTextAlert(driver);
        acceptAlert(driver);
        return actualAlertMessage.equals(expectedAlertMessage);

    }

}
