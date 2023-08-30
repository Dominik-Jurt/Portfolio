

import 'tailwindcss/tailwind.css';
import Image from 'next/image'
import Header from './components/pageContainers/Header'
import ContactForm from './components/ContactForm';
import SocialMedia from './components/SocialMedia';

export default function Home() {
  return (
    <main className="min-h-screen">
  {/* Add content here */}
  <div className="h-96 bg-gray-200"></div>
  <div className="h-96 bg-gray-300"></div>
  <div className="h-96 bg-gray-400"></div>
  {/* ... Repeat as many times as needed */}
</main>
  )
}
