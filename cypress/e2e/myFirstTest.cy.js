describe('template spec', () => {

  beforeEach(()=>{
    cy.visit("http://localhost:3001/")
  })

  it("Counter is present or not",()=>{   
    cy.get("h1").eq(0).should("have.text","Counter: 0")
    cy.get(".reduce-button").should("have.text","Reduce")
    cy.get(".add-button").should("have.text","Add")
    // cy.get("[data-testid="add-button"]").should("have.text","Add")
  })

  it("Onclicking Add button value increase",()=>{
    // cy.visit('http://localhost:3000/')
    cy.get('h1').eq(0).should('have.text',"Counter: 0")
    cy.get(".add-button").click();
    cy.get('h1').eq(0).should('have.text',"Counter: 1")
    cy.get(".add-button").click();
    cy.get('h1').eq(0).should('have.text',"Counter: 2")
  })

  it("Onclicking Reduce button value decrease",()=>{
    // cy.visit("http://localhost:3000/")
    cy.get('h1').eq(0).should('have.text',"Counter: 0")
    cy.get('.reduce-button').click();
    cy.get('h1').eq(0).should('have.text',"Counter: -1")
    cy.get('.reduce-button').click();
    cy.get("h1").eq(0).should('have.text',"Counter: -2")
  })
})

describe("Testing input element",()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3001/')
  })

  it("Input tag Should present with auto-focus ",()=>{
    cy.get('input[type="text"]').should('have.focus');
  })

  it("It should type into the input and verify the value",()=>{
    const typedValue="Hey Welcome!";
    cy.get('.input-class')
    .type(typedValue)
    .should('have.value',typedValue)
  })
})

describe("Form Submission Tests",()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3001/')
  })

  it('should add a new element to the list on form submission', () => {
    const typedText = 'New Item';
    cy.get('.form-input').type(typedText);
    cy.get('form').submit();
    cy.get('.list-item').should('have.length', 1);
    cy.get('.list-item').should('contain', typedText);
  });

  // it('should show error message on form submission error', () => {
  //   cy.intercept('POST', '/api/submit', {
  //     statusCode: 500,
  //     body: {},
  //   });
  //   cy.get(".form-input").type('Error Test');
  //   cy.get('form').submit();
  //   cy.get('.error').should('be.visible');
  // });

  it('should make API requests on form submission', () => {
    cy.intercept('POST', '/api/submit', { text: 'Mocked Item' });
    const typedText = 'Mock Test';
    cy.get('.form-input').type(typedText);
    cy.get('form').submit();
    cy.get('.list-item').should('have.length', 1);
    cy.get('.list-item').should('contain', typedText);
  });
})