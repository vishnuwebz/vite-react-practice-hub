import { useState } from "react";

const initialProducts = [
  { id: 1, name: "Laptop", price: 55000, qty: 1 },
  { id: 2, name: "Headphones", price: 2000, qty: 2 },
  { id: 3, name: "Keyboard", price: 1500, qty: 1 },
];

function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);

  function handleQtyChange(id, newQty) {
    const qtyNumber = Number(newQty) < 0 ? 0 : Number(newQty) || 0;

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, qty: qtyNumber } : product
      )
    );
  }

  const grandTotal = products.reduce(
    (sum, product) => sum + product.price * product.qty,
    0
  );

  return (
    <section className="page page-products">
      <h2 className="h4 mb-2">Products</h2>
      <p className="text-secondary mb-3">
        Adjust quantities and see per-item totals and grand total update instantly.
      </p>

      <div className="table-responsive">
        <table className="table table-dark table-striped table-sm align-middle">
          <thead>
            <tr>
              <th style={{ width: "8%" }}>#</th>
              <th style={{ width: "32%" }}>Product</th>
              <th style={{ width: "15%" }}>Price (₹)</th>
              <th style={{ width: "15%" }}>Quantity</th>
              <th style={{ width: "15%" }}>Total (₹)</th>
              <th style={{ width: "15%" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              const rowTotal = product.price * product.qty;

              return (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.price.toLocaleString("en-IN")}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      className="form-control form-control-sm"
                      value={product.qty}
                      onChange={(e) =>
                        handleQtyChange(product.id, e.target.value)
                      }
                    />
                  </td>
                  <td>{rowTotal.toLocaleString("en-IN")}</td>
                  <td className="text-secondary">
                    {product.qty === 0 ? "Not in cart" : "In cart"}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} className="text-end fw-semibold">
                Grand total
              </td>
              <td colSpan={2} className="fw-bold">
                ₹ {grandTotal.toLocaleString("en-IN")}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}

export default ProductsPage;
