import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"


export const TrendingStocks = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Trending Stocks</h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                Check out the stocks that are making waves in the market.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Technology</div>
                  <h3 className="text-xl font-bold">Apple Inc. (AAPL)</h3>
                  <p className="text-muted-foreground">The tech giant continues to dominate the smartphone market.</p>
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-bold">$150.25</div>
                    <div className="text-sm text-green-500 font-medium">+2.5%</div>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Analyze
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Energy</div>
                  <h3 className="text-xl font-bold">Exxon Mobil Corp. (XOM)</h3>
                  <p className="text-muted-foreground">
                    The oil and gas giant is benefiting from rising energy prices.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-bold">$95.75</div>
                    <div className="text-sm text-green-500 font-medium">+3.2%</div>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Analyze
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start gap-4">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Healthcare</div>
                  <h3 className="text-xl font-bold">Johnson & Johnson (JNJ)</h3>
                  <p className="text-muted-foreground">The pharmaceutical giant continues to deliver strong results.</p>
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-bold">$175.50</div>
                    <div className="text-sm text-green-500 font-medium">+1.8%</div>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Analyze
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
  )
}
