import Image from 'next/image'
import Container from './components/container/Container'
import HomeBanner from './components/home/HomeBanner'

export default function Home() {
  return (
    <div className='p-8'>
      <Container>
        <div>
          <HomeBanner>

          </HomeBanner>
        </div>
      </Container>
    </div>
  )
}
