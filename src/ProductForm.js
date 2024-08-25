import {Button, Grid, Input, Typography }from "@mui/material";
import { useState } from "react";

const ProductForm = props => {
    const [id, setId] = useState();
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState();
    const [unitprice, setUnitprice] = useState();
    const [tot, setTot] = useState();
    

    return(
    <Grid
        container
        spacing={2}
        sx={{
            backgroundColor: '#ffffff',
            marginBottom: '30px',
            display: 'block',
        }}
    >
        <Grid item xs={12}>
            <Typography component={'h1'} sx={{ color: '#000000' }}>Release Final Goods</Typography>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
        <Typography 
            component={'label'} 
            htmlFor='id'
            sx={{
                color: '#000000',
                marginRight: '20px',
                fontSize: '16px',
                width: '100px',
                display: 'block',
            }}
        >
            ID
        </Typography>
        <Input 
            type="number"
            id='id'
            name="id"
            sx={{ width: '400px' }}
            value={id}
            onChange={e => setId(e.target.value)}
            
        />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <Typography 
                component={'label'} 
                htmlFor='name'
                sx={{
                    color: '#000000',
                    marginRight: '20px',
                    fontSize: '16px',
                    width: '100px',
                    display: 'block',
                }}
            >
            Product Name
            </Typography>
            <Input 
                type="text"
                id='name'
                name="name"
                sx={{ width: '400px' }}
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <Typography 
                component={'label'} 
                htmlFor='name'
                sx={{
                    color: '#000000',
                    marginRight: '20px',
                    fontSize: '16px',
                    width: '100px',
                    display: 'block',
                }}
            >
            Quantity
            </Typography>
            <Input 
                type="number"
                id='quantity'
                name="quantity"
                sx={{ width: '400px' }}
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
            />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <Typography 
                component={'label'} 
                htmlFor='name'
                sx={{
                    color: '#000000',
                    marginRight: '20px',
                    fontSize: '16px',
                    width: '100px',
                    display: 'block',
                }}
            >
            Unit Price
            </Typography>
            <Input 
                type="number"
                id='unitprice'
                name="unitprice"
                sx={{ width: '400px' }}
                value={unitprice}
                onChange={e => setUnitprice(e.target.value)}
            />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
            <Typography 
                component={'label'} 
                htmlFor='name'
                sx={{
                    color: '#000000',
                    marginRight: '20px',
                    fontSize: '16px',
                    width: '100px',
                    display: 'block',
                }}
            >
            Total Price
            </Typography>
            <Input 
                type="number"
                id='tot'
                name="tot"
                sx={{ width: '400px' }}
                value={tot}
                onChange={e => setTot(e.target.value)}
            />
        </Grid>

        <Button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    marginLeft: '15px',
                    marginTop: '20px',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#00c6e6',
                    }
                }}
            >
                Add
            </Button>
    </Grid>
        );

}
export default ProductForm;
