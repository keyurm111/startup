import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-1",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-startup-blue to-blue-600 text-white hover:from-startup-darkBlue hover:to-blue-700 hover:scale-[1.05]",
        destructive:
          "bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-700 hover:to-red-600",
        outline:
          "border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm",
        secondary:
          "bg-gradient-to-r from-gray-600 to-gray-500 text-white hover:from-gray-700 hover:to-gray-600",
        ghost: "hover:bg-white/10 text-white backdrop-blur-sm",
        link: "text-startup-blue hover:text-startup-darkBlue underline-offset-4 hover:underline",
        premium: "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white hover:from-indigo-700 hover:via-purple-700 hover:to-pink-600 border border-white/10 backdrop-blur-sm shadow-[0_8px_16px_rgb(104,58,183,0.2)] hover:shadow-[0_16px_32px_rgb(104,58,183,0.4)] hover:scale-[1.06] transition-all duration-300"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-xl px-4 py-2",
        lg: "h-14 rounded-xl px-8 py-4 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
