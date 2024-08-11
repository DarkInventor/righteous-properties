// "use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import NavBar from "@/components/navbar";
import { Phone, Mail, Globe, ChevronUp } from "lucide-react";
import SiteFooter from "@/components/footer";

export default function ContactFormWithVideo() {
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

                <Input type="text" placeholder="Occupation" className="w-full" />
                <Input
                  type="number"
                  placeholder="Annual Income"
                  className="w-full"
                />
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
