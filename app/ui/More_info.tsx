import { CustomMDX } from '@/app/ui/CustomMDX'

export default function More_info({children}: {children: React.ReactNode }){
    return (
        <div className="bg-[#d0e7f9] text-[#4d4d4d] rounded-md p-3">
               <CustomMDX source={children}>
               </CustomMDX>
        </div>
    );
}
