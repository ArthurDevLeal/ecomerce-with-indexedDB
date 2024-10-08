# Shopping Cart Page

This component is a **React** page that integrates with **IndexedDB** to provide a persistent shopping cart experience. Users can add, remove, and update products, and the cart's contents are automatically saved and synchronized across sessions.

## Features

- **Persistent Shopping Cart**: Cart data is stored in **IndexedDB**, allowing users to maintain their cart contents across page reloads.
- **Add and Remove Products**: Users can add items from a product list, update quantities, and remove items from the cart.
- **Dynamic Cart Display**: The cart menu can be toggled open and closed. When opened, the current items in the cart are displayed along with their quantities.
- **Loading State**: Displays a loading spinner while fetching data from **IndexedDB**.
- **Product List Rendering**: Renders a list of products with buttons to add them to the cart.

## Usage

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the App**:
   ```bash
   npm run dev
   ```

3. **View Products**: The product list will render on the main page. You can click the add button to add items to the cart.

4. **View and Manage Cart**: Open the shopping cart by clicking the toggle button. Inside the cart, you can update quantities or remove items.


## Notes

- The cart syncs across sessions using **IndexedDB**.
