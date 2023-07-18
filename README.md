# best-sellers

Best-Sellers is a user-friendly web application built with Next.js 13, React and Typescript.

## Overview

This application is designed to provide book enthusiasts with seamless access to The New York Times Best Sellers lists and expore books across all categories.

One of the features of this application is its a calendar integration, allowing users to delve into all-time rankings for a specific date. By selecting a date on the calendar, users can explore the best-selling books of that particular day in the past.

Moreover, this application serves as a convenient hub for book lovers, providing direct links to purchase the listed books. By simply clicking, users are seamlessly redirected to popular online retailers, ensuring a hassle-free experience when it comes to acquiring their desired reads.

This application is a tool for avid readers and literary enthusiasts seeking to stay up-to-date with the latest and greatest in the world of literature.

## Technologies

- [Node](https://nodejs.org/en/blog/release/v18.12.0) : `v18.12.0`
- [NextJs](https://nextjs.org/) : `v13.4.9`
- [React](https://react.dev/) : `v18.2.0`
- [Typescript](https://www.typescriptlang.org/) : `v5.1.6`
- [Jest](https://jestjs.io/) : `v29.6.1`

## Installation

Clone the repository or download the project files:

```bash
git clone https://github.com/freitasgouvea/best-sellers.git
```

Then navigate to the project directory:

```bash
cd best-sellers
```

And finally, install the project dependencies using npm:

```bash
npm install
```

## Usage

Before run this project, create `.env.local` file on root and introduce your [New York Times API](https://developer.nytimes.com/) key in `NEXT_PUBLIC_NYT_API_KEY` envoirment variable:

```
NEXT_PUBLIC_NYT_API_KEY=//api-key
```

### Development

Run the following command to start the development server:

```bash
npm run dev
```

The development server will start at [http://localhost:3000/](http://localhost:3000/)

### Production

Run the following command to generate an optimized version for production:

```bash
npm run build
```

And then run  the following command to start the production server:

```
npm run start
```

The  production server can be accessed at [http://localhost:3000/](http://localhost:3000/)

### Testing

If you want to execute unit tests, use the following command:

```bash
npm test
```

This will execute the test suite using Jest and the results will show in the console.

If you want to execute unit tests and see the coverage, use the following command: 

```bash
npm test:coverage
```

The results with the code coverage will show in the console.

## Contributing

Contributions to best-sellers are welcome! If you find any issues or want to enhance the project, feel free to submit a pull request.