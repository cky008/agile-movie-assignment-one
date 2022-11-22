let discoverMovies;
let reviews;
let authorList;
let excerptList;
let idList;

describe("Review pgae tests", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        discoverMovies = response.results;
      });
  });

  beforeEach(() => {
    cy.request(
      `https://api.themoviedb.org/3/movie/${
        discoverMovies[1].id
      }/reviews?api_key=${Cypress.env("TMDB_KEY")}`
    )
      .its("body")
      .then((reviewss) => {
        reviews = reviewss;
        authorList = reviews.results.map(a => a.author);
        excerptList = reviews.results.map(c => c.content);
        idList = reviews.results.map(i => i.id);
      });
    cy.visit(`/movies/${discoverMovies[1].id}`);
  });

  describe("The review overplay", () => {
    it("displays reviews header and author, excerpt and link", () => {
      cy.get(".MuiGrid-grid-xs-9>button").contains("Reviews").click();
      cy.get(".MuiTableHead-root>tr>th").contains("Author")
      cy.get(".MuiTableHead-root>tr>th").contains("Excerpt")
      cy.get(".MuiTableHead-root>tr>th").contains("More")
      cy.get(".MuiTableBody-root>tr>th").each(($card, index) => {
        cy.wrap($card).contains(authorList[index]);
        cy.wrap($card).next().contains(excerptList[index].substring(0,10));
      });
    })

    it("displays reviews header and nothing for empty review", () => {
      cy.visit(`/movies/41413`);
      cy.get(".MuiGrid-grid-xs-9>button").contains("Reviews").click();
      cy.get(".MuiTableHead-root>tr>th").contains("Author")
      cy.get(".MuiTableHead-root>tr>th").contains("Excerpt")
      cy.get(".MuiTableHead-root>tr>th").contains("More")
      cy.get(".MuiTableBody-root>tr").should("have.length", 0);
    })
  });

  describe("The review detail page", () => {
    beforeEach(() => {
      cy.visit(`/movies/${discoverMovies[1].id}`);
      cy.get(".MuiGrid-grid-xs-9>button").contains("Reviews").click();
      cy.get(".MuiTableBody-root>tr>td>a").contains("Full Review").eq(0).click();
    });

    it("navigate to the review detail page and displays the author and review content", () => {
      cy.wait(500);
      cy.url().should("include", `/reviews/${idList[0]}`);
      cy.get("p").eq(0).contains(authorList[0]);
      cy.get("p").eq(1).contains(excerptList[0].substring(0,100));
    })
  });

});