Design and prototype a complete production-ready global travel platform called:

「کجا برم؟」
KAJA BERAM

The product must feel like a premium international travel discovery platform, not a simple tourism directory.

IMPORTANT:
This is a global product from day one.
It must support destinations throughout the entire world.

The product architecture must be designed so that every country, region, city, neighborhood, attraction, restaurant, activity, guide and travel page displays ONLY its own correct data.

==================================================
1. CORE PRODUCT CONCEPT
==================================================

KAJA BERAM helps users discover:

- Countries
- Regions / States / Provinces
- Cities
- Neighborhoods
- Tourist attractions
- Historical places
- Nature
- Beaches
- Museums
- Restaurants
- Cafes
- Shopping
- Nightlife
- Entertainment
- Family activities
- Couple activities
- Solo activities
- Photography locations
- Hidden gems
- Local experiences
- Travel guides
- Itineraries
- Nearby places

The platform must also include an intelligent AI travel planner.

Users should be able to say:

"I have 4 days in Paris, I like history and food, I don't want too much walking and my budget is medium."

The system should generate a realistic multi-day itinerary using actual destination data.

==================================================
2. CRITICAL DATA ISOLATION REQUIREMENT
==================================================

THIS IS ONE OF THE MOST IMPORTANT REQUIREMENTS.

Never use the same generic/mock destination content for multiple destinations.

For example:

/en/france/paris
must display Paris data.

/en/japan/tokyo
must display Tokyo data.

/en/turkey/istanbul
must display Istanbul data.

Opening Paris must NEVER show Istanbul.

Opening Tokyo must NEVER show Istanbul.

Opening Istanbul must NEVER show Paris.

Every destination page must have its own:

- destination ID
- unique slug
- country relationship
- region relationship where applicable
- title
- localized title
- description
- images
- gallery
- coordinates
- attractions
- restaurants
- activities
- travel information
- weather information
- best time to visit
- transportation information
- neighborhoods
- nearby destinations
- reviews
- FAQs
- SEO metadata

Do not create one reusable page containing hardcoded Istanbul information.

Instead create reusable page templates that receive destination-specific data.

Example architecture:

Country
  ↓
Region / State / Province
  ↓
City
  ↓
Neighborhood
  ↓
Attraction

Every child entity must reference its correct parent entity.

==================================================
3. UNIQUE URL / SLUG ARCHITECTURE
==================================================

Use scalable SEO-friendly URLs.

Examples:

/en
/fa

/en/france
/fa/france

/en/france/paris
/fa/france/paris

/en/japan/tokyo
/fa/japan/tokyo

/en/turkey/istanbul
/fa/turkey/istanbul

/en/france/paris/eiffel-tower
/fa/france/paris/eiffel-tower

/en/japan/tokyo/shibuya
/fa/japan/tokyo/shibuya

Never use generic URLs that cause multiple destinations to render the same content.

Use unique IDs internally and unique slugs externally.

Handle slug collisions correctly.

==================================================
4. BACKEND / DATA ARCHITECTURE
==================================================

Design the product as if it will be implemented using:

Frontend:
React
Next.js
TypeScript

Backend:
Node.js / API layer

Database:
PostgreSQL or equivalent relational database

Maps:
Google Maps / Google Maps Platform

The Figma design must reflect a real application architecture rather than a static website.

Create a clear conceptual data model for:

users
countries
regions
cities
neighborhoods
attractions
restaurants
activities
categories
images
galleries
reviews
ratings
guides
articles
itineraries
itinerary_days
itinerary_items
saved_places
saved_trips
destinations
coordinates
opening_hours
travel_information
translations

Relationships must be logical and scalable.

Example:

Country
has many Regions

Region
belongs to Country
has many Cities

City
belongs to Country
may belong to Region
has many Neighborhoods
has many Attractions
has many Restaurants
has many Activities

Attraction
belongs to City
belongs to Category
has many Images
has Coordinates
has Opening Hours
has Reviews

==================================================
5. API / DATA BEHAVIOR
==================================================

Design the application assuming APIs such as:

GET /api/countries
GET /api/countries/:slug

GET /api/cities
GET /api/cities/:slug

GET /api/countries/:countrySlug/cities/:citySlug

GET /api/cities/:citySlug/attractions

GET /api/attractions/:slug

GET /api/cities/:citySlug/restaurants

GET /api/cities/:citySlug/activities

GET /api/search

GET /api/nearby

GET /api/reviews

POST /api/itineraries

POST /api/ai/planner

The returned content must always correspond to the requested entity.

For example:

GET /api/cities/paris

must never return Istanbul data.

GET /api/cities/tokyo

must never return Paris data.

Avoid fake API behavior where every endpoint returns the same demo object.

==================================================
6. MULTILINGUAL ARCHITECTURE
==================================================

Support:

Persian
English

from the beginning.

The language switch must translate the ENTIRE application.

Not only the navigation.

Everything must change language:

- Navigation
- Hero
- Search
- Buttons
- Filters
- Country names
- City names
- Attraction names
- Descriptions
- Categories
- AI planner
- Forms
- Error messages
- Loading states
- Empty states
- Reviews
- FAQ
- Blog
- Footer
- Map-related UI
- Breadcrumbs
- Authentication
- Profile
- Saved trips
- Itineraries
- Notifications
- Validation messages

Persian:
RTL

English:
LTR

Changing the language must change the complete layout direction.

Use:

/fa/...

/en/...

Prepare the architecture for future languages:

Arabic
French
Spanish
German
Turkish
Japanese
Chinese

Do not design the application around hardcoded text.

Use localization-ready components and translation keys.

==================================================
7. DESTINATION DATA MUST BE CORRECT
==================================================

Create realistic example data for multiple destinations to demonstrate that the architecture works.

At minimum include different real-world examples such as:

Paris
Tokyo
Istanbul
London
Dubai
New York
Rome
Barcelona

Each must have visibly different:

- Hero image
- Gallery
- Description
- Attractions
- Restaurants
- Activities
- Neighborhoods
- Coordinates
- Travel information
- Categories
- Recommendations
- Itinerary suggestions

When switching from Paris to Tokyo, every relevant piece of content must update.

The purpose is to visually demonstrate proper data isolation.

==================================================
8. IMAGES
==================================================

Every important destination page must contain relevant imagery.

Paris must have Paris imagery.

Tokyo must have Tokyo imagery.

Istanbul must have Istanbul imagery.

Do NOT reuse unrelated destination images.

Country pages:
large hero image + destination imagery

City pages:
hero image + gallery + attraction images

Attraction pages:
main image + 2–5 image gallery

Restaurant pages:
restaurant imagery

Activity pages:
relevant activity imagery

Guide/article pages:
relevant editorial imagery

If an appropriate image is unavailable, use a professional category-specific placeholder.

Never use a random image from another destination.

Images should support:

- responsive sizes
- lazy loading
- optimized formats
- alt text
- SEO
- accessible descriptions

==================================================
9. HOMEPAGE
==================================================

Create a premium global homepage.

Hero:

"Where do you want to go?"

Persian version:

"کجا می‌خوای بری؟"

Search destination, city, attraction, activity.

Hero actions:

Explore destinations
Plan with AI
I don't know where to go

Sections:

- Trending destinations
- Popular cities
- Explore the world
- Best destinations this season
- Things to do
- Hidden gems
- Popular travel guides
- AI travel planner
- Nearby places
- Recently viewed
- Inspiration
- Footer

Use immersive travel photography.

==================================================
10. GLOBAL EXPLORE PAGE
==================================================

Create a global discovery experience.

Users can explore:

World
Countries
Regions
Cities
Attractions
Activities

Filters:

Nature
History
Culture
Food
Cafes
Shopping
Nightlife
Entertainment
Family
Couples
Solo
Photography
Adventure
Relaxation
Budget

Provide:

Map view
List view
Grid view

Use Google Maps-style visual language.

==================================================
11. COUNTRY PAGE
==================================================

Example:

France

Show:

- Country hero
- Overview
- Best cities
- Popular attractions
- Regions
- Things to do
- Food
- Travel tips
- Best time to visit
- Weather
- Transportation
- Popular itineraries
- Travel guides
- Map
- FAQ

All content must belong specifically to that country.

==================================================
12. CITY PAGE
==================================================

Example:

Paris

Show:

- Hero image
- City overview
- Image gallery
- Top attractions
- Things to do
- Neighborhoods
- Restaurants
- Cafes
- Shopping
- Nightlife
- Activities
- Hidden gems
- Best time to visit
- Weather
- Transportation
- Map
- Nearby places
- Suggested itineraries
- Travel guides
- Reviews
- FAQ

Use real destination-specific information.

==================================================
13. ATTRACTION DETAIL PAGE
==================================================

Example:

Eiffel Tower

Show:

- Main image
- Image gallery
- Name
- Location
- Description
- Opening hours
- Ticket information
- Duration
- Best time to visit
- Coordinates
- Google Maps
- Nearby attractions
- Restaurants nearby
- Similar places
- Reviews
- Rating
- Save button
- Add to trip
- Share
- Directions

Do not create a generic attraction page containing unrelated data.

==================================================
14. AI TRAVEL PLANNER
==================================================

Create a complete AI travel planning product.

Flow:

Step 1:
Where are you going?

Step 2:
How many days?

Step 3:
Who are you traveling with?

- Solo
- Couple
- Family
- Friends

Step 4:
Interests

Step 5:
Budget

Step 6:
Travel pace

- Relaxed
- Balanced
- Fast-paced

Step 7:
Walking preference

Step 8:
Food preferences

Step 9:
Special requirements

Then show:

"Creating your personalized trip..."

After processing:

Day 1
Day 2
Day 3
Day 4

Each day contains:

- Attractions
- Restaurants
- Activities
- Time
- Duration
- Distance
- Transportation
- Estimated cost
- Opening hours

The AI must intelligently group nearby places.

Do not place attractions randomly.

The itinerary should consider:

distance
opening hours
visit duration
location
interests
budget
pace
walking
time of day

Allow users to modify the generated itinerary.

Examples:

"Make it cheaper"

"Add more nightlife"

"Less walking"

"More historical places"

"Add local food"

==================================================
15. MAP EXPERIENCE
==================================================

Create a complete map experience.

Show:

- User location
- Destination markers
- Attraction markers
- Restaurants
- Activities
- Routes
- Walking distance
- Driving distance
- Estimated travel time

Allow:

Map/List toggle.

Clicking a marker opens a destination card.

The selected destination must correspond to the correct marker and correct entity data.

==================================================
16. NEARBY PLACES
==================================================

Create:

"Places near me"

Request location permission.

Show:

- Nearby attractions
- Restaurants
- Cafes
- Activities
- Shopping
- Hotels
- Hidden gems

Sort by:

Distance
Rating
Popularity
Category

==================================================
17. SEARCH
==================================================

Create powerful global search.

Search:

Paris
Tokyo
Istanbul
Eiffel Tower
Museums
Restaurants
Things to do
Travel guides

Autocomplete results should show:

- Destination image
- Name
- Type
- Country
- City

Search results must route to the correct entity.

Never show a Paris result that opens an Istanbul page.

==================================================
18. SAVED PLACES
==================================================

Users can save:

- Destinations
- Cities
- Attractions
- Restaurants
- Activities
- Guides

Create:

Saved Places
Saved Trips

==================================================
19. TRIP DASHBOARD
==================================================

Create a personal travel dashboard.

Show:

Upcoming trips
Past trips
Saved destinations
Itineraries
Map
Trip budget
Daily schedule

Allow editing itinerary items.

==================================================
20. REVIEWS
==================================================

Create:

- Ratings
- Reviews
- Photos
- Helpful votes
- Review sorting

Review must belong to the correct entity.

A Paris attraction review must never appear on an unrelated Tokyo attraction.

==================================================
21. BLOG / TRAVEL GUIDES
==================================================

Create an SEO-focused editorial system.

Examples:

Things to do in Paris
Best places to visit in Tokyo
Best things to do in Istanbul
3 days in Paris
Best time to visit Japan
Free things to do in London
Best neighborhoods in Barcelona

Every article must have:

- Title
- Cover image
- Author
- Date
- Reading time
- Table of contents
- Related destinations
- Related attractions
- Internal links
- FAQ
- Related articles

==================================================
22. SEO ARCHITECTURE
==================================================

Design for scalable international SEO.

Every important page should support:

- Unique title
- Meta description
- Canonical URL
- Open Graph image
- Structured data
- Breadcrumbs
- Internal linking
- Search-friendly headings
- Semantic HTML
- Indexable content

Structured data should support:

TravelDestination
TouristAttraction
Article
BreadcrumbList
FAQPage
Review
AggregateRating

Use SSR / SSG / ISR concepts suitable for Next.js.

Avoid client-only rendering for important SEO content.

==================================================
23. ADMIN / CONTENT MANAGEMENT
==================================================

Design a conceptual admin dashboard.

Admin should be able to manage:

Countries
Regions
Cities
Neighborhoods
Attractions
Restaurants
Activities
Images
Galleries
Articles
Guides
Reviews
Users
Translations
SEO metadata

Admin destination editor should clearly show:

Entity ID
Slug
Parent country
Parent region
Coordinates
Images
Gallery
Categories
Description
Translations
SEO title
Meta description
Opening hours
Contact information
Status

Include validation preventing incorrect relationships.

For example:

An attraction assigned to Paris cannot accidentally appear under Tokyo.

==================================================
24. ERROR PREVENTION
==================================================

Design proper states for:

404 destination
404 attraction
Invalid slug
Missing image
Missing translation
API failure
Loading
Empty results
Network error
Location permission denied
AI generation failure
Map loading failure

Never silently show another destination's data when requested data is missing.

If Paris data is unavailable:

show "Paris data is currently unavailable"

Do NOT display Istanbul as a fallback.

This is critical.

==================================================
25. DATA STATES
==================================================

Create UI states for:

Loading
Skeleton
Success
Empty
Error
Offline
No search results
No nearby results
AI processing
AI success
AI failure

Use skeleton loaders rather than blank screens.

==================================================
26. AUTHENTICATION
==================================================

Create:

Login
Register
Forgot password
Profile
Settings

Support:

Email
Google
Apple

User profile:

Avatar
Name
Saved places
Trips
Reviews
Preferences

==================================================
27. RESPONSIVE DESIGN
==================================================

Design:

Desktop
Tablet
Mobile

Mobile navigation should include:

Home
Explore
Search
Trips
Profile

Use mobile bottom sheets for:

Filters
Map details
Place information
AI planner steps

==================================================
28. DESIGN SYSTEM
==================================================

Create a complete reusable design system.

Include:

Typography
Colors
Spacing
Grid
Buttons
Inputs
Search bars
Cards
Destination cards
Attraction cards
Restaurant cards
Badges
Tags
Tabs
Dropdowns
Filters
Modals
Bottom sheets
Navigation
Breadcrumbs
Pagination
Map markers
Tooltips
Toasts
Skeletons
Alerts
AI components

Use Auto Layout and reusable components.

==================================================
29. VISUAL STYLE
==================================================

Visual direction:

Premium
Modern
Global
Friendly
Intelligent
Editorial
Immersive
Minimal
Trustworthy

Use:

Large high-quality travel photography
Generous whitespace
Elegant typography
Rounded professional cards
Subtle shadows
Strong visual hierarchy
Smooth micro-interactions

Avoid:

Childish design
Cheap travel-directory appearance
Excessive glassmorphism
Overloaded UI
Random gradients
Generic stock-dashboard appearance

==================================================
30. BRANDING
==================================================

Create a professional logo for:

کجا برم؟
KAJA BERAM

Explore several concepts based on:

Travel
Location
Discovery
Map
Direction
Journey

Create:

Logo
Wordmark
Icon
Favicon
Light version
Dark version

==================================================
31. ACCESSIBILITY
==================================================

Follow WCAG principles.

Ensure:

Accessible contrast
Keyboard navigation
Visible focus states
Accessible forms
ARIA labels
Alt text
Readable typography
Touch-friendly controls

RTL and LTR must both remain accessible.

==================================================
32. PERFORMANCE
==================================================

Design with implementation in mind.

Use:

Optimized images
Lazy loading
Responsive image sizes
Skeleton states
Progressive loading
Reusable components
Server-rendered SEO content

The architecture must be scalable to thousands or millions of destinations and content records.

==================================================
33. MONETIZATION
==================================================

Prepare tasteful monetization areas.

Possible:

Google AdSense
Hotel affiliate links
Flight affiliate links
Activity booking
Tours
Sponsored destinations

Ads must never destroy the user experience.

Do not place intrusive ads above the main content.

==================================================
34. IMPORTANT IMPLEMENTATION PRINCIPLE
==================================================

THIS MUST NOT BE A STATIC MOCKUP.

Design the UI as a realistic production application that can later be implemented using:

Next.js
React
TypeScript
Node.js
PostgreSQL
Google Maps
AI APIs

Reusable components must receive dynamic data.

Example conceptual component:

<CityPage city={city} />

not:

<CityPage /> containing hardcoded Istanbul information.

Example:

Paris → Paris data
Tokyo → Tokyo data
Istanbul → Istanbul data

Every page must be generated from its own entity.

==================================================
35. DEMONSTRATE THE DATA ARCHITECTURE IN THE PROTOTYPE
==================================================

Create prototype interactions demonstrating:

Paris → Paris page
Tokyo → Tokyo page
Istanbul → Istanbul page

Then demonstrate:

Paris → Eiffel Tower

Tokyo → Shibuya

Istanbul → Hagia Sophia

Each navigation must open the correct page with the correct:

Content
Images
Map
Attractions
Reviews
Recommendations
Breadcrumbs
SEO structure

This is required to prove that the design does not rely on one generic page.

==================================================
36. COMPLETE FIGMA OUTPUT
==================================================

Create a complete high-fidelity design system and prototype containing at minimum:

1. Homepage
2. Global Explore
3. Search
4. Search results
5. Country page
6. Region page
7. City page
8. Neighborhood page
9. Attraction page
10. Restaurant page
11. Activity page
12. Map view
13. Nearby places
14. AI planner introduction
15. AI planner questions
16. AI processing
17. AI recommendations
18. AI itinerary
19. Edit itinerary
20. Trip dashboard
21. Saved places
22. Saved trips
23. Login
24. Register
25. Profile
26. Settings
27. Reviews
28. Travel guides
29. Blog article
30. Destination comparison
31. Admin dashboard
32. Destination editor
33. Content management
34. Translation management
35. SEO management
36. Loading states
37. Empty states
38. Error states
39. 404
40. Mobile versions
41. Tablet versions
42. Desktop versions

==================================================
37. FINAL QUALITY REQUIREMENT
==================================================

The final result must look like a real premium international travel startup.

It should feel closer to a combination of:

Travel discovery platform
+ intelligent AI planner
+ Google Maps experience
+ travel editorial platform
+ personal trip organizer

rather than a simple tourism website.

Most importantly:

DO NOT use hardcoded shared destination content.

DO NOT show Istanbul when the user opens Paris.

DO NOT show Istanbul when the user opens Tokyo.

DO NOT reuse unrelated images.

DO NOT use generic fallback data from another city.

Every entity must have its own identity, relationships, content, images and URL.

Build the design system, page architecture, data-aware components, responsive layouts, multilingual experience, SEO structure, backend-aware architecture and complete prototype around this principle.