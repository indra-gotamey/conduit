describe('E2E Testing Conduit', () => {
	it('Sign up a new user', () => {
		cy.visit('register')

		cy.get('input[data-test="username"]').type('username501')

		cy.get('input[data-test="email"]').type('awertyasdfg@zxcvb.com')

		cy.get('input[data-test="password"]').type('password@2021')

		cy.get('button[type="submit"]').click()

		cy.get('a[data-test="logged-in-user"]').contains('username401')

		
	})
	
})



