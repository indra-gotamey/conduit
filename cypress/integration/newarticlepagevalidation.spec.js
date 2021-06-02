describe('E2E Testing Conduit', () => {
	it('Validation on creating a new article page', () => {

		cy.visit('login')

		cy.get('input[data-test="email"]').type('zyziett1945@gmail.com')

		cy.get('input[data-test="password"]').type('password#123')

		cy.get('button[type="submit"]').click()
			
		cy.url().should('not.contain', 'login')
			
		cy.visit('editor')

		cy.get('a[data-test="new-article"]').click()
		
		cy.get('button[type="button"]').click()

		cy.get('body').contains("title can't be blank,is too short (minimum is 1 character)")
		

		
		
	})
})