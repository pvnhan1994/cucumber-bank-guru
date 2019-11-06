package commons;

import org.openqa.selenium.WebDriver;

import pageObjects.*;

public class PageGeneratorManager {
	public static LoginPageObject getLoginPage(WebDriver driver) {
		return new LoginPageObject(driver);
	}

	public static RegisterPageObject getRegisterPage(WebDriver driver) {
		return new RegisterPageObject(driver);
	}

	public static HomePageObject getHomePage(WebDriver driver) {
		return new HomePageObject(driver);
	}

	public static NewCustomerPageObject getNewCustomerPage(WebDriver driver) {
		return new NewCustomerPageObject(driver);
	}

	public static DeleteCustomerPageObject getDeleteCustomerPage(WebDriver driver) {
		return new DeleteCustomerPageObject(driver);
	}

	public static EditCustomerPageObject getEditCustomerPage(WebDriver driver) {
		return new EditCustomerPageObject(driver);
	}

	public static NewAccountPageObject getNewAccountPage(WebDriver driver) {
		return new NewAccountPageObject(driver);
	}

	public static EditAccountPageObject getEditAccountPage(WebDriver driver) {
		return new EditAccountPageObject(driver);
	}

	public static DepositPageObject getDepositPage(WebDriver driver) {
		return new DepositPageObject(driver);
	}

	public static WithdrawalPageObject getWithdralwalPage(WebDriver driver) {
		return new WithdrawalPageObject(driver);
	}

	public static FundTransferPageObject getFundTransfer(WebDriver driver) {
		return new FundTransferPageObject(driver);
	}

	public static BalanceEnquiryPageObject getBalanceEnquiry(WebDriver driver) {
		return new BalanceEnquiryPageObject(driver);
	}

	public static DeleteAccountPageObject getDeleteAccount(WebDriver driver) {
		return new DeleteAccountPageObject(driver);
	}
	public static DynamicPageObject getDynamicPage(WebDriver driver) {
		return new DynamicPageObject(driver);
	}

}
