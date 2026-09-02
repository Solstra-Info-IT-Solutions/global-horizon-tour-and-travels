"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import DestinationHero from "@/components/destinations/DestinationHero"
import HeritageWondersSection from "@/components/destinations/HeritageWondersSection"
import LocalBaseSection from "@/components/destinations/LocalBaseSection"
import Footer from "@/components/Footer";

export default function DestinationsPage() {
  return (
    <>
      <Navbar />     
      <DestinationHero/>
      <LocalBaseSection/>
      <HeritageWondersSection/>
      <Footer />
    </>
  );
}