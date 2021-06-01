import { ProductList } from "./Products/ProductList";
import { ProductProvider } from "./Products/ProductProvider";

export const KandyKorner = () => (
    <>
        <h1>KandyKorner</h1>
        <h2>Products</h2>
        <ProductProvider>
            <ProductList />
        </ProductProvider>
    </>
)