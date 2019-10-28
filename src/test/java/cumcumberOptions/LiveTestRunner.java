package cumcumberOptions;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features", //tro den file feature
		glue = "live/stepDefinitions",
		monochrome = true,
		plugin= {"pretty", "html:target/site/cucumber-report-default", "json:target/site/cucumber.json"},
		snippets = SnippetType.CAMELCASE,
		tags = {"@register"})

public class LiveTestRunner {
}
