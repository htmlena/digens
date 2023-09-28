import './App.css'
import DescriptionBlock from './components/DescriptionBlock/DescriptionBlock'
import Button from './components/Button/Button'
import Link from './components/Link/Link'
import Card from './components/Card/Card'

function App() {

  return (
    <main className="bg-darkBackground">
      <div className='mt-32'>
        <DescriptionBlock 
          headingElement='more than obvious' 
          heading='digital products for your brand'
          shortDescription="Our team is waiting for a new challenge, so we’re ready to make a cool brand."
         >
          <div className='mt-12 md:mt-[60px]'>
            <Button text="Get More"/>
          </div>
        </DescriptionBlock>
      </div>

      <div className='mt-32'>
        <DescriptionBlock 
          headingElement='our services' 
          heading='we develop digital products'
          shortDescription="You can discover all our services by clicking the link below."
        >
          <div className='mt-12 md:mt-[60px]'>
            <Link text='View all' />
          </div>
        </DescriptionBlock>
      </div>
    <div className='flex flex-col lg:flex-row lg:justify-center items-center gap-8'>
      <Card 
        heading='Web Development' 
        iconPath={"/src/assets/icon-blocks/icon-block-1.svg"}
        shortDescription="Our developers are carefully considering how your product should work while mainta..."
      />
      <Card 
        heading='SEO optimization' 
        iconPath={"/src/assets/icon-blocks/icon-block-2.svg"}
        shortDescription="Promotion of your product is an important step in making money and constant popula..."
      />
      <Card 
        heading='Ui/UX Design' 
        iconPath={"/src/assets/icon-blocks/icon-block-3.svg"}
        shortDescription="Everything starts with the beautiful. And professional design is of great importa..."
      />
    </div>
    </main>
  )
}

export default App
