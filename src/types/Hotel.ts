export interface Hotel {
    id: number;
    name: string;
    stars: number;
    dailyPrice: number;
    totalPrice: number;
    tax: number;
    thumb: string;
    amenities: string[];
    hasBreakFast: boolean;
    hasRefundableRoom: boolean;
    district: string;
    placeId: number;
}

export interface HotelDetails {
    id: number,
    name: string, 
    description: string, 
    stars: number, 
    amenities: [
        {
            key: string, 
            label: string
        }
    ],
    hasBreakFast: boolean, 
    hasRefundableRoom: boolean, 
    fullAddress: string, 
    images: string[]


} 
