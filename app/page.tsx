import Image from 'next/image'
import Container from './components/container/Container'
import HomeBanner from './components/home/HomeBanner'
import { products } from './components/product/products'
import { TextCutter } from '@/utils/TextCutter'
import ProductCard from './components/product/productCard/ProductCard'

export default function Home() {
  return (
    <div className='p-8'>
      <Container>
        <div>
          <HomeBanner/>
        </div>

        <div className='
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8'
        >
          {products.map((product:any)=>{
            return <div>
              <ProductCard data={product}></ProductCard>
            </div>
          })}
        </div>
      </Container>
    </div>
  )
}
