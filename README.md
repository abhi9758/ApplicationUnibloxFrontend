# EcommerceFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Project Readme

## Overview

This Angular project consists of two main components, `CartComponent` and `OrderComponent`, managing the shopping cart and order processing functionality. The project also includes routing and services for handling cart-related operations and order management.

## Table of Contents

- [Cart Component](#cart-component)
- [Order Component](#order-component)
- [Routing](#routing)
- [Cart Service](#cart-service)
- [Order Service](#order-service)

## Cart Component

### Description

The `CartComponent` is responsible for displaying and managing the contents of the shopping cart. It utilizes the `CartService` to interact with the backend API for cart-related operations.

### Key Features

- Displays current cart contents.
- Adds a sample item to the cart.
- Checks if the cart is not empty.
- Generates a random small round image URL.

### Usage

- Access the cart component through the '/cart' route.

## Order Component

### Description

The `OrderComponent` handles order-related functionality, including displaying orders, managing pagination, and initiating the checkout process. It relies on the `OrderService` for communication with the backend API.

### Key Features

- Displays a list of all orders.
- Implements pagination for order display.
- Retrieves and displays available discount codes.
- Initiates the checkout process.
- Generates a random image URL.

### Usage

- Access the order component through the '/order' route.

## Routing

### Description

The routing module, `AppRoutingModule`, defines the routes for navigating between the `CartComponent` and `OrderComponent`.

### Key Routes

- `/order`: Displays the `OrderComponent`.
- `/cart`: Displays the `CartComponent`.

### Usage

- Update the route path as needed in the `AppRoutingModule` module.

## Cart Service

### Description

The `CartService` provides methods to interact with the backend API for cart-related operations, such as adding items to the cart and retrieving the current cart contents.

### Key Methods

- `addItemToCart(item: Item): Observable<void>`: Adds an item to the cart.
- `getCart(): Observable<any>`: Retrieves the current contents of the cart.

### Usage

- Inject `CartService` in the `CartComponent` for cart-related functionality.

## Order Service

### Description

The `OrderService` handles communication with the backend API for order-related operations, including placing orders, retrieving order lists, and fetching available discount codes.

### Key Methods

- `checkout(): Observable<void>`: Initiates the checkout process.
- `getOrders(): Observable<Order[]>`: Retrieves a list of previous orders.
- `getDiscountCodes(): Observable<string[]>`: Retrieves a list of available discount codes.

### Usage

- Utilize `OrderService` in the `OrderComponent` for order-related functionality.

## Important Note

Ensure to update the base URLs in the service files (`CartService` and `OrderService`) with the actual backend URLs before deploying the application.
