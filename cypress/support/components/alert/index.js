import { el } from './elements'

class Alert {
    haveText(expectedText) {
        cy.contains(el.message_alert, expectedText)
            .should('be.visible')
    }
}

export default new Alert()