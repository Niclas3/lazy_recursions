"use client"

import { useEffect, useState } from 'react'
import { useParams, usePathname, useSearchParams, useRouter } from 'next/navigation'
import {NothingFoundBackground} from '@/components/ui/NothingFoundBackground'

export default function Post_error(){
        const params  = useParams()
        const pathname = usePathname()
        const searchparams = useSearchParams()
        const router = useRouter()
        useEffect(()=> {
                const a = new Promise((resolve, reject)=>{
                        setTimeout(() => {
                                resolve("foo");
                                console.log("success")
                        }, 300)
                })
        },[])

        return <NothingFoundBackground/>

}
