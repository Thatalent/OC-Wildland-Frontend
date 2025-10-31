import { Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material'
import { Product } from '../graphql/types'

//type alias gives new name to specific data shape and establishes type safety
type ProductCardProps = {
  //component accepts value that must conform exactly to that defined in the interface
  product: Product;
};

//tells React/TypeScript that the props for this component must match the product structure
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  //auto formats price
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);
  //check to make sure it changes

  const handleAddToCart = () => {
    console.log(`Add to cart clicked for product: ${product.name}`)
  };

  return (
    <Card variant="outlined" sx={{ width: '100%', height: 524 }} className="shadow-md">
      <CardMedia component="img" sx={{ width: '100%', height: 422 }} image={product.img.url} alt={product.name} />
      <CardContent className="pb-2" sx={{ pt: 1 }}>
        <Typography variant="body1" sx={{ fontWeight: 500, fontSize: 15.5, color: '1F262E' }}>
          {product.name}
        </Typography>


      </CardContent >
      <CardActions className="flex justify-between" sx={{ p: 2, pt: 0 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 17.72, color: '1F262E' }}>
          {formattedPrice}
        </Typography>
        <Button sx={{
          backgroundColor: '#F34E1B', '&:hover': {
            backgroundColor: '#F34E1B'
          }
        }}
          size="medium"
          variant="contained"
          onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardActions>
    </Card >
  )
}

