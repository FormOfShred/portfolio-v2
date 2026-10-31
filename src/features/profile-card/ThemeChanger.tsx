import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/custom/theme-provider/use-theme";
import Button from "@/components/custom/button/button";

export function ThemeChanger() {
  const { setTheme, theme } = useTheme()

  function capitalize(s: string) {
      return String(s[0]).toUpperCase() + String(s).slice(1);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>
          <span>{capitalize(theme)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="
        bg-primary text-background rounded-none border-border border-2 shadow-md p-0
        ">
        <DropdownMenuItem onClick={() => setTheme("light")}
          className="hover:bg-secondary rounded-none cursor-pointer"
          >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}
          className="hover:bg-secondary rounded-none cursor-pointer"
          >
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}