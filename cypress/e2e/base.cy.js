let discoverMovies;
let upComingMovies;
let topRatedMovies;
let popularityPeople;

describe("Base tests", () => {
  before(() => {
    // Get the discover movies from TMDB and store them locally.
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body") // Take the body of HTTP response from TMDB
      .then((response) => {
        discoverMovies = response.results;
      });

    cy.request(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
      "TMDB_KEY"
      )}&include_adult=false&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
        upComingMovies = response.results;
      });

    cy.request(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env(
      "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
        topRatedMovies = response.results;
      });

    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
          "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
        popularityPeople = response.results;
      });

  });

  beforeEach(() => {
    cy.visit("/");
  });

  describe("The Discover Movies page", () => {
    it("displays the page header and 20 movies", () => {
      cy.get("h3").contains("Discover Movies");
      cy.get(".MuiCardHeader-root").should("have.length", 20);
    });

    it("displays the correct movie titles", () => {
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(discoverMovies[index].title);
      });
    });
  });

  describe("The UpComing Movies page", () => {
    beforeEach(() => {
      cy.get("button").contains("Movies").click();
      cy.get("li").contains("Upcoming").click();
      cy.wait(500);
    });
    it("displays the page header and 20 movies", () => {
      cy.get("h3").contains("Upcoming Movies");
      cy.get(".MuiCardHeader-root").should("have.length", 20);
    });

    it("displays the correct movie titles", () => {
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(upComingMovies[index].title);
      });
    });
  });

  describe("The Top Rated Movies page", () => {
    beforeEach(() => {
      cy.get("button").contains("Movies").click();
      cy.get("li").contains("Top Rated").click();
    });
    it("displays the page header and 20 movies", () => {
      cy.get("h3").contains("Top Rated Movies");
      cy.get(".MuiCardHeader-root").should("have.length", 20);
    });

    it("displays the correct movie titles", () => {
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(topRatedMovies[index].title);
      });
    });
  });

  describe("The Favorites page", () => {
    beforeEach(() => {
      cy.get("button").contains("Movies").click();
      cy.get("li").contains("Favorites").click();
    });
    it("displays the page header and 0 movie", () => {
      cy.get("h3").contains("Favorite Movies");
      cy.get(".MuiCardHeader-root").should("have.length", 0);
    });
  });

  describe("The Popular People page", () => {
    beforeEach(() => {
      cy.get("button").contains("People").click();
    });
    it("displays the page header and 20 persons", () => {
      cy.get(".MuiGrid-grid-sm-6 .MuiCardHeader-content").should("have.length", 20);
    });

    it("displays the correct person names and popularity", () => {
      cy.get(".MuiGrid-grid-sm-6 .MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(popularityPeople[index].name);
      });
      cy.get(".MuiGrid-grid-xs-6 p").each(($card, index) => {
        cy.wrap($card).contains(popularityPeople[index].popularity);
      });
    });
  });
});