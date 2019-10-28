package live.stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

public class TravelRegisterPageSteps {
    WebDriver driver;

    @Given("^I open Php Travel page$")
    public void iOpenPhpTravelPage() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get("https://www.phptravels.net/register");
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

    }

    @When("^I input to Register form$")
    public void iInputToRegisterForm(DataTable customerTable) {
//        |FirstName | LastName | Phone      | Email               | Password |
//        |PHan Viet | Nhan     | 0935602450 | vietnhan @gmail.com | 1231233  |
        // 1row
//        List<Map<String, String>> customer = customerTable.asMaps(String.class, String.class);
//        driver.findElement(By.xpath("//input[@name='firstname']")).sendKeys(customer.get(0).get("FirstName"));
//        driver.findElement(By.xpath("//input[@name='lastname']")).sendKeys(customer.get(0).get("LastName"));
//        driver.findElement(By.xpath("//input[@name='phone']")).sendKeys(customer.get(0).get("Phone"));
//        driver.findElement(By.xpath("//input[@name='email']")).sendKeys(customer.get(0).get("Email"));
//        driver.findElement(By.xpath("//input[@name='password']")).sendKeys(customer.get(0).get("Password"));
//        driver.findElement(By.xpath("//input[@name='confirmpassword']")).sendKeys(customer.get(0).get("Password"));
        //nhieu row
        for (Map<String, String> customerFor : customerTable.asMaps(String.class, String.class)) {
            driver.findElement(By.xpath("//input[@name='firstname']")).clear();
            driver.findElement(By.xpath("//input[@name='firstname']")).sendKeys(customerFor.get("FirstName"));
            driver.findElement(By.xpath("//input[@name='lastname']")).clear();
            driver.findElement(By.xpath("//input[@name='lastname']")).sendKeys(customerFor.get("LastName"));
            driver.findElement(By.xpath("//input[@name='phone']")).clear();
            driver.findElement(By.xpath("//input[@name='phone']")).sendKeys(customerFor.get("Phone"));
            driver.findElement(By.xpath("//input[@name='email']")).click();
            driver.findElement(By.xpath("//input[@name='email']")).sendKeys(customerFor.get("Email"));
            driver.findElement(By.xpath("//input[@name='password']")).clear();
            driver.findElement(By.xpath("//input[@name='password']")).sendKeys(customerFor.get("Password"));
            driver.findElement(By.xpath("//input[@name='confirmpassword']")).clear();
            driver.findElement(By.xpath("//input[@name='confirmpassword']")).sendKeys(customerFor.get("Password"));

        }
    }

}
