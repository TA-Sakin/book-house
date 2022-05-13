# Book Store

[Book Store](https://book-store-8d028.web.app/) is inventory management website where you can manage your store's book. It is a full-stack project build using `React`, `Firebase`, `NodeJS`, `Express`,`Mongodb` and `JWT`

### Description
1. There aare six sections in the homepage, `banner`,`about`,`popular books`, `contact` and `footer`.
2. Maximum six popular books are shown on homepage with name, price, button etc. If you click the `Update Stock` button it will to take you to the `inventory/id` page if you are logged in. Here you can update the book's stock.
3. I have use `firebase authentication` for register and login. `Manage Books`, `My Book`, `Add Book` route will appear upon login.
4. On the `Manage Books` page you will find all the available books rendered from `mongdb`. Here you can `delete` or `update` book. Also You can `add new book` from here.
5. On `My Book` page, you can see all books you added in the inventory. The data on this route has been secured using `JWT`.