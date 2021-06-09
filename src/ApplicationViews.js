import { LocationList } from "../src/components/Locations/LocationList";
import { LocationProvider } from "../src/components/Locations/LocationProvider";
import { ProductProvider } from "../src/components/Products/ProductProvider";
import { ProductList } from "../src/components/Products/ProductList"
import { ProductTypeProvider } from "../src/components/ProductTypes/ProductTypeProvider";
import { Route } from "react-router-dom"
import { EmployeeProvider } from "./components/Employees/EmployeeProvider";
import { EmployeeList } from "./components/Employees/EmployeeList";
import { EmployeeForm } from "./components/Employees/NewEmployeeForm"
import { OrderProvider } from "./components/Orders/OrderProvider";
import { CurrentOrder } from "./components/Orders/CurrentOrder";
import { OrderItemProvider } from "./components/Orders/OrderItemProvider";


export const ApplicationViews = () => (
    (
    <>
        <LocationProvider>
            <Route exact path="/locations">
                <LocationList />
            </Route>
        </LocationProvider>
        
        <ProductProvider>
            <ProductTypeProvider>
                    <OrderItemProvider>
                        <Route exact path="/products">
                            <ProductList />
                        </Route>
                        <Route exact path="/myOrder">
                            <CurrentOrder />
                        </Route>
                    </OrderItemProvider>
            </ProductTypeProvider>
        </ProductProvider>

        <EmployeeProvider>
            <LocationProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
                <Route exact path="/employees/create">
                    <EmployeeForm />
                </Route>
            </LocationProvider>
        </EmployeeProvider>
    </>
    )
)