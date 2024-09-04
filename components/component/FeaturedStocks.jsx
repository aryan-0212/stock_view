import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "./Header";
import HomeSection from "./HomeSection";

import React from 'react'

const FeaturedStocks = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
    <div className="container max-w-6xl mx-auto px-4 md:px-6">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Stock Screens</h2>
        <p className="text-muted-foreground text-lg md:text-xl">
          Explore our curated collection of stock screens.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="flex flex-col items-start gap-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Value Stocks</div>
            <h3 className="text-xl font-bold">Find Undervalued Gems</h3>
            <p className="text-muted-foreground">Uncover stocks trading below their intrinsic value.</p>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}>
              Explore Now
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-start gap-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Growth Stocks</div>
            <h3 className="text-xl font-bold">Find High-Growth Potential</h3>
            <p className="text-muted-foreground">Identify stocks with strong growth prospects.</p>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}>
              Explore Now
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-start gap-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Dividend Stocks</div>
            <h3 className="text-xl font-bold">Find High-Yielding Dividends</h3>
            <p className="text-muted-foreground">Discover stocks with sustainable and growing dividends.</p>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}>
              Explore Now
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default FeaturedStocks