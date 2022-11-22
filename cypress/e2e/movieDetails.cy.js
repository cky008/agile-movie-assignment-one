let discoverMovies;
let movie;
let casts;

describe("Movie details pgae tests", () => {
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
  });

  describe("The movie details page", () => {
    before(() => {
      cy.request(
        `https://api.themoviedb.org/3/movie/${
          discoverMovies[1].id
        }?api_key=${Cypress.env("TMDB_KEY")}`
      )
        .its("body")
        .then((movieDetails) => {
          movie = movieDetails;
        });
    });

    beforeEach(() => {
      cy.visit(`/movies/${discoverMovies[1].id}`);
    });

    it("displays the movie title, overview and genres and other details", () => {
      cy.get("h3").contains(movie.title);
      cy.get(".MuiGrid-root>.MuiTypography-h5").contains("Overview");
      cy.get(".MuiGrid-root>.MuiTypography-h5").next().contains(movie.overview);
      cy.get("ul")
        .eq(1)
        .within(() => {
          const genreChipLabels = movie.genres.map((g) => g.name);
          genreChipLabels.unshift("Genres");
          cy.get("span").each(($card, index) => {
            cy.wrap($card).contains(genreChipLabels[index]);
          });
        });
      cy.get("ul")
        .eq(2)
        .within(() => {
          cy.get("span").eq(0).contains(movie.runtime);
          cy.get("span").eq(1).contains(movie.revenue.toLocaleString());
          cy.get("span").eq(2).contains(`${movie.vote_average} (${movie.vote_count}`);
          cy.get("span").eq(3).contains(movie.release_date);
        });  
      cy.get("ul")
        .eq(3)
        .within(() => {
          const productionCountriesChipLabels = movie.production_countries.map((pc) => pc.name);
          productionCountriesChipLabels.unshift("Production Countries");
          cy.get("span").each(($card, index) => {
            cy.wrap($card).contains(productionCountriesChipLabels[index]);
          });
        });  
    });
  });

  describe("The top billed cast list", () => {
    before(() => {
      cy.request(
        `https://api.themoviedb.org/3/movie/${discoverMovies[1].id}/credits?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US`
    )
      .its("body")
      .then((response) => {
          casts = response.cast;
      });
    });

    beforeEach(() => {
      cy.visit(`/movies/${discoverMovies[1].id}`);
    });

    it("displays the correct title and casts number", () => {
      cy.get(".MuiBox-root").should("have.length", casts.length + 1);
      cy.get(".MuiGrid-root>.MuiTypography-h5").contains("Top Billed Cast");
    })

    it("navigate to the correct person's page ", () => {
      cy.get(".MuiCardContent-root").eq(0).click();
      cy.url().should("include", `/person/${casts[0].id}`)
    })

    it("displays the correct name and character of the casts", () => {
      cy.get(".MuiCardContent-root").each(($card, index) => {
        cy.wrap($card).contains(casts[index].name);
        cy.wrap($card).contains(casts[index].character);
      });
    })
  });
});