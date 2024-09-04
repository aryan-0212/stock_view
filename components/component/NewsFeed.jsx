import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const NewsFeed = () => {
  return (
    
    <section className="bg-muted py-12 md:py-24 lg:py-32">
    <div className="container max-w-6xl mx-auto px-4 md:px-6">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest News</h2>
        <p className="text-muted-foreground text-lg md:text-xl">
          Stay up-to-date with the latest market news and insights.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card>
        <CardContent className="flex flex-col items-start gap-4">
            <img
              src="/placeholder.svg"
              width={400}
              height={225}
              alt="News"
              className="rounded-lg w-full aspect-video object-cover" />
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Market News</div>
            <h3 className="text-xl font-bold">Federal Interest Rates</h3>
            <p className="text-muted-foreground">
              The Federal Reserve has announced another interest rate hike to combat inflation.
            </p>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}>
              Read More 
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-start gap-4">
            <img
              src="/placeholder.svg"
              width={400}
              height={225}
              alt="News"
              className="rounded-lg w-full aspect-video object-cover" />
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Industry Insights</div>
            <h3 className="text-xl font-bold">The Future of Electric Vehicles</h3>
            <p className="text-muted-foreground">
              Exploring the latest trends and innovations in the EV industry.
            </p>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}>
              Read More
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-start gap-4">
            <img
              src="/placeholder.svg"
              width={400}
              height={225}
              alt="News"
              className="rounded-lg w-full aspect-video object-cover" />
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Market Analysis</div>
            <h3 className="text-xl font-bold">Top Performing Sectors in Q2</h3>
            <p className="text-muted-foreground">
              A deep dive into the best-performing sectors in the second quarter.
            </p>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}>
              Read More
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default NewsFeed