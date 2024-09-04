import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MenuIcon, MountainIcon } from 'lucide-react'
import Autocomplete from './Autocomplete';
// import '../utility/listing_stocks.json'


const Header = () => {


  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const response = await fetch('../utility/listing_stocks.json');
      const stockData = await response.json();
      setSuggestions(stockData.map(stock => stock.name));
    };

    fetchSuggestions();
  }, []);


  return (
    <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
    <div className="container max-w-6xl mx-auto flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Stock View</span>
      </Link>
      <div className="relative flex-1 ml-4 md:ml-8 lg:ml-12">
        <div className="absolute left-2.5 top-2.5 h-4 w-4 text-primary-foreground" />

        {/* <Input
          type="search"
          placeholder="Search for stocks"
          className="w-full rounded-lg bg-primary-foreground/20 pl-8 pr-4 py-2 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-opacity-50" /> */}
     
          {/* <StockSearch/> */}

          <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl mb-4">Stock Search</h1> */}
      <Autocomplete suggestions={suggestions} />
    </div>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        
        <Link to="/news" className="hover:underline underline-offset-4 ml-4" prefetch={false}>
          News
        </Link>
        
        <Link to="/about" className="hover:underline underline-offset-4" prefetch={false}>
          About
        </Link>
        
        <Link to="/stock" className="hover:underline underline-offset-4" prefetch={false}>
          Stock Page
        </Link>
      </nav>
      <Button variant="outline" size="icon" className="md:hidden">
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">Toggle navigation</span>
      </Button>
    </div>
  </header>
  )
}

export default Header