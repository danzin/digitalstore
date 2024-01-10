import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const perks = [
  {
    name: 'Instant delivery',
    icon: ArrowDownToLine,
    description: 'Get your assets delievered via e-mail in seconds'
  },
  {
    name: 'Guaranteed Quality',
    icon: CheckCircle,
    description: 'Every asset is top notch.'
  },
  {
    name: 'For the planet',
    icon: Leaf,
    description: 'For every 5 assets sold, a member of our team(1-man-team btw) plants a tree. Imagine the excercise I get.'
  },
  
]

export default function Home() {
  return (
    <>
    
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col max-w-3xl items-center'>
        <h1 className='text-4xl font-bold tracking-tight max-sm:text-6xl'><span className='text-red-500'>#1</span> marketplace for  <span className='text-red-500'>digital assets</span></h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>Welcome to the #1 marketplace for high-quality digital assets</p>
        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
          <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
          <Button variant='ghost'>Quality and promise &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>

    <section className='border-t border-gray-200 bg-gray-50'>
      <MaxWidthWrapper className='py-20'>
        <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
          {perks.map((perk) => (
            <div key={perk.name} className='text-center md:flex md:flex-start md:text-left lg:block lg:text-center'>
              <div className='md:flex-shrink-0 flex justify-center'>
                <div className='h-16 w-16 flex items-center justify-center rounded-full bg-red-100 text-red-300'>
                  {<perk.icon className='w-1/3 h-1/3'/>}
                </div>
              </div>

              <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                <h3 className='text-base font-medium text-gray-900'>{perk.name}</h3>
                <p className='mt-3 text-sm text-muted-foreground'>
                  {perk.description}
                </p>
              
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  )
}
