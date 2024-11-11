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
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
// @ts-ignore
// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const investmentOptions = [
  {
    value: "2,50,000-5,00,000",
    label: "2,50,000 - 5,00,000 AED",
  },
  {
    value: "5,00,000-10,00,000",
    label: "5,00,000 - 10,00,000 AED",
  },
  {
    value: "10,00,000-15,00,000",
    label: "10,00,000 - 15,00,000 AED",
  },
  {
    value: "20,00,000-more",
    label: "20,00,000 AED & more",
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

const propertyTypes = [
  {
    value: "buying",
    label: "Buying",
  },
  {
    value: "off-plan",
    label: "Off Plan",
  },
  {
    value: "rent",
    label: "Rent",
  },
];

const bedroomOptions = [
  {
    value: "studio",
    label: "Studio",
  },
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "6",
    label: "6+",
  },
];

export default function ContactFormWithVideo() {
  const [openInvestment, setOpenInvestment] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [openPropertyType, setOpenPropertyType] = useState(false);
  const [openBedrooms, setOpenBedrooms] = useState(false);
  const [selectedInvestment, setSelectedInvestment] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [selectedInvestmentType, setSelectedInvestmentType] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [selectedPropertyType, setSelectedPropertyType] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [selectedBedrooms, setSelectedBedrooms] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [phone, setPhone] = useState("");
  // const [captchaValue, setCaptchaValue] = useState("");

  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    // if (!validateCaptcha(captchaValue)) {
    //   alert('Captcha Does Not Match');
    //   return;
    // }

    const formData = {
      // @ts-ignore
      Name: event.currentTarget.name.value,
      Email: event.currentTarget.email.value,
      "Contact Number": event.currentTarget["contact-number"].value,
      "Investment Range": selectedInvestment ? selectedInvestment.value : "",
      "Investment Type": selectedInvestmentType
        ? selectedInvestmentType.value
        : "",
      "Property Type": selectedPropertyType ? selectedPropertyType.value : "",
      "Number of Bedrooms": selectedBedrooms ? selectedBedrooms.value : "",
    };

    try {
      // Updated to use your webhook URL
      const response = await fetch(
        "https://ulc-api.leadsquaredapps.com/v1/UniversalLeadSync.svc/RealtimeWebhook/Connector/74238/300416b6-4a1c-44c1-bc8c-f4ae3fc68993/ba2ef1b03a043786bbd06e546e7e0df53f49f0b982b7294efbb3be6cfaacc80d600578ebc6f017752e6aa8fed15ef9aa",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("LeadSquared response:", responseData);
      // alert(
      //   "Thank you for sharing your details. Your details have been received. You will be redirected to our main site in 5s. Please close the window to exit."
      // );
      // setTimeout(() => {
        window.location.href = "/thank-you";
      // }, 5000);
    } catch (error) {
      console.error("Error submitting to LeadSquared:", error);
    }
  };

  return (
    <><div className="flex flex-col min-h-screen">
      <NavBar />
      <h1 className="flex mt-2 font-bold text-2xl md:text-3xl lg:text-3xl text-gray-900 px-4 ml-0 lg:ml-20 lg:px-0 lg:text-left mx-auto lg:mx-0 leading-tight">
        Righteous Properties: Dubai Visionary Ventures
      </h1>

      <div className="flex-grow mb-10 mt-5">
        <div className="flex flex-col md:flex-row h-full bg-white px-4 mx-auto space-y-8 md:space-y-0 md:space-x-10">
          <div className="md:w-[60%] w-full mx-auto">
            <video
              autoPlay
              loop
              playsInline
              muted
              controls
              className="w-full h-full"
            >
              <source src="/landing-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            

          </div>


          <div className="w-full md:w-[400px] flex flex-col justify-center items-center mx-auto">
            <Card className="w-full max-w-lg mr-0 ml-0 lg:ml-0 lg:mr-20">
              <form
                onSubmit={(event) => handleSubmit(event)}
                className="space-y-4"
              >
                <CardHeader className="mx-auto flex justify-center items-center text-center">
                  <CardTitle>Connect With US</CardTitle>
                  <h1 className="font-semibold text-gray-700 text-red-500 text-sm">Please fill all the details* </h1>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="w-full" />
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="w-full" />
                  <div className="my-4">
                    <Popover
                      open={openInvestment}
                      onOpenChange={setOpenInvestment}
                    >
                      <PopoverTrigger asChild>
                        <Button className="w-full justify-start bg-white text-gray-500 border">
                          {selectedInvestment
                            ? selectedInvestment.label
                            : "+ Select Investment Range"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="p-0"
                        side="bottom"
                        align="start"
                      >
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
                                  } }
                                >
                                  {option.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <input
                      type="hidden"
                      name="investment-range"
                      value={selectedInvestment ? selectedInvestment.value : ""} />
                  </div>
                  <div className="my-4">
                    <Popover open={openType} onOpenChange={setOpenType}>
                      <PopoverTrigger asChild>
                        <Button className="w-full justify-start bg-white text-gray-500 border">
                          {selectedInvestmentType
                            ? selectedInvestmentType.label
                            : "+ Select Property Type"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="p-0"
                        side="bottom"
                        align="start"
                      >
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
                                  } }
                                >
                                  {type.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <input
                      type="hidden"
                      name="investment-type"
                      value={selectedInvestmentType
                        ? selectedInvestmentType.value
                        : ""} />
                  </div>
                  {/* <Input type="text" placeholder="Contact Number" name="contact-number" className="w-full" /> */}
                  <PhoneInput
                    defaultCountry="in"
                    value={phone}
                    name="contact-number"
                    onChange={(phone) => setPhone(phone)}
                    style={{ width: "100%" }}
                    inputStyle={{ width: "100%" }} />

                  <div className="my-4">
                    <Popover
                      open={openPropertyType}
                      onOpenChange={setOpenPropertyType}
                    >
                      <PopoverTrigger asChild>
                        <Button className="w-full justify-start bg-white text-gray-500 border">
                          {selectedPropertyType
                            ? selectedPropertyType.label
                            : "+ Select Investment Type"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="p-0"
                        side="bottom"
                        align="start"
                      >
                        <Command>
                          <CommandInput placeholder="Select type..." />
                          <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                              {propertyTypes.map((type) => (
                                <CommandItem
                                  key={type.value}
                                  value={type.value}
                                  onSelect={(value) => {
                                    setSelectedPropertyType(
                                      propertyTypes.find(
                                        (opt) => opt.value === value
                                      ) || null
                                    );
                                    setOpenPropertyType(false);
                                  } }
                                >
                                  {type.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <input
                      type="hidden"
                      name="property-type"
                      value={selectedPropertyType ? selectedPropertyType.value : ""} />
                  </div>
                  <div className="my-4">
                    <Popover open={openBedrooms} onOpenChange={setOpenBedrooms}>
                      <PopoverTrigger asChild>
                        <Button className="w-full justify-start bg-white text-gray-500 border">
                          {selectedBedrooms
                            ? selectedBedrooms.label
                            : "+ Select Number of Bedrooms"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="p-0"
                        side="bottom"
                        align="start"
                      >
                        <Command>
                          <CommandInput placeholder="Select number of bedrooms..." />
                          <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                              {bedroomOptions.map((option) => (
                                <CommandItem
                                  key={option.value}
                                  value={option.value}
                                  onSelect={(value) => {
                                    setSelectedBedrooms(
                                      bedroomOptions.find(
                                        (opt) => opt.value === value
                                      ) || null
                                    );
                                    setOpenBedrooms(false);
                                  } }
                                >
                                  {option.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <input
                      type="hidden"
                      name="bedrooms"
                      value={selectedBedrooms ? selectedBedrooms.value : ""} />
                  </div>
                  <div className="my-4 border p-4 rounded-md">
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-700">What date did you attend the event?</legend>
                      <div className="mt-2 flex items-center space-x-4">
                        <div className="flex items-center">
                          <input
                            id="date-23-november-2024"
                            name="event-date"
                            type="radio"
                            value="23-november-2024"
                            className="focus:ring-primary h-4 w-4 text-primary border-gray-300" />
                          <label htmlFor="23-november-2024" className="ml-2 block text-sm font-medium text-gray-700">
                            23 November, 2024
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="date-24-november-2024"
                            name="event-date"
                            type="radio"
                            value="24-november-2024"
                            className="focus:ring-primary h-4 w-4 text-primary border-gray-300" />
                          <label htmlFor="date-24-november-2024" className="ml-2 block text-sm font-medium text-gray-700">
                            24 November, 2024
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  {/* <div className="my-4">
      <LoadCanvasTemplate />
      <Input
        type="text"
        placeholder="Enter Captcha Value"
        name="user_captcha_input"
        id="user_captcha_input"
        onChange={(e) => setCaptchaValue(e.target.value)}
        className="w-full"
        required
      />
    </div> */}
                  <Button type="submit" className="w-full hover:bg-primary/80">
                    Submit
                  </Button>
                </CardContent>
              </form>
            </Card>
          </div>
        </div>
      </div>
   <SiteFooter />

    </div></>
  );
}
