# Woodland AI

Simple fullstack study project that might grow to a larger app over time. The primary purpose is to improve my skills with ReactJS, NextJS and specifically native state management, without the use of any additional libraries. As complexity and scale grows, I will likely change this basic structure and incorporate several libraries.

The application itself is an AI project for a board game. AI here means a set of fixed logic in a weighted decision tree, no deep learning involved. Users will be able to create AI opponents to play against from pre-determined list of possible settings. A list of a user's created bots can be viewed in their profile. Later, users will be able to play a game in a simplified UI. Game rules will be enforced, players can play solo or against any bots they created. After each game, basic statisics will be stored in the database, the user will have the option to download a log file containg detailed data about each turn of the game. All users will have access to the aggregated global statistics.

### Tech Stack

- Frontend: ReactJS+NextS (+dotenv)
- Backend: NodeJS+Tabidoo API(due to remote development needs) - to be replaced by NestJS and TypeORM later.

## Planned initial features

- Layouts, Sidebars. Correct Sidebar can be selected for each page separately, changed and some Sidebars can be filled with a list of other components depending on state
- Only basic game board, no rules no logic. Extremely limited functions can be controlled from a few example Sidebar components.
- Placeholder AI creation form stores created fake bots in a database
- List of AI's for a hardcoded user can be retrieved from db, viewed, sorted, filtered and deleted.

## Planned advanced content

- Functions enforcing game actions like movement or combat are created
- A game can be setup, the board is populated with game pieces of a single faction
- All possible actions for this faction can be controlled by the user from the Sidebar, which is now connected to game logic and follows turn structure.
- Victory conditions are checked after every user action, game ends as soon as condition is met, player is ejected with a static message
- AI faction can play the game, but will have always the same hardcoded setup and turns
- Deck of cards only contains card colors which factions need to interact, no card effects

## Planned expert content

-A single AI faction has fully defined logic for all tactical states
-First default bot for this faction is created, users can create new ones and select them during game setup
-Bots now play the game independently, following a weighted decision tree
-Deck now has all card effects
-full advanced game setup is enabled

## Possible full scope of the app

-All factions have a default bot and presets enabling bot creation by users
-New maps can be defined and selected during game setup
-Game stats are stored in a database, aggregates can be accessed by users
-Users can download a log file and "replay" a game from a log file.
-Bots can now play against only other bots a set number of times up to a 1000. Aggregated session stats are then stored for the user.
-Landmarks are implemented
-User authentication and authorization is added, new users can now actually create their accounts
-Optionally, if given permission by Leder Games, the whole project will be published and made available to the public. Otherwise, select few friends will be given access.
