// import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';
import { GetProductsQuery, Product } from '../graphql/types';
import { ProductCard } from '../components/ProductCard';
import { Box, Grid, Typography } from '@mui/material'
import LoadingSpinner from '../components/LoadingSpinner';


function Store() {
  const { loading, error, data } = useQuery<GetProductsQuery>(GET_PRODUCTS);

  if (loading) return <LoadingSpinner />
  if (error) return <Typography align='center' color="error">Error: {error.message}</Typography>

  const products: Product[] = data?.products || [];

  return (
    <Box className="p-8">
      <Typography sx={{ mb: 6, fontWeight: 700, fontSize: 36 }}>
        Products
      </Typography>

      <Grid container spacing={4} >
        {products.length > 0 ? (
          products.map((product) => (
            <Grid item key={product.name} xs={12} sm={6} md={6} lg={4}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Typography variant="body1">
            No Products Available
          </Typography>
        )}
      </Grid>
    </Box>
  )
}

export default Store;
