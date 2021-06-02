class ArticlePage {

	visit(){
		cy.visit('editor')
	}
	fillTitle(value){
		const fieldArticle = cy.get('input[data-test="title"]')
		fieldArticle.clear()
		fieldArticle.type(value)
		return this
	}
	fillDescription(value){
		const fieldArticle = cy.get('input[data-test="description"]')
		fieldArticle.clear()
		fieldArticle.type(value)
		return this 
	}
	fillBody(value){
		const fieldArticle = cy.get('textarea[data-test="body"]')
		fieldArticle.clear()
		fieldArticle.type(value)
		return this
	}
	fillTags(value){
		const fieldArticle = cy.get('input[data-test="tags"]')
		fieldArticle.clear()
		fieldArticle.type(value)
		return this
	}
	submit(){
		const button = cy.get('button[type="button"]')
		button.click()
	}
}
export default ArticlePage