
# What's for Dinner? :yum: #
A beautiful brainchild of our customer Finn Lucas, this app makes mealtime easier for the busy & overwhelmed consumers.
<!--
> This material was originally posted [here](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management). It is reproduced here for posterities sake.

There is an approach called "working backwards" that is widely used at Amazon. They work backwards from the customer, rather than starting with an idea for a product and trying to bolt customers onto it. While working backwards can be applied to any specific product decision, using this approach is especially important when developing new products or features.

For new initiatives a product manager typically starts by writing an internal press release announcing the finished product. The target audience for the press release is the new/updated product's customers, which can be retail customers or internal users of a tool or technology. Internal press releases are centered around the customer problem, how current solutions (internal or external) fail, and how the new product will blow away existing solutions.

If the benefits listed don't sound very interesting or exciting to customers, then perhaps they're not (and shouldn't be built). Instead, the product manager should keep iterating on the press release until they've come up with benefits that actually sound like benefits. Iterating on a press release is a lot less expensive than iterating on the product itself (and quicker!).

If the press release is more than a page and a half, it is probably too long. Keep it simple. 3-4 sentences for most paragraphs. Cut out the fat. Don't make it into a spec. You can accompany the press release with a FAQ that answers all of the other business or execution questions so the press release can stay focused on what the customer gets. My rule of thumb is that if the press release is hard to write, then the product is probably going to suck. Keep working at it until the outline for each paragraph flows.

Oh, and I also like to write press-releases in what I call "Oprah-speak" for mainstream consumer products. Imagine you're sitting on Oprah's couch and have just explained the product to her, and then you listen as she explains it to her audience. That's "Oprah-speak", not "Geek-speak".

Once the project moves into development, the press release can be used as a touchstone; a guiding light. The product team can ask themselves, "Are we building what is in the press release?" If they find they're spending time building things that aren't in the press release (overbuilding), they need to ask themselves why. This keeps product development focused on achieving the customer benefits and not building extraneous stuff that takes longer to build, takes resources to maintain, and doesn't provide real customer benefit (at least not enough to warrant inclusion in the press release).
 -->

## Summary ##
  This web-app is made for individuals who experience any of the following:
  1. Exhausted from long days of work, yet still hungry at meal-time
  2. Your fridge/pantry has lots of ingredients, yet your brain is too tired to come up with a meal idea
  3. You're too tired to even peruse your ingredients, and just want a recipe given based on previously logged ingredients

  If ANY of the above applies to you, ANY day of the week - this app is the solution to your decision making problems for dinner!

## Problem this App Solves ##
  Mental fatigue experienced by consumers by taking the meal-making decisions off their 'plate'! :sleepy:

## Solution this App Provides ##
  With just a few button clicks, our app allows the consumer to store (add, update & delete) the ingredients found in their fridge/pantry and automatically receive recipe recommendations based on these stored ingredients. :fork_and_knife:

## Quote from the Creators ##
  "'What's for Dinner' - removing the tough decision making from your 'plate' of to-do's, to make the plating of tasty & nutritious food easy & possible!" - Brain Child: Finn Lucas | Developers: Mikka Tully, Meagan Provencher, David Harbin, James Moore, Phong Trinh :wave:

## How to Get Started ##
  1. Navigate to the webapp
  2. Create/Login to your user account
  3. Navigate to the Fridge/Pantry page:
      * Ensure your fridge/pantry ingredients lists are accurate
  4. Navigate to the Recipes page:
      * See recipes laid out based on your fridge/pantry ingredients
  5. Choose a recipe to make a delicious meal with the ingredients you already have!
  6. Make dinner, relax and pat yourself on the back for using such a helpful, wonderful, well thought-out app :smiley:

## Quote from a Satisfied Customer ##
  "I'm a busy person, juggling a million tasks throughout my day - mealtime has always felt like a hassle... until the creation of 'What's for dinner'! This has changed how I view mealtime - it's now easy, fun and ensures I don't skip meals out of exhaustion." - Ezma Gronk

## What Should You Do Next? ##
  What are you waiting for? Open the app and start enjoying meal prep again!


=======
# :bowtie: Pertinent info for developers:

# What's for Dinner?
Welcome to What's for Dinner’s meal helper web-app! Thank you for taking an interest in our code. What's for Dinner is a Javascript library used to make mealtime easier for the modern person and their busy lives. Peruse the below topics to aid you in getting started working with this repo.
***

## Using this Repo
You will find inside a breakdown of how we organized, created, and designed each feature on our meal helper web-app. Our folders are a good starting point to gain clarity into the organization and structure of our app. Within these folders is where you will find the code and styling related to the individual components and the features of these components.

## Getting a Copy of this Repo
If you haven’t already, please fork the repository on GitHub and clone your newly created repo down to your computer (then comes the fun part– exploring & learning)!

## Installation
Use the package manager npm to install all necessary dev dependencies for our repo – run the following terminal command: `npm install`
To make development easier we’ve:
  * Added nodemon as an npm start script. To automatically restart the node application when file changes in the directory are detected, run the following terminal command:`npm start`.
  * Add webpack development mode as an npm start script. To automatically have webpack watch for and bundle changes, run the following terminal command: `npm run build:dev`.

## API Configuration
Inside the 'database' folder, update `config.example.js` to be `config.js` and add your Postgres information to `module.exports`.


## Testing
To run the testing files, run the following terminal command:`npm run test`

## Authors
- Meagan Provencher
- David Harbin
- Mikka Tully
- Phong Trinh
- James Moore


# Testing info:

- [React/Jest Testing](https://www.robinwieruch.de/react-testing-jest)
- [Jest Docs](https://jestjs.io/docs/getting-started)
- [React Testing Docs](https://testing-library.com/docs/react-testing-library/api/)
- [Quick Tutorial:](https://www.youtube.com/watch?v=3e1GHCA3GP0)
