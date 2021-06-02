describe('E2E Testing Conduit', () => {
	it('Change username and assert it has been reflected in the DOM', () => {

		cy.visit('login')

		cy.get('input[data-test="email"]').type('ipg.spg@gmail.com')

		cy.get('input[data-test="password"]').type('indra@2020')

		cy.get('button[type="submit"]').click()

		cy.url().should('not.contain', 'login')

		cy.visit('settings')

		cy.get('a[data-test="settings"]').click()

		cy.get('input[data-test="username"]').clear()

		cy.get('input[data-test="username"]').type('ihanna')

		cy.get('input[data-test="password"]').type('indra@2020')

		cy.get('button[type="submit"]').click()

		cy.get('body').contains('ihanna')


	})
})