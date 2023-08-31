import 'tailwindcss/tailwind.css';
import ContactForm from '../ContactForm';
import SocialMedia from '../SocialMedia';

function Footer() {
    return (
      <main>
        <ContactForm />
        <div className='flex relative'>
          <SocialMedia />
          <div className='absolute bottom-0 left-1/2 p-4'>
            ©2023 Dominik Jurt
          </div>
          <div className='border border-gray-800 border-8 font-semibold text-xl absolute right-96 bottom-0 p-4 mb-4'>
            Back to the Top
          </div>
        </div>
      </main>
    )
  }
  
  export default Footer;