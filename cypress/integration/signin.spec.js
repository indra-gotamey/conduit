describe('E2E Testing Conduit', () => {
	
	before(function() {
		cy.fixture('user').as('user')
	
	})

	it('Sign in programmatically', () => {
		
		cy.visit('login')

		cy.get('@user').then((user) => {
			cy.get('input[data-test="email"]').type(user.email)
			cy.get('input[data-test="password"]').type(user.password)
			cy.get('button[type="submit"]').click()
			cy.get('body').contains(user.username)
		})

	})
})