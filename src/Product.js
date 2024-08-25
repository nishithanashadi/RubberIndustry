import { Box } from "@mui/material";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";  // Ensure the path is correct

const Product = () => {

const Products = [
    {
        id: 1,
        name: "Product 1",
        quantity: 100,
        unitprice: 50,
        tot: 100
    },
    {
        id: 2,
        name: "Product 2",
        quantity: 200,
        unitprice: 70,
        tot: 9000
    }
];


    return (
        <Box 
            sx={{
                width: 'calc(100% - 100px)',
                margin: 'auto',
                marginTop: '100px',
            }}
        >
            <ProductForm />
            <ProductTable rows={Products} />
        </Box>
    );
};

export default Product;
