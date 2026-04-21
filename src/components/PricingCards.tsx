"use client";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { Check, Star, TrendingDown, Shield, Clock, Zap, Monitor } from "lucide-react";
import { PRICING_PLANS, SITE_NAME } from "@/data/siteData";

interface PricingCardsProps {
  showAll?: boolean;
}

const PLAN_LINKS: Record<string, string> = {
  "1month":   "https://nflsubs.kneo.me/form/13505437e2e9cc82.html",
  "3months":  "https://nflsubs.kneo.me/form/1350514b937a81fe.html",
  "6months":  "https://nflsubs.kneo.me/form/13504586ff345c4c.html",
  "12months": "https://nflsubs.kneo.me/form/1350383db48d588c.html",
  "24months": "https://nflsubs.kneo.me/form/179956b399346513.html",
};

const PricingCards = ({ showAll = false }: PricingCardsProps) => {
  const plans = showAll ? PRICING_PLANS : PRICING_PLANS.slice(0, 4);
  const basePrice = PRICING_PLANS[0].price;

  return (
    <div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${showAll ? 'xl:grid-cols-5 lg:grid-cols-3' : 'lg:grid-cols-4'} gap-5`}>
        {plans.map((plan, i) => {
          const savingsPercent = plan.perMonth < basePrice
            ? Math.round((1 - plan.perMonth / basePrice) * 100)
            : 0;
          const planLink = PLAN_LINKS[plan.id] ?? "/pricing";

          return (
            <m.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative rounded-2xl flex flex-col overflow-hidden ${
                plan.popular ? "glass-card-elevated scale-[1.02]" : "glass-card"
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
                  <Star size={12} /> Most Popular - Best Value
                </div>
              )}
              {savingsPercent > 0 && !plan.popular && (
                <div className="bg-success/10 text-success text-center py-1.5 text-xs font-bold flex items-center justify-center gap-1">
                  <TrendingDown size={12} /> Save {savingsPercent}%
                </div>
              )}
              {savingsPercent > 0 && plan.popular && (
                <div className="bg-accent/10 text-accent text-center py-1.5 text-xs font-bold flex items-center justify-center gap-1">
                  <TrendingDown size={12} /> Save {savingsPercent}% - Most Savings
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                {plan.popular && (
                  <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-primary/5 border border-primary/10">
                    <Image src="/assets/logo.webp" alt="logo" width={24} height={24} className="w-6 h-6 rounded-full" />
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{SITE_NAME} Recommended</span>
                  </div>
                )}
                <div className="mb-5">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">High Performance</span>
                  <h3 className="font-heading text-xl font-bold mt-1">{plan.duration}</h3>
                </div>
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold text-foreground">{plan.currency}{plan.price}</span>
                    <span className="text-muted-foreground text-sm">total</span>
                  </div>
                  {plan.perMonth < plan.price && (
                    <p className="text-sm text-primary font-medium mt-1">
                      = {plan.currency}{plan.perMonth.toFixed(2)}/month
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Monitor size={16} className="text-primary shrink-0" />
                  <span className="text-xs font-semibold text-primary">Multiple Devices Included</span>
                </div>
                <ul className="flex-1 space-y-2.5 mb-6">
                  {plan.features.slice(0, 6).map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check size={15} className="text-success mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={planLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl text-center font-semibold text-sm transition-all duration-300 block ${
                    plan.popular
                      ? "btn-primary !py-3 !text-sm"
                      : "bg-secondary border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  }`}
                >
                  Choose This Plan
                </Link>
              </div>
            </m.div>
          );
        })}
      </div>
      <m.div
        className="flex flex-wrap justify-center gap-6 mt-10 py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield size={16} className="text-success" /> Secure Checkout
        </span>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Zap size={16} className="text-success" /> Instant Setup
        </span>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock size={16} className="text-success" /> 24/7 Support Available
        </span>
      </m.div>
    </div>
  );
};

export default PricingCards;