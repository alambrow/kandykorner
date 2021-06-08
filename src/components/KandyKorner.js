import { LocationList } from "./Locations/LocationList";
import { LocationProvider } from "./Locations/LocationProvider";
import { ProductProvider } from "./Products/ProductProvider";
import { ProductList } from "./Products/ProductList"
import { ProductTypeProvider } from "./ProductTypes/ProductTypeProvider";


export const KandyKorner = () => (
    (
    <>
        <h1>KandyKorner</h1>

        <LocationProvider>
            <LocationList />
        </LocationProvider>
        
        <ProductProvider>
            <ProductTypeProvider>
                <ProductList />
            </ProductTypeProvider>
        </ProductProvider>
    </>
    )
)