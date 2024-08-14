// "use client";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import React from "react";
// import NavBar from "@/components/navbar";
// import SiteFooter from "@/components/footer";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";

// const investmentOptions = [
//   {
//     value: "2,50,000-5,00,000",
//     label: "2,50,000 - 5,00,000 AED",
//   },
//   {
//     value: "5,00,000-10,00,000",
//     label: "5,00,000 $ - 10,00,000 AED",
//   },
//   {
//     value: "10,00,000-15,00,000",
//     label: "10,00,000 - 15,00,000 AED",
//   },
//   {
//     value: "20,00,000-more",
//     label: "20,00,000 $ AED & more",
//   },
// ];

// const investmentTypes = [
//   {
//     value: "apartments",
//     label: "Apartments",
//   },
//   {
//     value: "town-house",
//     label: "Town House",
//   },
//   {
//     value: "villa",
//     label: "Villa",
//   },
//   {
//     value: "commercial",
//     label: "Commercial",
//   },
// ];

// export default function ContactFormWithVideo() {
//   const [openInvestment, setOpenInvestment] = React.useState(false);
//   const [openType, setOpenType] = React.useState(false);
//   const [selectedInvestment, setSelectedInvestment] = React.useState<{ value: string; label: string; } | null>(null);
//   const [selectedInvestmentType, setSelectedInvestmentType] = React.useState<{ value: string; label: string; } | null>(null);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <NavBar />

//       <div className="flex-grow mb-10 mt-10">
//         <div className="flex flex-col md:flex-row h-full bg-white px-4 mx-auto space-y-8 md:space-y-0 md:space-x-10">
//           <div className="md:w-[60%] w-full mx-auto">
//             <video autoPlay muted loop playsInline className="w-full h-full">
//               <source src="/righteous-vid.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//           <div className="w-full md:w-[400px] flex flex-col justify-center items-center mx-auto">
//             <Card className="w-full max-w-lg mr-0 ml-0 lg:ml-10 lg:mr-20">
//               <form action="https://submit-form.com/oZnCQKeCf" className="space-y-4">
//                 <CardHeader>
//                   <CardTitle>How can we reach you?</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <Input type="text" placeholder="Name" name="name" className="w-full" required />
//                   <Input type="email" placeholder="Email" name="email" className="w-full" required />
//                   <div className="my-4">
//                     <Popover open={openInvestment} onOpenChange={setOpenInvestment}>
//                       <PopoverTrigger asChild>
//                         <Button className="w-full justify-start bg-white text-gray-500 border">
//                           {selectedInvestment ? selectedInvestment.label : "+ Select Investment Range"}
//                         </Button>
//                       </PopoverTrigger>
//                       <PopoverContent className="p-0" side="bottom" align="start">
//                         <Command>
//                           <CommandInput placeholder="Select range..." />
//                           <CommandList>
//                             <CommandEmpty>No results found.</CommandEmpty>
//                             <CommandGroup>
//                               {investmentOptions.map((option) => (
//                                 <CommandItem
//                                   key={option.value}
//                                   value={option.value}
//                                   onSelect={(value) => {
//                                     setSelectedInvestment(
//                                       investmentOptions.find(
//                                         (opt) => opt.value === value
//                                       ) || null
//                                     );
//                                     setOpenInvestment(false);
//                                   }}
//                                 >
//                                   {option.label}
//                                 </CommandItem>
//                               ))}
//                             </CommandGroup>
//                           </CommandList>
//                         </Command>
//                       </PopoverContent>
//                     </Popover>
//                     <input type="hidden" name="investment-range" value={selectedInvestment ? selectedInvestment.value : ''} />
//                   </div>
//                   <div className="my-4">
//                     <Popover open={openType} onOpenChange={setOpenType}>
//                       <PopoverTrigger asChild>
//                         <Button className="w-full justify-start bg-white text-gray-500 border">
//                           {selectedInvestmentType ? selectedInvestmentType.label : "+ Select Investment Type"}
//                         </Button>
//                       </PopoverTrigger>
//                       <PopoverContent className="p-0" side="bottom" align="start">
//                         <Command>
//                           <CommandInput placeholder="Select type..." />
//                           <CommandList>
//                             <CommandEmpty>No results found.</CommandEmpty>
//                             <CommandGroup>
//                               {investmentTypes.map((type) => (
//                                 <CommandItem
//                                   key={type.value}
//                                   value={type.value}
//                                   onSelect={(value) => {
//                                     setSelectedInvestmentType(
//                                       investmentTypes.find(
//                                         (opt) => opt.value === value
//                                       ) || null
//                                     );
//                                     setOpenType(false);
//                                   }}
//                                 >
//                                   {type.label}
//                                 </CommandItem>
//                               ))}
//                             </CommandGroup>
//                           </CommandList>
//                         </Command>
//                       </PopoverContent>
//                     </Popover>
//                     <input type="hidden" name="investment-type" value={selectedInvestmentType ? selectedInvestmentType.value : ''} />
//                   </div>
//                   <Input type="text" placeholder="Contact Number" name="contact-number" className="w-full" />
//                   <div className="flex space-x-4">
//                     <Input
//                       type="text"
//                       placeholder="Property Type (e.g., House, Apartment)"
//                       name="property-type"
//                       className="w-1/2"
//                     />
//                     <Input
//                       type="text"
//                       placeholder="Number of Bedrooms"
//                       name="bedrooms"
//                       className="w-1/2"
//                     />
//                   </div>
//                   <Button type="submit" className="w-full hover:bg-primary/80">Submit Survey</Button>
//                 </CardContent>
//               </form>
//             </Card>
//           </div>
//         </div>
//       </div>

//       <SiteFooter />
//     </div>
//   );
// }






"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/navbar";
import SiteFooter from "@/components/footer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const investmentOptions = [
  {
    value: "2,50,000-5,00,000",
    label: "2,50,000 - 5,00,000 AED",
  },
  {
    value: "5,00,000-10,00,000",
    label: "5,00,000 $ - 10,00,000 AED",
  },
  {
    value: "10,00,000-15,00,000",
    label: "10,00,000 - 15,00,000 AED",
  },
  {
    value: "20,00,000-more",
    label: "20,00,000 $ AED & more",
  },
];

const investmentTypes = [
  {
    value: "apartments",
    label: "Apartments",
  },
  {
    value: "town-house",
    label: "Town House",
  },
  {
    value: "villa",
    label: "Villa",
  },
  {
    value: "commercial",
    label: "Commercial",
  },
];

export default function ContactFormWithVideo() {

  const [openInvestment, setOpenInvestment] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [selectedInvestment, setSelectedInvestment] = useState<{ value: string; label: string; } | null>(null);
  const [selectedInvestmentType, setSelectedInvestmentType] = useState<{ value: string; label: string; } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
  
    const formData = {
      // @ts-ignore
      Name: event.currentTarget.name.value,
      Email: event.currentTarget.email.value,
      "Contact Number": event.currentTarget['contact-number'].value,
      "Investment Range": selectedInvestment ? selectedInvestment.value : '',
      "Investment Type": selectedInvestmentType ? selectedInvestmentType.value : '',
      "Property Type": event.currentTarget['property-type'].value,
      "Number of Bedrooms": event.currentTarget.bedrooms.value,
      // Assuming "your-number" is another field you want to send
      "your-number": event.currentTarget['your-number'] ? event.currentTarget['your-number'].value : '',
    };
  
    try {
      // Updated to use your webhook URL
      const response = await fetch('https://ulc-api.leadsquaredapps.com/v1/UniversalLeadSync.svc/RealtimeWebhook/Connector/74238/300416b6-4a1c-44c1-bc8c-f4ae3fc68993/ba2ef1b03a043786bbd06e546e7e0df53f49f0b982b7294efbb3be6cfaacc80d600578ebc6f017752e6aa8fed15ef9aa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log("LeadSquared response:", responseData);
      // Handle success (e.g., show a message to the user)
    } catch (error) {
      console.error("Error submitting to LeadSquared:", error);
      // Handle error (e.g., show an error message)
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <div className="flex-grow mb-10 mt-10">
        <div className="flex flex-col md:flex-row h-full bg-white px-4 mx-auto space-y-8 md:space-y-0 md:space-x-10">
          <div className="md:w-[60%] w-full mx-auto">
            <video autoPlay muted loop playsInline className="w-full h-full">
              <source src="/righteous-vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full md:w-[400px] flex flex-col justify-center items-center mx-auto">
            <Card className="w-full max-w-lg mr-0 ml-0 lg:ml-10 lg:mr-20">
              <form onSubmit={(event) => handleSubmit(event)} className="space-y-4">
                <CardHeader>
                  <CardTitle>How can we reach you?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input type="text" placeholder="Name" name="name" className="w-full" required />
                  <Input type="email" placeholder="Email" name="email" className="w-full" required />
                  <div className="my-4">
                    <Popover open={openInvestment} onOpenChange={setOpenInvestment}>
                      <PopoverTrigger asChild>
                        <Button className="w-full justify-start bg-white text-gray-500 border">
                          {selectedInvestment ? selectedInvestment.label : "+ Select Investment Range"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0" side="bottom" align="start">
                        <Command>
                          <CommandInput placeholder="Select range..." />
                          <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                              {investmentOptions.map((option) => (
                                <CommandItem
                                  key={option.value}
                                  value={option.value}
                                  onSelect={(value) => {
                                    setSelectedInvestment(
                                      investmentOptions.find(
                                        (opt) => opt.value === value
                                      ) || null
                                    );
                                    setOpenInvestment(false);
                                  }}
                                >
                                  {option.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <input type="hidden" name="investment-range" value={selectedInvestment ? selectedInvestment.value : ''} />
                  </div>
                  <div className="my-4">
                    <Popover open={openType} onOpenChange={setOpenType}>
                      <PopoverTrigger asChild>
                        <Button className="w-full justify-start bg-white text-gray-500 border">
                          {selectedInvestmentType ? selectedInvestmentType.label : "+ Select Investment Type"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0" side="bottom" align="start">
                        <Command>
                          <CommandInput placeholder="Select type..." />
                          <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                              {investmentTypes.map((type) => (
                                <CommandItem
                                  key={type.value}
                                  value={type.value}
                                  onSelect={(value) => {
                                    setSelectedInvestmentType(
                                      investmentTypes.find(
                                        (opt) => opt.value === value
                                      ) || null
                                    );
                                    setOpenType(false);
                                  }}
                                >
                                  {type.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <input type="hidden" name="investment-type" value={selectedInvestmentType ? selectedInvestmentType.value : ''} />
                  </div>
                  <Input type="text" placeholder="Contact Number" name="contact-number" className="w-full" />
                  <div className="flex space-x-4">
                    <Input
                      type="text"
                      placeholder="Property Type (e.g., House, Apartment)"
                      name="property-type"
                      className="w-1/2"
                    />
                    <Input
                      type="text"
                      placeholder="Number of Bedrooms"
                      name="bedrooms"
                      className="w-1/2"
                    />
                  </div>
                  <Button type="submit" className="w-full hover:bg-primary/80">Submit Survey</Button>
                </CardContent>
              </form>
            </Card>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
