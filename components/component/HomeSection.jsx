import React from 'react'

const HomeSection = () => {
  return (
    <section className="bg-primary py-12 md:py-24 lg:py-32">
    <div className="container max-w-6xl mx-auto px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Unlock the power of stock screening
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-6">
            Discover the best stocks for your portfolio with our advanced screening tools.
          </p>
        </div>
        <div className="hidden md:block">
        <img
        src="https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Use the direct URL to the image
        width={500}
        height={400}
        alt="Hero"
        className="rounded-lg object-cover"
      />

        </div>
      </div>
    </div>
  </section>
  )
}

export default HomeSection