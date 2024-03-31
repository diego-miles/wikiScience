"use server"


import { NextRequest, NextResponse } from "next/server";

export function middlewareSet(req: NextRequest) {
    const response = NextResponse.next()
    response.cookies.set('cookiesConsent', 'true')
    return response
}

export function middlewareGet(req: NextRequest) {
    const cookie = req.cookies.get('cookiesConsent')?.valueOf()
    
    return NextResponse.next()
}



