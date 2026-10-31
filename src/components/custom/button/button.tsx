import type { ButtonProps } from "./button.types";

const Button = (
  {
    children
  }
  : ButtonProps
) => {
  return (
    <div
      className="
        border-2 border-border shadow-md px-3 transition duration-200 bg-primary
        hover:shadow-lg hover:-translate-y-0.5 hover:-translate-x-0.5
        active:shadow-none active:translate-y-1 active:translate-x-1
      "
    >
      {children}
    </div>
  )
}

export default Button;