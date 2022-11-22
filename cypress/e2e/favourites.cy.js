let movies;
import { convertRating } from "../support/e2e";

describe("The favourites feature", () => {
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
  });
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Selecting favourites", () => {
    it("selected movie card shows the red heart", () => {
      cy.get(".MuiCardHeader-root").eq(1).find("svg").should("not.exist");
      cy.get("button[aria-label='add to favorites']").eq(1).click();
      cy.get(".MuiCardHeader-root").eq(1).find("svg");
    });
  });

  describe("The favourites page", () => {
    beforeEach(() => {
      // Select two favourites and navigate to Favourites page
      cy.get("button[aria-label='add to favorites']").eq(1).click();
      cy.get("button[aria-label='add to favorites']").eq(3).click();
      cy.get("button").contains("Movies").click();
      cy.get("li").contains("Favorites").click();
    });
    
    it("only the tagged movies are listed", () => {
      cy.get(".MuiCardHeader-content").should("have.length", 2);
      cy.get(".MuiCardHeader-content")
        .eq(0)
        .find("p")
        .contains(movies[1].title);
      cy.get(".MuiCardHeader-content")
        .eq(1)
        .find("p")
        .contains(movies[3].title);
    });

    it(" only the not deleted movies are listed", () => {
      cy.get("button[aria-label='remove from favorites']").eq(0).click({force:true});
      cy.get(".MuiCardHeader-content").eq(0).find("p").contains(movies[3].title);
    });

    it(" not selected movie card not show the red heart", () => {
      cy.get("button[aria-label='remove from favorites']").eq(0).click({force:true});
      cy.get(".MuiButtonBase-root").eq(0).click({force:true});
      cy.get(".MuiCardHeader-root").eq(1).find("svg").should("not.exist");
    });
  });

  describe("The review form", () => {
    beforeEach(() => {
      cy.get("button[aria-label='add to favorites']").eq(1).click();
      cy.get("button[aria-label='add to favorites']").eq(3).click();
      cy.get("button").contains("Movies").click();
      cy.get("li").contains("Favorites").click();
      cy.get("svg[data-testid='RateReviewIcon']").eq(0).click({force:true});
    });

    it("was navigated to review form from favorites page ", () => {
      cy.url().should("include", `/reviews/form`);
    })

    it("display review form correctly", () => {
      cy.get("h2").contains("Write a review");
      cy.get(".MuiTypography-root").contains(movies[1].title)
    })

    it("pop up message after submit review and after close the pop up message should back to favorites page", () => {
      const subValues = {
        author: "Kaiyu Chen",
        review: "Verrrrrrrrrrrrrrry Niccccccccce!!!!!!!!!",
        rating: convertRating(5),
      };
      cy.onSubmit(subValues);
      cy.get(".MuiAlert-message").contains("Thank you for submitting a review");
      cy.get(".MuiAlert-action>.MuiButtonBase-root").click();
      cy.url().should("include", `/favorites`);
    })

  });
});