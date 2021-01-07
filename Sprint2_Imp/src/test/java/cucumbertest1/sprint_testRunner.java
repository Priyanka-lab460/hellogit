package cucumbertest1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features= "features/sample2.feature"      //Name of feature file
,glue= {"stepDefinations"}                //Name of package
,tags= {"@tag1"}
)
public class sprint_testRunner {

}
