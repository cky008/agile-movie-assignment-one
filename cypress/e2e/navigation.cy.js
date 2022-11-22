let movies;
let movieId; // Enola Holmes movie id
let people;

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });

    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
          "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
          people = response.results;
      });

  });
  beforeEach(() => {
    cy.visit("/");
  });
  describe("From the home page to movie's details page", () => {
    it("navigates to the movie details page and change browser URL", () => {
      cy.wait(500);
      cy.get(".MuiCardActions-root").eq(1).contains("More Info").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
    });
  });
  describe("From the people page to a person's details page", () => {
    it("navigates to the person details page and change browser URL", () => {
      cy.visit("/person/page1");
      cy.wait(500);
      cy.get(".MuiCardActions-root").eq(1).contains("More Info").click();
      cy.url().should("include", `/person/${people[1].id}`);
    });
  });
  describe("The site header", () => {
    describe("when the viewport is desktop scale", () => {
      beforeEach(() => {
        cy.visit("/");
      });
      it("navigation via the links to home page", () => {
        cy.get(".MuiButtonBase-root").eq(0).click();
        cy.url().should("include", `/`);
      });
      it("navigation via the links to favorites page", () => {
        cy.get(".MuiButtonBase-root").eq(1).click();
        cy.get(".MuiMenuItem-root").eq(0).click();
        cy.url().should("include", `/favorites`);
      });
      it("navigation via the links to upcoming page", () => {
        cy.get(".MuiButtonBase-root").eq(1).click();
        cy.get(".MuiMenuItem-root").eq(1).click();
        cy.url().should("include", `/upcoming`);
      });
      it("navigation via the links to top rated page", () => {
        cy.get(".MuiButtonBase-root").eq(1).click();
        cy.get(".MuiMenuItem-root").eq(2).click();
        cy.url().should("include", `/toprated`);
      });
      it("navigation via the links to people page", () => {
        cy.get(".MuiButtonBase-root").eq(2).click();
        cy.url().should("include", `/person`);
      });
      it("navigation via the links to log in", () => {
        cy.get(".MuiButtonBase-root").eq(3).click();
        cy.url().should("include", `/login`);
      });
    });
    describe(
      "when the viewport is a mobile scale",
      {
        viewportHeight: 896,
        viewportWidth: 414,
      },
      () => {
        it("navigation via the dropdown menu", () => {
          cy.get(".MuiButtonBase-root").eq(0).click();
          cy.get(".MuiMenuItem-root").eq(1).click();
          cy.url().should("include", `/favorites`);
          cy.get(".MuiMenuItem-root").eq(2).click();
          cy.url().should("include", `/upcoming`);
          cy.get(".MuiMenuItem-root").eq(3).click();
          cy.url().should("include", `/toprated`);
          cy.get(".MuiMenuItem-root").eq(4).click();
          cy.url().should("include", `/person`);
          cy.get(".MuiMenuItem-root").eq(5).click();
          cy.url().should("include", `/login`);
          cy.get(".MuiMenuItem-root").eq(0).click();
          cy.url().should("include", `/`);
        });
      }
    );
  });
  describe("From the favourites page to a movie's details", () => {
    beforeEach(() => {
      // Select two favourites and navigate to Favourites page
      cy.get("button[aria-label='add to favorites']").eq(1).click();
      cy.get("button[aria-label='add to favorites']").eq(3).click();
      cy.get(".MuiButtonBase-root").eq(1).click();
      cy.get(".MuiMenuItem-root").eq(0).click();
      cy.wait(500);
    });
    it("should navigate to the movie details page.", () => {
      cy.get(".MuiCardActions-root").eq(0).contains("More Info").click({force: true});
      cy.url().should("include", `/movies/${movies[1].id}`);
    });
  });
  describe("The forward/backward links", () => {
    beforeEach(() => {
      cy.get(".MuiCardActions-root").eq(0).contains("More Info").click({force:true});
      cy.wait(500);
    });
    it("navigates between the movies detail page and the Home page.", () => {
      cy.get("svg[data-testid='ArrowBackIcon'").click({force:true});
      cy.url().should("not.include", `/movies/${movies[0].id}`);
      cy.get("svg[data-testid='ArrowForwardIcon'").click({force:true});
      cy.url().should("include", `/movies/${movies[0].id}`);
    });
  });
});
