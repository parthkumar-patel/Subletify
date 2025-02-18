"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"

export default function WaitlistPage() {
  const [waitlistData, setWaitlistData] = useState({
    type: "",
    name: "",
    email: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted data:", waitlistData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0f1d40] to-[#162a5a] p-4">
      <Card className="w-full max-w-xl shadow-[0_0_50px_-12px_rgba(255,255,255,0.25)]">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-bold text-center">Join Our Waitlist</CardTitle>
          <CardDescription className="text-center text-lg">Be the first to know when we launch!</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="type" className="text-center block text-xl">
                I am a:
              </Label>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-24 h-24 md:w-40 md:h-40 transition-transform hover:scale-105 shadow-lg rounded-full overflow-hidden">
                    <Image
                      src={"/sublessee.jpeg"}
                      alt="Sublessor Mascot"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={true} 
                    />
                  </div>
                  <Toggle
                    pressed={waitlistData.type === "sublessee"}
                    onPressedChange={() => setWaitlistData({ ...waitlistData, type: "sublessee" })}
                    className="data-[state=on]:bg-[#0f1d40] data-[state=on]:text-white text-lg px-6 py-2 shadow-md"
                  >
                    Sublessee
                  </Toggle>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-24 h-24 md:w-40 md:h-40 transition-transform hover:scale-105 shadow-lg rounded-full overflow-hidden">
                    <Image
                      src={"/sublessor.jpeg"}
                      alt="Sublessee Mascot"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={true} 
                    />
                  </div>
                  <Toggle
                    pressed={waitlistData.type === "sublessor"}
                    onPressedChange={() => setWaitlistData({ ...waitlistData, type: "sublessor" })}
                    className="data-[state=on]:bg-[#0f1d40] data-[state=on]:text-white text-lg px-6 py-2 shadow-md"
                  >
                    Sublessor
                  </Toggle>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={waitlistData.name}
                onChange={(e) => setWaitlistData({ ...waitlistData, name: e.target.value })}
                required
                className="text-lg py-5 shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={waitlistData.email}
                onChange={(e) => setWaitlistData({ ...waitlistData, email: e.target.value })}
                required
                className="text-lg py-5 shadow-sm"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-[#0f1d40] hover:bg-[#223974] text-lg py-5 shadow-md">
              Join Waitlist
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

