import 'tailwindcss/tailwind.css';
import ContactForm from '../ContactForm';
import SocialMedia from '../SocialMedia';

function Footer() {
    return (
      <main>
        <ContactForm />
        <div className='flex flex-col lg:flex-row relative items-center'>
          <SocialMedia />
          <div className='border border-gray-800 border-8 font-semibold text-xl lg:mr-1/8 p-4 mb-4 h-20 lg:mt-64 mt-16 max-w-3/4'>
            Back to the Top
          </div>
          <div className='lg:absolute bottom-0 left-1/2 p-4 mt-8'>
            ©2023 Dominik Jurt
          </div>
        </div>
      </main>
    )
  }
  
  export default Footer;