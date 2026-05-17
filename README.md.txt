======================================================
         LAUNDRY BOOKING SYSTEM - README
======================================================

1. PROJECT OVERVIEW
-------------------
The Laundry Booking System is a full feature-complete, client-side web application designed to manage laundry services, appointments, and customer records efficiently. It allows customers or staff to book laundry orders, track status, calculate costs dynamically, and persist data locally.

2. KEY FEATURES & FUNCTIONALITIES
---------------------------------
* User Personalization: Saves the user's name via Cookies and displays a personalized greeting upon return.
* Order Management: Create, Read, Update (Toggle Status between Pending/Done), and Delete laundry bookings.
* Real-time Pricing: Calculates service pricing automatically based on the selected service type and items quantity.
* Advanced Filtering: Group and view orders instantly based on their status (All, Pending, Done).
* Live Search: Instant filtering of orders by customer name via an asynchronous input search bar.
* Live Metrics Counter: Dynamic dashboard showing the total number of orders and aggregate total money collected.
* Dark Mode Toggle: A fully functional user preference theme switch (Light/Dark mode).
* Dynamic Location: Embedded interactive office location map for customer convenience.

3. REPOSITORY LINK
------------------
GitHub Repository: https://github.com/eman1274/Laundry-Booking-System.git

4. MANDATORY OUTLINES IMPLEMENTATION MAP
-----------------------------------------
* Outline 1: Objects & Classes -> Implemented via 'Order' Class to blueprint booking structure.
* Outline 2: Arrays & Array Methods -> Used 'orders' array alongside .push(), .filter(), .find(), and .reduce().
* Outline 3: DOM Manipulation -> Dynamic generation of HTML order cards inside 'renderOrders()' without page reload.
* Outline 4: Event Listeners -> Used strictly via '.addEventListener()' for all UI interactions (Click, Input, Load).
* Outline 5: Functions -> Mix of standard functions and ES6 Arrow functions (e.g., 'calculatePrice').
* Outline 6: localStorage -> Integrated 'loadFromLocalStorage()' and 'saveToLocalStorage()' for full data persistence.
* Outline 7: Cookies -> Used 'setCookie()' and 'getCookie()' to remember the visitor's username preference.
* Outline 8: Conditional Logic & Validation -> Input checks in 'addOrder()' to prevent empty submissions.
* Outline 9: Error Handling -> Wrapped JSON parsing inside try...catch blocks to prevent script crashes.
* Outline 10: Dynamic UI & User Feedback -> Real-time dashboard counter alerts, and confirmation pop-ups.