import { useState } from "react";

const initialProducts = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Headphones", price: 2000 },
    { id : 3,name : "Keyboard", price: 1500 },
];



function ProductsPage() {
    const [products] = useState(initialProducts);
    return (
        <section  className="page page-products">
            <h2 className="h4 mb-2">Products</h2>
            <p className="text-secondary">This page will show a list of products with quantity and totals.</p>

            <div className="table-responsive">
                <table className="table table-dark table-striped table-sm align-middle">
                    <thead>
                        <tr>
                            <th style={{ width: "10%" }} >#</th>
                            <th style={{ width: "40%" }} >Product</th>
                            <th style={{ width: "25%" }} >Price</th>
                            <th style={{ width: "25%" }} >Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                       {products.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price.toLocaleString("en-IN")}</td>
                                <td className="text-secondary">Quantity & total coming next...</td>
                            </tr>
                       ))} 
                    </tbody>

                </table>
            </div>
        </section>
    );
}

export default ProductsPage;