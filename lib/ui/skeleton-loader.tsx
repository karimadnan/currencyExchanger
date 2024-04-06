import { cn } from "../util"

 
export default function({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-300", className)}
      {...props}
    />
  )
}
 