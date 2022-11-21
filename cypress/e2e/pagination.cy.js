let discoverMovies5; 

describe("Pagination tests", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=5`
    )
      .its("body")
      .then((response) => {
        discoverMovies5 = response.results;
      });
  });

  beforeEach(() => {
    cy.visit("/");
  });

  describe("The pagination bar", () => {
    it("displays with 20 movies and the pagination panel", () => {
      cy.get(".MuiGrid-grid-sm-6 .MuiCardHeader-content").should("have.length", 20);
      cy.get(".MuiPagination-ul>li>a").should("have.length", 10);
    });

    it("displays the correct selected pagination button", () => {
      cy.get(".MuiPagination-ul>li").each(($button, index) => {
        if (index == 2) {cy.get($button).find("a[aria-current='true']")}
        else {cy.get($button).find("a[aria-current='true']").should("not.exist")}
      });
    });

    it("display the correct movies in the opened page", () => {
      cy.get("a[aria-label='Go to page 5']").click();
      cy.url().should("include", `/page5`);
      cy.get(".MuiCardHeader-root").should("have.length", 20);
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(discoverMovies5[index].title);
      });
    });

    it("have 4 button for no movie situation", () => {
      cy.get("button").contains("Movies").click();
      cy.get("li").contains("Favorites").click();
      cy.get(".MuiPagination-ul>li>a").should("have.length", 4);
    });
  });    

  describe("The nagination buttons", () =>{
    it("should the previous and next button works well", () => {
      cy.get("a[aria-label='Go to page 2']").click();
      cy.get("a[aria-label='Go to previous page']").click();
      cy.url().should("include", `/page1`);
      cy.get("a[aria-label='Go to next page']").click();
      cy.url().should("include", `/page2`);
    });

    it("should the the first and last button works well", () => {
      cy.get("a[aria-label='Go to page 3']").click();
      cy.get("a[aria-label='Go to first page']").click();
      cy.url().should("include", `/page1`);
      cy.get("a[aria-label='Go to last page']").click();
      cy.url().should("include", `/page500`);
    });
  });

  describe(
    "The mobile scale", {
      viewportHeight: 960,
      viewportWidth: 480,
    },
    () => {
      it("displays 5 movies and the 4 pages button", () => {
        for (var i = 0; i < 20; i++){
          cy.get("button[aria-label='add to favorites']").eq(i).click();
        }
        cy.get("header").find("button").click();
        cy.get("li").contains('Favorites').click();
        cy.get(".MuiCardHeader-root").should("have.length", 5);
        cy.get(".MuiPagination-ul>li>a").should("have.length", 8);
      });
    }
  );
});