describe('E2E Testing Conduit', () => {
	it('Validation on sign up page', () => {

		cy.visit('register')

		cy.get('input[data-test="username"]').type('username201')

		cy.get('input[data-test="email"]').type('zyziett1945#gmail.com')

		cy.get('input[data-test="password"]').type('password#1234')

		cy.get('button[type="submit"]').click()

		cy.get('body').contains('email is invalid')
	})
})