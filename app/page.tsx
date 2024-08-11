"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";
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
    label: "2,50,000 $ - 5,00,000 $ USD",
  },
  {
    value: "5,00,000-10,00,000",
    label: "5,00,000 $ - 10,00,000 $ USD",
  },
  {
    value: "10,00,000-15,00,000",
    label: "10,00,000 $ - 15,00,000 $ USD",
  },
  {
    value: "20,00,000-more",
    label: "20,00,000 $ USD & more",
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
  const [openInvestment, setOpenInvestment] = React.useState(false);
  const [openType, setOpenType] = React.useState(false);
  const [selectedInvestment, setSelectedInvestment] = React.useState<{ value: string; label: string; } | null>(null);
  const [selectedInvestmentType, setSelectedInvestmentType] = React.useState<{ value: string; label: string; } | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <div className="flex-grow mb-10 mt-10">
        <div className="flex flex-col md:flex-row h-full bg-white px-4 mx-auto space-y-8 md:space-y-0 md:space-x-10">
          <div className="md:w-[60%] w-full mx-auto">
            <video autoPlay muted loop className="w-full h-full">
              <source src="/righteous-vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full md:w-[400px] flex flex-col justify-center items-center mx-auto">
            <Card className="w-full max-w-lg mr-0 ml-0 lg:ml-10 lg:mr-20">
              <CardHeader>
                <CardTitle>How can we reach you?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input
                  type="text"
                  placeholder="Occupation"
                  className="w-full"
                />
                <div className="my-4">
                  <Popover open={openInvestment} onOpenChange={setOpenInvestment}>
                    <PopoverTrigger asChild>
                      <Button className="w-full justify-start bg-white text-gray-500 border">
                        {selectedInvestment
                          ? selectedInvestment.label
                          : "+ Select Investment Range"}
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
                </div>
                <div className="my-4">
                  <Popover open={openType} onOpenChange={setOpenType}>
                    <PopoverTrigger asChild>
                      <Button className="w-full justify-start bg-white text-gray-500 border">
                        {selectedInvestmentType
                          ? selectedInvestmentType.label
                          : "+ Select Investment Type"}
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
                </div>
                <Input type="email" placeholder="Email" className="w-full" />
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
      </div>

      <SiteFooter />
    </div>
  );
}
