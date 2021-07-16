HOME
-- UX video


RECIPES
-- RECIPE CARD
  -- Favoriting Recipes
    -- Add favorite button to cards
    -- Event Handler to make front end post request to server to add to db (back end server routing and db tables already set up, need to be tested)
-- RECIPE LIST (CARDS)
  -- Favoriting Recipes
    -- Favorites tab vs Search results tab?
  -- Additional Filtering Options:
    -- Diet Options (.dietLabels)
    -- Dish Type (.dishType)
    -- Meal Type (.mealType)
    -- Total Time (.totalTime)
    -- Yield (.yield)
  -- Ability to select app and have displayed internally
    -- Web scrape recipe? display with:
      -- Checkable checklist for ingredients
      -- Built in timer?
      -- Ability to click button to remove items used in recipe from inventory
  -- Search by food to expire soonest **


STORAGE
-- ADD INGREDIENT MODAL
  -- Adding additional information about item
    -- Weight (.weight) OR Quantity
    -- Food Category
    -- Date purchased
      -- Can use food expiration api to note when foods will go bad **
    -- Perishable
  -- Bulk add
  -- QR scanner? For mobile version


-- INVENTORY LIST WIDGET
  -- When ingredients have been selected but api response not received yet, display spinner
  -- When ingredients selected but no results, show current page
  -- Button to randomly pair ingredients (possibly based on certain filter, like meal type, or expiration date) and search for recipes


OTHER
- placing logo next to centered tag line
- Making tag line look better
- making single page? inventory/recipes on split page?
- Mobile formatting, mobile view detection
- iphone/android app
