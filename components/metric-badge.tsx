"use client";

import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

interface MetricBadgeProps {
  label: string;
  value: string | number;
  tooltip?: string;
  variant?: "default" | "highlight";
}

export function MetricBadge({
  label,
  value,
  tooltip,
  variant = "default",
}: MetricBadgeProps) {
  const badge = (
    <motion.div
      className={`inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-xs transition-all hover:bg-pink/10 ${
        variant === "highlight"
          ? "border-pink bg-pink/5 text-pink"
          : "border-border text-foreground"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="uppercase tracking-wider opacity-70">{label}</span>
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
