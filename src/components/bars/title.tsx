import { ModeToggle } from "@/components/mode-toggle";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Typography from "@/components/ui/typography";
import { useTitle } from "@/lib/useTitle";
import { Window } from "@tauri-apps/api/window";
import {
  ChevronLeft,
  ChevronRight,
  LucideIcon,
  Maximize,
  Menu,
  Minus,
  RotateCw,
  Settings as SettingsIcon,
  X,
} from "lucide-react";
import React, { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const ActionButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { Icon: LucideIcon; iconSize?: string }
>(({ Icon, className, iconSize, ...props }, ref) => {
  return (
    <Button
      variant="default"
      className={twMerge(
        "rounded-none shadow-sm hover:bg-secondary/40",
        className
      )}
      {...props}
      ref={ref}
    >
      <Icon size={iconSize ?? "16"} />
    </Button>
  );
});

const isTauri = () => {
  if ("__TAURI_INTERNALS__" in window) return true;
  return false;
};

const minimize = () => {
  if (!isTauri()) return;
  Window.getCurrent().minimize();
};

const maximize = () => {
  if (!isTauri()) return;
  Window?.getCurrent()?.toggleMaximize();
};

const close = () => {
  if (!isTauri()) return;
  Window.getCurrent().close();
};

export function Settings() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ActionButton Icon={SettingsIcon} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Configurações</DialogTitle>
          <DialogDescription
            asChild
            className="py-3 flex flex-col items-center gap-4"
          >
            <div>
              <Separator />
              <ModeToggle />
              <Separator />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function ActionBar() {
  if (!isTauri()) return null;

  return (
    <>
      <Separator orientation="vertical" className="h-4/5" />
      <ActionButton Icon={Minus} onClick={minimize} />
      <ActionButton Icon={Maximize} onClick={maximize} />
      <ActionButton Icon={X} onClick={close} />
    </>
  );
}

function PageNavigation() {
  const navigate = useNavigate();
  const buttonProps = {
    size: "icon" as "icon",
    className: "w-7 h-7 rounded-full",
  };

  const canGoForward = (window as any)?.navigation?.canGoForward;

  return (
    <div className="h-9 flex flex-row items-center text-accent gap-1 sm:gap-2 pl-1 sm:pl-4">
      <div className="sm:hidden flex flex-row items-center gap-1 pl-1 h-full">
        <ActionButton Icon={Menu} {...buttonProps} />
        <Separator orientation="vertical" className="h-2/3" />
      </div>
      <ActionButton
        onClick={() => navigate(-1)}
        Icon={ChevronLeft}
        {...buttonProps}
      />
      <ActionButton
        onClick={() => navigate(1)}
        disabled={!canGoForward}
        Icon={ChevronRight}
        {...buttonProps}
      />
      <ActionButton
        onClick={() => navigate(0)}
        Icon={RotateCw}
        {...buttonProps}
      />
    </div>
  );
}

export function TitleBar({ className }: HTMLAttributes<HTMLDivElement>) {
  const Title = useTitle();

  return (
    <div className={twMerge("h-9", className)}>
      <div
        data-tauri-drag-region
        className="shadow-lg w-screen bg-primary h-9 grid grid-cols-3 gap-0 z-[60] fixed"
      >
        <PageNavigation />
        <Typography
          variant="h4"
          affects="large"
          className="font-serif text-secondary place-self-center pointer-events-none"
        >
          {Title}
        </Typography>
        <div className="z-10 h-full place-self-end flex flex-row items-center">
          <Settings />
          <ActionBar />
        </div>
      </div>
    </div>
  );
}
