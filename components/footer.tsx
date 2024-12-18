import React from 'react'
import { Phone, Mail, Globe, ChevronUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

function SiteFooter() {
  return (
    <><Card className='px-0 border ml-2 mr-2 mb-10 lg:px-20 lg:mr-10 lg:ml-20'>
      <CardHeader>
        <CardTitle>Event Details</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-bold">Venue: Taj Chandigarh, Terrace Hall</p>
        <p>Address: Block No. 9, Jan Marg, 17A, Sector 17, Chandigarh, 160017, India</p>
        <p className="mt-4 font-bold">Date & Time:</p>
        <ul className="list-disc list-inside">
          <li>Saturday, 23rd November 2024, 10 AM - 9 PM</li>
          <li>Sunday, 24th November 2024, 10 AM - 6 PM</li>
        </ul>
        <p className="mt-4 font-bold">Featured Projects:</p>
        <p>DAMAC Island, Sun City, Violet, Lagoons Views, Golf Greens, Canal Crown, Altitude DAMAC Bay</p>
        <p className="mt-4 font-bold">Exclusive Event Benefits:</p>
        <ul className="list-disc list-inside">
          <li>4% DLD Waiver</li>
          <li>Golden Visa Residency</li>
          <li>Flexible Payment Plans</li>
          <li>High ROI up to 12% & High Rental Yields</li>
          <li>0% capital gains tax on income earned</li>
        </ul>
      </CardContent>
    </Card><footer className="bg-green-700 text-white py-10 px-4 ">

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">ABOUT</h3>
            <p className="text-sm">
              Think of a compass that points you in the direction of your dreams
              rather than north. That is what Righteous Properties has to offer.
              Our group is about transformation, not just transactions. We&apos;re
              here to support you as you set out on your real estate adventure,
              resetting the compass to reflect your goals.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">CONTACT</h3>
            <address className="not-italic text-sm">
              <p className="flex items-center mb-2">
                <Globe size={16} className="mr-2" />
                Office No 2805, Level 28, Marina Plaza,
                <br />
                Dubai Marina , P O Box - 416124
              </p>
              <a href="tel:+97143679444" className="flex items-center mb-2 hover:underline">
                <Phone size={16} className="mr-2" />
                +971 43679444
              </a>
              <p className="flex items-center mb-2">
                <img src="/whatsapp-icon.png" alt="Whatsapp" className="mr-2" style={{ width: 16, height: 16 }} />
                +971 549961779
              </p>
              <a href="mailto:info@righteousproperties.ae" className="flex items-center mb-2 hover:underline">
                <Mail size={16} className="mr-2" />
                info@righteousproperties.ae
              </a>
              <a href="http://www.righteousproperties.ae" className="flex items-center mb-2 hover:underline">
                <Globe size={16} className="mr-2" />
                www.righteousproperties.ae
              </a>
            </address>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">FEATURED PROPERTIES</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src="/footer-img-2.jpg"
                  alt="The Beach Residences"
                  className="mr-2 w-25 h-25 object-cover border-none rounded-md" />
                <div>
                  <p className="font-semibold">The Beach Residences</p>
                  <p className="text-sm">Ras Al Khaimah</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="/footer-img1.jpeg"
                  alt="The Address Dubai Marina"
                  className="mr-2 w-25 h-25 object-cover border-none rounded-md" />
                <div>
                  <p className="font-semibold">
                    The Address Dubai{" "}
                    <p className="font-normal text-sm">Marina</p>
                  </p>
                  <p className="text-sm">AED 18,000,000</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">STAY IN LOOP</h3>
            <p className="text-sm mb-4">
              News and insight straight to your inbox. We don&apos;t spam.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 text-gray-800 rounded" />
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition duration-300"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-green-600 flex justify-between items-center text-sm">
          <p>© 2024, Righteous Properties. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <button className="bg-white text-green-700 p-2 rounded-full hover:bg-gray-200 transition duration-300">
              <ChevronUp size={20} />
            </button>
          </div>
        </div>
      </footer></>
  )
}

export default SiteFooter