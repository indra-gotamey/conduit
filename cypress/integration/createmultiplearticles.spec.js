import LoginPage from './page-objects/LoginPage'
import ArticlePage from './page-objects/ArticlePage'

describe('E2E Testing Conduit', () => {
	it('Create multiple articles', () => {

		const login = new LoginPage()
		login.visit()
		login.fillEmail('zyziett1945@gmail.com')
		login.fillPassword('password#123')
		login.submit()
		cy.title().should('be.equal','Conduit')
		cy.url().should('not.contain', 'login')

		const article = new ArticlePage()
		article.visit()
		article.fillTitle('Captain America')
		article.fillDescription('Steve Rogers')
		article.fillBody('Captain America is a superhero appearing in American comic books published by Marvel Comics.')
		article.fillTags('captain america, marvel, superhero, first avenger')
		article.submit()
		cy.get('body').should('contain', 'Captain America')

		article.visit()
		article.fillTitle('Iron Man')
		article.fillDescription('Tony Stark')
		article.fillBody('Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics.')
		article.fillTags('iron man, marvel, superhero, scientist, philianthropist')
		article.submit()
		cy.get('body').contains('Iron Man')

		article.visit()
		article.fillTitle('The Hulk')
		article.fillDescription('Bruce Banner')
		article.fillBody('The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics.')
		article.fillTags('the hulk, incredible hulk, superhero, gamma radiation, physicist')
		article.submit()
		cy.get('body').contains('The Hulk')

		article.visit()
		article.fillTitle('Black Panther')
		article.fillDescription('T-Chala')
		article.fillBody('The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics.')
		article.fillTags('black panther, wakanda, superhero, vibranium, king')
		article.submit()
		cy.get('body').contains('Black Panther')

		article.visit()
		article.fillTitle('Thor Odinson')
		article.fillDescription('God of Thunder')
		article.fillBody('Thor Odinson is a fictional superhero appearing in American comic books published by Marvel Comics.')
		article.fillTags('thor, odinson, superhero, asgard, god of thunder, point break')
		article.submit()
		cy.get('body').contains('Thor Odinson')
	})
})