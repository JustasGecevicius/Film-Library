export interface GetLocationPostalCodes {  
  adminCode2: string
  adminCode3: string
  adminName3: string
  adminCode1: string
  adminName2: string
  lng: number
  distance: string
  countryCode: string
  postalCode:string
  adminName1: string
  placeName: string
  lat: number
}

export interface GetLocation {
  postalCodes : GetLocationPostalCodes[]
}