import BasePage from './basePage'

class HomePage extends BasePage {

    get pageUrl() { return "signup/personal" }

    get userName() { return this.waitForInputElement('//input[@name="userName"]') }

    get password() { return this.waitForInputElement('//input[@name="password"]') }

    get login() { return this.waitForClickElement('//input[@name="login"]') }

    inputUserName(value) {
        this.userName.addValue(value)
        return this
    }

    inputPassword(value) {
        this.password.addValue(value)
        return this
    }

    clickLogin() {
        this.login.click()
    }

}

export default new HomePage()