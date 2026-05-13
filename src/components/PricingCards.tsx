"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import {
  Check,
  Star,
  TrendingDown,
  Shield,
  Clock,
  Zap,
  Monitor,
  Sparkles,
  Users,
} from "lucide-react";
import {
  PRICING_PLANS,
  SITE_NAME,
  type DeviceCount,
  PRICING_DEVICE_TIERS,
  getDevicePlanPrice,
  getDisplayListPrice,
  getPlanCheckoutUrl,
  planSupportsDeviceTiers,
  PLAN_BILLING_MONTHS,
} from "@/data/siteData";

interface PricingCardsProps {
  /** Full grid (e.g. 24‑month legacy) when no device matrix */
  showAll?: boolean;
  /** Pricing page: device filter + tiered prices */
  showDeviceFilter?: boolean;
}

function formatMoney(n: number): string {
  return n.toFixed(2);
}

const PricingCards = ({ showAll = false, showDeviceFilter = false }: PricingCardsProps) => {
  const [devices, setDevices] = useState<DeviceCount>(1);

  const plans = useMemo(() => {
    if (showDeviceFilter) {
      return PRICING_PLANS.filter((p) => planSupportsDeviceTiers(p.id));
    }
    return showAll ? PRICING_PLANS : PRICING_PLANS.slice(0, 4);
  }, [showAll, showDeviceFilter]);

  const monthlyBenchmark = getDevicePlanPrice("1month", 1) ?? 12.99;

  const gridCols =
    plans.length >= 5
      ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div>
      {showDeviceFilter && (
        <m.div
          className="mb-10 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-center">
            Filter by simultaneous screens
          </p>
          <div
            className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-border/80 bg-card/60 p-1.5 backdrop-blur-sm"
            role="group"
            aria-label="Number of devices"
          >
            {PRICING_DEVICE_TIERS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setDevices(n)}
                className={`relative min-w-[5.5rem] rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  devices === n
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {n} device{n > 1 ? "s" : ""}
              </button>
            ))}
          </div>
          <p className="max-w-lg text-center text-xs text-muted-foreground">
            Multi-device plans cost less per screen than buying separate single-device subscriptions.
          </p>
        </m.div>
      )}

      <div className={`grid grid-cols-1 gap-6 ${gridCols}`}>
        {plans.map((plan, i) => {
          const tiered = getDevicePlanPrice(plan.id, showDeviceFilter ? devices : 1);
          const current = tiered ?? plan.price;
          const months = PLAN_BILLING_MONTHS[plan.id] ?? 1;
          const perMonth = current / months;

          const listPrice = getDisplayListPrice(current, plan.id, showDeviceFilter ? devices : 1);
          const listSave = Math.round((listPrice - current) * 100) / 100;
          const listSavePct = listPrice > 0 ? Math.round((listSave / listPrice) * 100) : 0;

          const oneDevicePrice = getDevicePlanPrice(plan.id, 1);
          const vsSeparate =
            showDeviceFilter && devices > 1 && oneDevicePrice != null
              ? Math.round((devices * oneDevicePrice - current) * 100) / 100
              : 0;

          const savingsPercentHome =
            !showDeviceFilter && perMonth + 0.001 < monthlyBenchmark
              ? Math.round((1 - perMonth / monthlyBenchmark) * 100)
              : 0;

          const deviceLabel: DeviceCount = showDeviceFilter ? devices : 1;
          const planLink = getPlanCheckoutUrl(plan.id, deviceLabel);

          return (
            <m.div
              key={plan.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl ${
                plan.popular
                  ? "border-2 border-primary/50 bg-gradient-to-b from-primary/[0.12] via-card to-card shadow-[0_0_0_1px_hsl(var(--primary)/0.15),0_24px_60px_-12px_hsl(217_91%_50%/0.35)] ring-1 ring-primary/20 md:scale-[1.02]"
                  : "border border-border/70 bg-gradient-to-b from-card/95 via-card to-secondary/[0.35] shadow-[0_20px_50px_-20px_hsl(222_47%_3%/0.85)] ring-1 ring-white/[0.04]"
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-0 opacity-[0.07] ${
                  plan.popular
                    ? "bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)),transparent_55%)]"
                    : "bg-[radial-gradient(ellipse_at_top,hsl(var(--foreground)),transparent_60%)]"
                }`}
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

              {plan.popular && (
                <div className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-primary to-accent py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                  <Star size={14} className="shrink-0 fill-current" />
                  Most popular — best value
                  <Sparkles size={14} className="shrink-0 opacity-90" />
                </div>
              )}

              {!plan.popular && savingsPercentHome > 0 && !showDeviceFilter && (
                <div className="relative flex items-center justify-center gap-1.5 bg-success/15 py-2 text-xs font-bold text-success">
                  <TrendingDown size={13} />
                  Save {savingsPercentHome}% vs 1-month rate
                </div>
              )}

              {plan.popular && savingsPercentHome > 0 && !showDeviceFilter && (
                <div className="relative flex items-center justify-center gap-1.5 bg-accent/15 py-2 text-xs font-bold text-accent">
                  <TrendingDown size={13} />
                  Save {savingsPercentHome}% vs paying monthly
                </div>
              )}

              {showDeviceFilter && listSave > 0 && (
                <div
                  className={`relative flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-2 py-2 text-center text-[11px] font-bold sm:text-xs ${
                    plan.popular ? "bg-accent/15 text-accent" : "bg-primary/10 text-primary"
                  }`}
                >
                  <span className="inline-flex items-center gap-1">
                    <TrendingDown size={12} />
                    {listSavePct}% off list — save ${formatMoney(listSave)}
                  </span>
                  {vsSeparate > 0 && (
                    <span className="inline-flex items-center gap-1 text-success">
                      <Users size={12} />
                      Save ${formatMoney(vsSeparate)} vs {devices} single-device plans
                    </span>
                  )}
                </div>
              )}

              <div className="relative flex flex-1 flex-col p-6 pt-5 md:p-7">
                {plan.popular && (
                  <div className="mb-4 flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/8 p-2.5">
                    <Image
                      src="/assets/logo.webp"
                      alt={`${SITE_NAME} logo`}
                      width={28}
                      height={28}
                      className="h-7 w-7 rounded-full"
                    />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      {SITE_NAME} recommended
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-primary/90">
                    Premium access
                  </span>
                  <h3 className="font-heading mt-1.5 text-2xl font-bold tracking-tight">{plan.duration}</h3>
                  {showDeviceFilter && (
                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      {deviceLabel} simultaneous {deviceLabel === 1 ? "connection" : "connections"}
                    </p>
                  )}
                </div>

                <div className="mb-5 rounded-2xl border border-border/60 bg-background/40 p-4 backdrop-blur-sm">
                  <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        List price
                      </span>
                      <span className="font-heading text-2xl font-semibold text-muted-foreground line-through decoration-destructive/50">
                        ${formatMoney(listPrice)}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-success">
                        You pay
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-[2.6rem]">
                          ${formatMoney(current)}
                        </span>
                        <span className="text-sm text-muted-foreground">total</span>
                      </div>
                    </div>
                  </div>
                  {months > 1 && (
                    <p className="mt-2 text-sm font-medium text-primary">
                      ≈ ${formatMoney(perMonth)}/mo
                      {listSave > 0 ? ` · $${formatMoney(listSave)} off list` : ""}
                    </p>
                  )}
                  {months === 1 && listSave > 0 && (
                    <p className="mt-2 text-sm font-medium text-primary">${formatMoney(listSave)} off list price</p>
                  )}
                </div>

                <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-primary/25 bg-gradient-to-r from-primary/10 to-transparent px-3.5 py-2.5">
                  <Monitor size={18} className="shrink-0 text-primary" />
                  <span className="text-xs font-semibold leading-snug text-foreground">
                    {showDeviceFilter
                      ? `${deviceLabel} device${deviceLabel > 1 ? "s" : ""} · 4K & multi-room ready`
                      : "Multi-device compatible — pick devices on checkout"}
                  </span>
                </div>

                <ul className="mb-6 flex-1 space-y-2.5">
                  {plan.features.slice(0, 6).map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check size={15} className="mt-0.5 shrink-0 text-success" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={planLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative w-full overflow-hidden rounded-2xl py-3.5 text-center text-sm font-bold transition-all duration-300 ${
                    plan.popular
                      ? "btn-primary !py-3.5 !text-sm shadow-lg shadow-primary/30"
                      : "border border-border/80 bg-secondary/80 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  <span className="relative z-10">Choose this plan</span>
                  {plan.popular && (
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  )}
                </Link>
              </div>
            </m.div>
          );
        })}
      </div>
      <m.div
        className="mt-12 flex flex-wrap justify-center gap-6 py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield size={16} className="text-success" /> Secure checkout
        </span>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Zap size={16} className="text-success" /> Instant setup
        </span>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock size={16} className="text-success" /> 24/7 support
        </span>
      </m.div>
    </div>
  );
};

export default PricingCards;
