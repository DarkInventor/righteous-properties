// import Image from "next/image";

// export default function Home() {
//   return (
//   <>
//   <Image src="/header.png" alt="Header Image" layout="responsive" width={1920} height={1080} />
//   {/* <div > */}
//         <div className="flex h-[75vh] bg-white px-4">
//           <video autoPlay muted loop className="w-1/2 h-full">
//             <source src="/righteous-vid.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <div className="w-1/2 flex flex-col justify-center items-center space-y-4">
//             <input type="text" placeholder="First Name" className="form-input mt-1 block w-full max-w-xs rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//             <input type="text" placeholder="Last Name" className="form-input mt-1 block w-full max-w-xs rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//             <input type="email" placeholder="Email" className="form-input mt-1 block w-full max-w-xs rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//             <button className="btn btn-primary">Submit</button>
//           </div>
//         </div>
//       </>
//   );
// }


import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function ContactFormWithVideo() {
  return (
    <div>
      <Image
        src="/header.png"
        alt="Header Image"
        layout="responsive"
        width={1920}
        height={1080}
      />
      <div className="flex h-[75vh] bg-white px-4 ml-20">
        <video autoPlay muted loop className="w-[60%] h-full">
          <source src="/righteous-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="w-[400px] flex flex-col justify-center items-center ml-10">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle>How can we reach you?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="text"
                placeholder="Name"
                className="w-full"
              />
              
              <Input
                type="text"
                placeholder="Occupation"
                className="w-full"
              />
              <Input
                type="number"
                placeholder="Annual Income"
                className="w-full"
              />
              <Input
                type="email"
                placeholder="Email"
                className="w-full"
              />
               <Input
                  type="text"
                  placeholder="Contact Number"
                  className="w-full"
                />
              <div className="flex space-x-4">
                <Input
                  type="text"
                  placeholder="Property Type (e.g., House, Apartment)"
                  className="w-1/2"
                />
                <Input
                  type="text"
                  placeholder="Number of Bedrooms"
                  className="w-1/2"
                />
              </div>
              <Button className="w-full">Submit Survey</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Image
        src="/footer.png"
        alt="Header Image"
        layout="responsive"
        width={1920}
        height={1080}
      />
    </div>
  );
}
