import type { CardProps } from "./card.types";

const Card = ({
  title,
  subtitle,
  children,
  prepend,
  append
}: CardProps) => {
  return (
    <div className="
      border-2 border-border shadow-md bg-card-background text-card-foreground flex px-2 py-1 gap-5
    ">
      <div>{prepend}</div>
      <div>
        <span className="font-semibold">{title}</span>
        <span className="text-sm">{subtitle}</span>
        <div className="pl-2">
          {children}
        </div>
      </div>
      <div className="flex-1">
        {append}
      </div>
    </div>
  )
}

export default Card;