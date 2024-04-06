import { 
    Button,
    Input,
    Label, 
    Select, 
    SelectContent, 
    SelectGroup, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@currency-exchanger/lib/ui";
import SwapIcon from '../../public/icons/swap-icon.svg'

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <h1 className='text-white text-4xl font-black p-14'>
                Currency Exchanger
            </h1>
            <div className="grid grid-cols-7 gap-5 p-10 place-items-center min-h-fit w-[70%] bg-white rounded-xl shadow-lg">
                <div className="grid lg:col-span-2 col-span-7 w-full items-center gap-1.5">
                    <Label htmlFor="email">Amount</Label>
                    <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="grid lg:col-span-2 md:col-span-3 col-span-7 w-full items-center gap-1.5">
                    <Label htmlFor="email">From</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid lg:col-span-1 md:col-span-1 col-span-7 place-items-center w-full">
                    <Button variant='outline' size='icon' className="mt-5">
                        <SwapIcon className=' fill-blue-500' />
                    </Button>
                </div>
                <div className="grid lg:col-span-2 md:col-span-3 col-span-7 w-full items-center gap-1.5">
                    <Label htmlFor="email">From</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid lg:col-span-2 md:col-span-3 col-span-7 w-full items-center gap-1.5">
                    <Button>
                        Reset
                    </Button>
                </div>
            </div>

            
        </div>
    )
}