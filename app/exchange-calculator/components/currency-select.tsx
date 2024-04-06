import { 
    Select, 
    SelectContent, 
    SelectGroup, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@currency-exchanger/lib/ui";

interface CurrencySelectProps extends React.ComponentProps<typeof Select> {
    disabledValue: string
    options: string[]
}

export default function CurrencySelect({
    options,
    disabledValue,
    ...rest
}: CurrencySelectProps) {
    return (
        <Select {...rest}>
            <SelectTrigger>
                <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {options.map((record, index) => 
                        <SelectItem 
                            key={`${record}-${index}`} 
                            value={record} 
                            disabled={record === disabledValue}
                        >
                            {record}
                        </SelectItem>
                    )}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}