"use client";

import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

interface MetricBadgeProps {
  label: string;
  value: string | number;
  tooltip?: string;
  variant?: "default" | "highlight";
  compact?: boolean;
}

export function MetricBadge({
  label,
  value,
  tooltip,
  variant = "default",
  compact = false,
}: MetricBadgeProps) {
  const badge = (
    <motion.div
      className={`inline-flex items-center gap-1.5 border font-mono text-xs transition-all hover:bg-pink/10 ${compact ? "px-2 py-1" : "px-3 py-1.5"
        } ${variant === "highlight"
          ? "border-pink bg-pink/5 text-pink"
          : "border-border text-foreground"
        }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {!compact && <span className="uppercase tracking-wider opacity-70">{label}</span>}
      {compact && <span className="uppercase tracking-wider opacity-70 text-[10px]">{label}</span>}
      <span className="font-semibold">{value}</span>
    </motion.div>
  );

  if (tooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{badge}</TooltipTrigger>
          <TooltipContent className="border-pink bg-navy-mid text-pink">
            {tooltip}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return badge;
}
