describe('filling the brief', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    });

    it('go to the home page', function () {
        browser.get('http://www.rsp-soft.com/');
    });

    it('home page should have correct page title', function () {
        var pageTitle = browser.getTitle();
        var expectedTitle = 'Right Start Point | Software Development Company';
        pageTitle.then(result => expect(result).toBe(expectedTitle));
    });

    it('user go to brief page', function () {
        var briefButton = element(by.xpath("//a[@href='http://www.rsp-soft.com/brief/']"));
        briefButton.click();
        browser.driver.sleep(1000);
    });

    it('brief page should have correct page title', function () {
        var pageTitle = browser.getTitle();
        var expectedTitle = 'Brief - few clicks for consultation | Right Start Point | Software development company';
        pageTitle.then(result => expect(result).toBe(expectedTitle));
    });

    it('user should select type of product and go to the next page of brief', function () {
        var website_product = element(by.xpath("//label[@id='label_4_11_1']"));
        website_product.click();
        var next_button = element(by.xpath("//input[@id='gform_next_button_4_9']"));
        next_button.click();
    });

    it('user should enter phone and email into inputs', function () {
        var phone_input = element(by.xpath("//input[@id='input_4_10']"));
        phone_input.sendKeys("+38(098)765-54-21");
        var email_input = element(by.xpath("//input[@id='input_4_8']"));
        email_input.sendKeys("test@mailinator.com");
    });

    it('user should submit brief form and see confirmation', function () {
        var send_button = element(by.xpath(".//*[@id='gform_submit_button_4']"));
        send_button.click();
        browser.driver.sleep(1000);
        var success_text = element(by.xpath("//div[@class='brief-form__confirm']"));
        success_text.getText().then(function (text) {
            expect(text).toContain("Thanks for contacting us\nWe will get in touch with you shortly")
        });
    });
});
