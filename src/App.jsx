import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import productsData from "./data/productsData";

import Home from "./components/Home";
import AppLayout from "./components/AppLayout";
import ProductList from "./components/ProductList";
import ProtectedRoute from "./components/ProtectedRoute";

import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [products, setProducts] = useState(productsData);
  const categories = [...new Set(products.map((product) => product.category))];

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      const updatedProducts = products.filter(
        (product) => product.id !== parseInt(id)
      );
      setProducts(updatedProducts);
    }
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="home" replace />} />
            <Route
              path="home"
              element={<Home products={products} categories={categories} />}
            />
            <Route
              path="products"
              element={
                <ProductList products={products} onDelete={handleDelete} />
              }
            />
            <Route
              path="products/:id"
              element={
                <ProductPage products={products} onDelete={handleDelete} />
              }
            />
            <Route
              path="products/:id/edit"
              element={
                <EditProductPage
                  products={products}
                  setProducts={setProducts}
                />
              }
            />
            <Route
              path="add-product"
              element={
                <AddProductPage products={products} setProducts={setProducts} />
              }
            />
          </Route>

          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
