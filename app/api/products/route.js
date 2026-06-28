import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { 
      "id": 1, 
      "name": "BEX Premium Rice", 
      "price": "N45,000", 
      "description": "High quality long grain rice", 
      "imageUrl": "https://bexmarket-ng.vercel.app/images/rice.jpg" 
    },
    { 
      "id": 2, 
      "name": "Refined Vegetable Oil", 
      "price": "N12,500", 
      "description": "Pure vegetable oil", 
      "imageUrl": "https://bexmarket-ng.vercel.app/images/oil.jpg" 
    }
  ];

  return NextResponse.json({
    "message": "Success",
    "products": products
  });
}
