package Pages;

import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Success_Page {
	WebDriver driver;
	By signup= By.xpath("//h3[text()='Welcome to OpenTable!']");
	By tas1= By.xpath("//span[text()='Terms of Service']");
	public Success_Page(WebDriver drv) {
		this.driver=drv;
	}
	public String navigateretpass() throws InterruptedException {
		String s=driver.getTitle();
		return s;
	}
	public String navigatestobook() throws InterruptedException {   
		String s=driver.getTitle();
		return s;
	}
	public String navigatestoface() throws InterruptedException {    
		String s=driver.getTitle();
		return s;
	}
	public String navigatestogoogle() throws InterruptedException {   
		String s=driver.getTitle();
		return s;
	}
	public String navigatesignUp() throws InterruptedException {
		String s=driver.findElement(signup).getText();
		return s;
	}
	public String navigatetas() throws InterruptedException {
		String s=driver.findElement(tas1).getText();
		return s;
	}
}
