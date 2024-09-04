"use client";

import About from "@/components/component/About";
import { Initial_comp } from "@/components/component/initial_comp";
import News from "@/components/component/News";
import StockDetailsPage from "@/components/component/StockDetailsPage";
import Image from "next/image";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Home() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Initial_comp />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/stock" element={<StockDetailsPage />} />

    </Routes>
  </Router>
  );
}
