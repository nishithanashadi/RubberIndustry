import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const ProductTable = ({ rows }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Unit Price</TableCell>
                        <TableCell>Total Price</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length > 0 ? (
                        rows.map((row) => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.quantity}</TableCell>
                                <TableCell>{row.unitprice}</TableCell>
                                <TableCell>{row.tot}</TableCell>
                                <TableCell>
                                    <Button sx={{ margin: '0px 10px' }} onClick={() => {}}>
                                        Update
                                    </Button>
                                    <Button sx={{ margin: '0px 10px' }} onClick={() => {}}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={6} align="center">
                                No data
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductTable;
