import { useState, useEffect, useRef } from "react";
import imgCnnLogo from "figma:asset/61c925e58501125c6558fd0d280303105ff18725.png";
import imgCnnWebsite from "figma:asset/a1557446ffedf96fc3de5bb0c127b38b6b75e88d.png";
import imgCnnInsta1 from "figma:asset/dac3aa987ddd4ebdc9b58c508d82e890d856ca18.png";
import imgCnnInsta2 from "figma:asset/5a2506f58b020f8f8c6bc8f2c9fe33a827d17be7.png";
import imgCnnYt1 from "figma:asset/82e66e81525d5d31885474476ac3c4d547d92bab.png";
import imgCnnYt2 from "figma:asset/2f8553c58ebc10a18c0c817da9e46f5324463c30.png";

const FONT = "'Sarabun', sans-serif";

/* ═══════════════════════════════════════════════════════════
   Partner detail data
   ═══════════════════════════════════════════════════════════ */

interface SocialChannel {
  platform: string;
  handle: string;
  audienceSize: string;
  usPercent: string;
  caValue: string;
  gbPercent: string;
  screenshot1?: string;
  screenshot2?: string;
}

interface ActivityItem {
  user: string;
  action: string;
  detail?: string;
  date: string;
  time: string;
}

interface PartnerDetail {
  name: string;
  id: string;
  verified: boolean;
  country: string;
  countryCode: string;
  size: string;
  sizeLabel: string;
  description: string;
  logo?: string;
  initials: string;
  initialsColor: string;
  businessModel: string;
  prospectStage: string;
  groups: string;
  assignedTo: string;
  website: string;
  channels: SocialChannel[];
  activity: ActivityItem[];
}

const PARTNER_DETAILS: Record<string, PartnerDetail> = {
  "CNN Digital": {
    name: "CNN Digital", id: "1442537", verified: true, country: "United States", countryCode: "US", size: "L", sizeLabel: "Large",
    description: "CNN Digital is the world leader in online news and information and seeks to inform, engage and empower the world. Staffed 24 hours, seven days a week by a dedicated team in CNN bureaus around the world.",
    logo: imgCnnLogo, initials: "CN", initialsColor: "#CC0000",
    businessModel: "Content Commerce", prospectStage: "Joined", groups: "No groups", assignedTo: "Albert Lo",
    website: "cnn.com",
    channels: [
      { platform: "website", handle: "cnn.com", audienceSize: "1.3B", usPercent: "79.59%", caValue: "5.60", gbPercent: "1.37%", screenshot1: imgCnnWebsite },
      { platform: "instagram", handle: "@cnn", audienceSize: "1.3B", usPercent: "79.59%", caValue: "5.60", gbPercent: "1.37%", screenshot1: imgCnnInsta1, screenshot2: imgCnnInsta2 },
      { platform: "youtube", handle: "CNN", audienceSize: "1.3B", usPercent: "79.59%", caValue: "5.60", gbPercent: "1.37%", screenshot1: imgCnnYt1, screenshot2: imgCnnYt2 },
    ],
    activity: [
      { user: "Alan Lee", action: "approved and sent a message", date: "Feb 26", time: "9:40 AM" },
      { user: "Alan Lee", action: "added an internal note:", detail: "This is how an internal note looks. This is how an internal note looks. This is how an internal note looks. This is how an internal note looks. Bla bla bla.", date: "Feb 26", time: "9:15 AM" },
      { user: "Alan Lee", action: "viewed profile", date: "Feb 25", time: "3:15 PM" },
      { user: "Alan Lee", action: "sent a message to Katherine Gambarino", date: "Feb 26", time: "9:15 AM" },
    ],
  },
  "BuzzFeed Commerce": {
    name: "BuzzFeed Commerce", id: "1389204", verified: true, country: "United States", countryCode: "US", size: "L", sizeLabel: "Large",
    description: "BuzzFeed Commerce curates the best products and deals across the internet, driving high-intent traffic through editorial reviews, gift guides, and trending product roundups.",
    initials: "BF", initialsColor: "#EE3322",
    businessModel: "Content Commerce", prospectStage: "Joined", groups: "Tier 1 Publishers", assignedTo: "Sarah Chen",
    website: "buzzfeed.com",
    channels: [
      { platform: "website", handle: "buzzfeed.com/shopping", audienceSize: "890M", usPercent: "72.3%", caValue: "4.80", gbPercent: "3.21%" },
      { platform: "instagram", handle: "@buzzfeedtasty", audienceSize: "890M", usPercent: "72.3%", caValue: "4.80", gbPercent: "3.21%" },
    ],
    activity: [
      { user: "Sarah Chen", action: "updated commission terms", date: "Feb 14", time: "2:30 PM" },
      { user: "Sarah Chen", action: "approved new campaign placement", date: "Feb 10", time: "11:00 AM" },
    ],
  },
  "The Wirecutter": {
    name: "The Wirecutter", id: "1201845", verified: true, country: "United States", countryCode: "US", size: "L", sizeLabel: "Large",
    description: "The Wirecutter (by The New York Times) provides expert-tested product reviews and recommendations helping consumers make informed purchase decisions across hundreds of categories.",
    initials: "WC", initialsColor: "#333333",
    businessModel: "Content Commerce", prospectStage: "Joined", groups: "Tier 1 Publishers", assignedTo: "Albert Lo",
    website: "nytimes.com/wirecutter",
    channels: [
      { platform: "website", handle: "nytimes.com/wirecutter", audienceSize: "620M", usPercent: "68.1%", caValue: "6.20", gbPercent: "4.15%" },
    ],
    activity: [
      { user: "Albert Lo", action: "reviewed quarterly performance", date: "Feb 12", time: "10:00 AM" },
    ],
  },
  "RetailMeNot": {
    name: "RetailMeNot", id: "1156823", verified: true, country: "United States", countryCode: "US", size: "L", sizeLabel: "Large",
    description: "RetailMeNot is a leading coupon and deals marketplace helping shoppers save on everyday purchases through verified promotions, cashback offers, and exclusive brand discounts.",
    initials: "RM", initialsColor: "#FF2244",
    businessModel: "Coupon / Deals", prospectStage: "Joined", groups: "Coupon Partners", assignedTo: "Sarah Chen",
    website: "retailmenot.com",
    channels: [
      { platform: "website", handle: "retailmenot.com", audienceSize: "420M", usPercent: "85.2%", caValue: "3.10", gbPercent: "1.05%" },
    ],
    activity: [
      { user: "Sarah Chen", action: "flagged declining conversion rate", date: "Feb 13", time: "4:00 PM" },
      { user: "Sarah Chen", action: "scheduled performance review", date: "Feb 11", time: "9:30 AM" },
    ],
  },
  "Honey / PayPal": {
    name: "Honey / PayPal", id: "1098342", verified: true, country: "United States", countryCode: "US", size: "L", sizeLabel: "Large",
    description: "Honey (a PayPal company) is a browser extension and app that automatically finds and applies the best coupon codes at checkout, plus provides cashback rewards on eligible purchases.",
    initials: "HP", initialsColor: "#FF6801",
    businessModel: "Browser Extension", prospectStage: "Joined", groups: "Coupon Partners", assignedTo: "Albert Lo",
    website: "joinhoney.com",
    channels: [
      { platform: "website", handle: "joinhoney.com", audienceSize: "310M", usPercent: "81.4%", caValue: "4.20", gbPercent: "2.30%" },
    ],
    activity: [
      { user: "Albert Lo", action: "reviewed monthly payout", date: "Feb 15", time: "11:30 AM" },
    ],
  },
  "Skimlinks Network": {
    name: "Skimlinks Network", id: "1045891", verified: true, country: "United Kingdom", countryCode: "GB", size: "M", sizeLabel: "Medium",
    description: "Skimlinks is a content monetization platform that helps publishers earn from product links through a network of 48,500+ merchants. Automated affiliate linking technology for editorial content.",
    initials: "SK", initialsColor: "#0066CC",
    businessModel: "Sub-Affiliate Network", prospectStage: "Joined", groups: "Sub-Affiliate", assignedTo: "Sarah Chen",
    website: "skimlinks.com",
    channels: [
      { platform: "website", handle: "skimlinks.com", audienceSize: "180M", usPercent: "42.1%", caValue: "3.80", gbPercent: "18.6%" },
    ],
    activity: [
      { user: "Sarah Chen", action: "upgraded commission tier", date: "Feb 14", time: "3:00 PM" },
      { user: "Sarah Chen", action: "added an internal note:", detail: "Skimlinks showing exceptional growth. Consider upgrading to Gold tier next quarter.", date: "Feb 12", time: "10:45 AM" },
    ],
  },
  "Rakuten Rewards": {
    name: "Rakuten Rewards", id: "1034567", verified: true, country: "United States", countryCode: "US", size: "L", sizeLabel: "Large",
    description: "Rakuten Rewards (formerly Ebates) is a leading cashback and shopping rewards platform offering members cashback at thousands of stores both online and in-store.",
    initials: "RR", initialsColor: "#BF0000",
    businessModel: "Loyalty / Cashback", prospectStage: "Joined", groups: "Loyalty Partners", assignedTo: "Albert Lo",
    website: "rakuten.com",
    channels: [
      { platform: "website", handle: "rakuten.com", audienceSize: "540M", usPercent: "76.8%", caValue: "5.10", gbPercent: "1.90%" },
    ],
    activity: [
      { user: "Albert Lo", action: "flagged declining performance", date: "Feb 13", time: "2:15 PM" },
      { user: "Albert Lo", action: "sent a message to partner manager", date: "Feb 10", time: "4:00 PM" },
    ],
  },
  "CouponFollow": {
    name: "CouponFollow", id: "1023456", verified: false, country: "United States", countryCode: "US", size: "M", sizeLabel: "Medium",
    description: "CouponFollow tracks and verifies coupon codes from thousands of retailers, providing shoppers with real-time savings through a simple, ad-free interface.",
    initials: "CF", initialsColor: "#28A745",
    businessModel: "Coupon / Deals", prospectStage: "Joined", groups: "Coupon Partners", assignedTo: "Sarah Chen",
    website: "couponfollow.com",
    channels: [
      { platform: "website", handle: "couponfollow.com", audienceSize: "95M", usPercent: "88.3%", caValue: "2.40", gbPercent: "0.80%" },
    ],
    activity: [
      { user: "Sarah Chen", action: "reviewed Q4 performance", date: "Feb 8", time: "11:00 AM" },
    ],
  },
  "Influencer Hub Co.": {
    name: "Influencer Hub Co.", id: "1067890", verified: false, country: "United States", countryCode: "US", size: "S", sizeLabel: "Small",
    description: "Influencer Hub Co. connects brands with micro and mid-tier influencers for authentic product placements and affiliate-driven content across social platforms.",
    initials: "IH", initialsColor: "#9B59B6",
    businessModel: "Influencer Network", prospectStage: "Application Approved", groups: "New Partners", assignedTo: "Christine Adams",
    website: "influencerhub.co",
    channels: [
      { platform: "website", handle: "influencerhub.co", audienceSize: "12M", usPercent: "71.5%", caValue: "3.20", gbPercent: "4.80%" },
      { platform: "instagram", handle: "@influencerhubco", audienceSize: "12M", usPercent: "71.5%", caValue: "3.20", gbPercent: "4.80%" },
    ],
    activity: [
      { user: "Christine Adams", action: "approved application", date: "Feb 5", time: "9:00 AM" },
      { user: "Christine Adams", action: "added an internal note:", detail: "Very promising new partner with high conversion rates. Fast-track onboarding.", date: "Feb 6", time: "10:30 AM" },
    ],
  },
  "DealNews Media": {
    name: "DealNews Media", id: "1078901", verified: true, country: "United States", countryCode: "US", size: "M", sizeLabel: "Medium",
    description: "DealNews is an editorial-driven deals site that hand-picks and rates the best online deals daily, helping savvy shoppers find quality discounts from top retailers.",
    initials: "DN", initialsColor: "#E67E22",
    businessModel: "Content Commerce", prospectStage: "Joined", groups: "Content Partners", assignedTo: "Albert Lo",
    website: "dealnews.com",
    channels: [
      { platform: "website", handle: "dealnews.com", audienceSize: "45M", usPercent: "82.7%", caValue: "2.90", gbPercent: "1.60%" },
    ],
    activity: [
      { user: "Albert Lo", action: "flagged revenue decline", date: "Feb 14", time: "1:30 PM" },
      { user: "Albert Lo", action: "sent performance review request", date: "Feb 12", time: "3:00 PM" },
    ],
  },
  "SlickDeals Aff.": {
    name: "SlickDeals Aff.", id: "1056789", verified: true, country: "United States", countryCode: "US", size: "M", sizeLabel: "Medium",
    description: "SlickDeals is the largest community-driven deals platform where users vote on and share the best discounts, coupons, and freebies from across the internet.",
    initials: "SD", initialsColor: "#2196F3",
    businessModel: "Community Deals", prospectStage: "Joined", groups: "Coupon Partners", assignedTo: "Sarah Chen",
    website: "slickdeals.net",
    channels: [
      { platform: "website", handle: "slickdeals.net", audienceSize: "150M", usPercent: "90.1%", caValue: "2.10", gbPercent: "0.50%" },
    ],
    activity: [
      { user: "Sarah Chen", action: "reviewed deal placement", date: "Feb 11", time: "2:00 PM" },
    ],
  },
  "NerdWallet Recs": {
    name: "NerdWallet Recs", id: "1089012", verified: true, country: "United States", countryCode: "US", size: "L", sizeLabel: "Large",
    description: "NerdWallet Recommendations provides data-driven financial product comparisons and reviews, helping consumers find the best credit cards, loans, insurance, and banking products.",
    initials: "NW", initialsColor: "#00BFA5",
    businessModel: "Content Commerce", prospectStage: "Application Approved", groups: "New Partners", assignedTo: "Christine Adams",
    website: "nerdwallet.com",
    channels: [
      { platform: "website", handle: "nerdwallet.com", audienceSize: "280M", usPercent: "84.6%", caValue: "4.50", gbPercent: "1.20%" },
    ],
    activity: [
      { user: "Christine Adams", action: "approved application", date: "Feb 3", time: "10:00 AM" },
      { user: "Christine Adams", action: "added an internal note:", detail: "Strong early results. Highest conversion rate in program at 4.55%. Prioritize relationship.", date: "Feb 10", time: "11:15 AM" },
    ],
  },
};

/* Fallback for any partner not in the map */
function getPartnerDetail(name: string): PartnerDetail {
  if (PARTNER_DETAILS[name]) return PARTNER_DETAILS[name];
  const initials = name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  return {
    name, id: String(Math.floor(1000000 + Math.random() * 900000)), verified: false,
    country: "United States", countryCode: "US", size: "M", sizeLabel: "Medium",
    description: `${name} is an affiliate partner in the program. Contact your account manager for more details about this partnership.`,
    initials, initialsColor: "var(--accent)",
    businessModel: "Affiliate", prospectStage: "Joined", groups: "No groups", assignedTo: "Unassigned",
    website: name.toLowerCase().replace(/[^a-z0-9]/g, "") + ".com",
    channels: [{ platform: "website", handle: name.toLowerCase().replace(/[^a-z0-9]/g, "") + ".com", audienceSize: "N/A", usPercent: "—", caValue: "—", gbPercent: "—" }],
    activity: [{ user: "System", action: "partner added to program", date: "Feb 1", time: "12:00 PM" }],
  };
}

/* ═══════════════════════════════════════════════════════════
   SVG Icons
   ═══════════════════════════════════════════════════════════ */

function CloseIcon() {
  return (
    <svg className="size-[10px]" viewBox="0 0 10 10" fill="none">
      <path d="M1 1L9 9M9 1L1 9" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function ChevronLeftIcon() {
  return (
    <svg className="size-[10px]" viewBox="0 0 10 10" fill="none">
      <path d="M6.5 2L3.5 5L6.5 8" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronRightIcon() {
  return (
    <svg className="size-[10px]" viewBox="0 0 10 10" fill="none">
      <path d="M3.5 2L6.5 5L3.5 8" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function VerifiedIcon() {
  return (
    <svg className="size-[16px] shrink-0" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill="#008917" />
      <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function WebsiteIcon() {
  return (
    <svg className="size-[16px] shrink-0" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="var(--foreground)" strokeWidth="1.2" />
      <path d="M2 8H14M8 2C6 4 5.5 6 5.5 8C5.5 10 6 12 8 14M8 2C10 4 10.5 6 10.5 8C10.5 10 10 12 8 14" stroke="var(--foreground)" strokeWidth="1.2" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg className="size-[16px] shrink-0" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="12" height="12" rx="3" stroke="var(--foreground)" strokeWidth="1.2" />
      <circle cx="8" cy="8" r="3" stroke="var(--foreground)" strokeWidth="1.2" />
      <circle cx="11.5" cy="4.5" r="0.8" fill="var(--foreground)" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg className="size-[16px] shrink-0" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="14" height="10" rx="3" stroke="var(--foreground)" strokeWidth="1.2" />
      <path d="M6.5 6L10.5 8L6.5 10V6Z" fill="var(--foreground)" />
    </svg>
  );
}
function USFlag() {
  return (
    <svg className="w-[22px] h-[16px] shrink-0" viewBox="0 0 22 16" fill="none">
      <rect width="22" height="16" rx="2" fill="#BD3D44" />
      <path d="M0 1.23H22V2.46H0ZM0 3.69H22V4.92H0ZM0 6.15H22V7.38H0ZM0 8.62H22V9.85H0ZM0 11.08H22V12.31H0ZM0 13.54H22V14.77H0Z" fill="white" />
      <rect width="9.5" height="8.6" fill="#192F5D" />
    </svg>
  );
}
function CAFlag() {
  return (
    <svg className="w-[22px] h-[16px] shrink-0" viewBox="0 0 22 16" fill="none">
      <rect width="22" height="16" rx="2" fill="white" />
      <rect width="5.5" height="16" fill="#D52B1E" />
      <rect x="16.5" width="5.5" height="16" fill="#D52B1E" />
      <path d="M11 4L11.8 6.5H10.2L11 4Z" fill="#D52B1E" />
    </svg>
  );
}
function GBFlag() {
  return (
    <svg className="w-[22px] h-[16px] shrink-0" viewBox="0 0 22 16" fill="none">
      <rect width="22" height="16" rx="2" fill="#012169" />
      <path d="M0 0L22 16M22 0L0 16" stroke="white" strokeWidth="2.5" />
      <path d="M0 0L22 16M22 0L0 16" stroke="#C8102E" strokeWidth="1.2" />
      <path d="M11 0V16M0 8H22" stroke="white" strokeWidth="4" />
      <path d="M11 0V16M0 8H22" stroke="#C8102E" strokeWidth="2" />
    </svg>
  );
}

const PLATFORM_ICONS: Record<string, React.ReactNode> = {
  website: <WebsiteIcon />,
  instagram: <InstagramIcon />,
  youtube: <YoutubeIcon />,
};

/* ═══════════════════════════════════════════════════════════
   Props
   ═══════════════════════════════════════════════════════════ */

interface PartnerSlideoutProps {
  partnerName: string;
  /** All partner names for prev/next navigation */
  partnerNames: string[];
  open: boolean;
  onClose: () => void;
  onNavigate: (name: string) => void;
}

type RightTab = "properties" | "insights" | "details" | "contact" | "checkin";

/* ═══════════════════════════════════════════════════════════
   Component
   ═══════════════════════════════════════════════════════════ */

export function PartnerSlideout({ partnerName, partnerNames, open, onClose, onNavigate }: PartnerSlideoutProps) {
  const [rightTab, setRightTab] = useState<RightTab>("properties");
  const [descExpanded, setDescExpanded] = useState(false);
  const [noteText, setNoteText] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  // States for JTBD Check-in Preparation
  const [checklist, setChecklist] = useState<Record<string, boolean>>({});
  const [checkinCadence, setCheckinCadence] = useState<string>("Weekly");
  const [bonusInput, setBonusInput] = useState<string>("");
  const [commissionInput, setCommissionInput] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [localActivity, setLocalActivity] = useState<ActivityItem[]>([]);

  const partner = getPartnerDetail(partnerName);
  const currentIdx = partnerNames.indexOf(partnerName);
  const canPrev = currentIdx > 0;
  const canNext = currentIdx < partnerNames.length - 1;

  const triggerLocalToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  /* Close on Escape */
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  /* Reset state on partner change */
  useEffect(() => {
    setRightTab("properties");
    setDescExpanded(false);
    setNoteText("");
    setChecklist({});
    setCheckinCadence("Weekly");
    setBonusInput("");
    setCommissionInput("");
    setLocalActivity(partner.activity);
  }, [partnerName, partner]);

  if (!open) return null;

  const desc = partner.description;
  const truncDesc = desc.length > 140 ? desc.slice(0, 140) + "..." : desc;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[200]"
        style={{ background: "rgba(0,0,0,0.35)" }}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="fixed top-0 right-0 bottom-0 z-[201] bg-card flex overflow-hidden"
        style={{
          width: "min(1200px, 92vw)",
          boxShadow: "-8px 0 24px rgba(0,0,0,0.15)",
          animation: "slideInRight 0.25s ease-out",
        }}
      >
        {/* ─── Left panel ─── */}
        <div className="flex flex-col w-[40%] min-w-[360px] overflow-y-auto" style={{ borderRight: "1px solid var(--border)" }}>

          {/* Close + Nav buttons */}
          <div className="flex items-center justify-between px-[20px] pt-[20px] pb-[12px]">
            <button
              className="flex items-center justify-center size-[34px] cursor-pointer transition-colors hover:bg-muted bg-card"
              style={{ borderRadius: "50%", border: "1px solid var(--border)" }}
              onClick={onClose}
            >
              <CloseIcon />
            </button>
            <div className="flex items-center gap-[8px]">
              <button
                className="flex items-center justify-center size-[34px] cursor-pointer transition-colors hover:bg-muted bg-card"
                style={{ borderRadius: "50%", border: "1px solid var(--border)", opacity: canPrev ? 1 : 0.4 }}
                disabled={!canPrev}
                onClick={() => canPrev && onNavigate(partnerNames[currentIdx - 1])}
              >
                <ChevronLeftIcon />
              </button>
              <button
                className="flex items-center justify-center size-[34px] cursor-pointer transition-colors hover:bg-muted bg-card"
                style={{ borderRadius: "50%", border: "1px solid var(--border)", opacity: canNext ? 1 : 0.4 }}
                disabled={!canNext}
                onClick={() => canNext && onNavigate(partnerNames[currentIdx + 1])}
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>

          {/* Logo + Name */}
          <div className="flex items-center gap-[14px] px-[24px] pt-[8px]">
            {partner.logo ? (
              <img src={partner.logo} alt={partner.name} className="size-[72px] shrink-0 object-cover" style={{ borderRadius: "var(--radius)" }} />
            ) : (
              <div
                className="flex items-center justify-center size-[72px] shrink-0"
                style={{ borderRadius: "var(--radius)", background: partner.initialsColor, color: "#fff", fontFamily: FONT, fontSize: "24px", fontWeight: 700 }}
              >
                {partner.initials}
              </div>
            )}
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center gap-[6px]">
                <span style={{ fontFamily: FONT, fontSize: "22px", fontWeight: 700, color: "var(--foreground)", lineHeight: "1.2" }}>{partner.name}</span>
                {partner.verified && <VerifiedIcon />}
              </div>
              <div className="flex items-center gap-[6px] flex-wrap">
                <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)" }}>{partner.id}</span>
                <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--muted-foreground)" }}>·</span>
                <USFlag />
                <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)" }}>{partner.country}</span>
                <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--muted-foreground)" }}>·</span>
                <span
                  className="inline-flex items-center justify-center size-[16px]"
                  style={{ borderRadius: "2px", background: "var(--foreground)", color: "var(--card)", fontFamily: FONT, fontSize: "10px", fontWeight: 700 }}
                >
                  {partner.size}
                </span>
                <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)" }}>{partner.sizeLabel}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="px-[24px] pt-[14px]">
            <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 400, color: "var(--foreground)", lineHeight: "1.5" }}>
              {descExpanded ? desc : truncDesc}
              {desc.length > 140 && (
                <button
                  className="ml-[4px] cursor-pointer"
                  style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 400, color: "var(--accent)", background: "none", border: "none" }}
                  onClick={() => setDescExpanded(!descExpanded)}
                >
                  {descExpanded ? "Show Less" : "View More"}
                </button>
              )}
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-[10px] px-[24px] pt-[16px]">
            <button
              className="h-[34px] px-[14px] cursor-pointer transition-colors"
              style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-base)", borderRadius: "var(--radius)", background: "var(--button-primary)", color: "var(--button-primary-foreground)", border: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--button-primary-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--button-primary)")}
            >
              Message
            </button>
            <button
              className="h-[34px] px-[14px] cursor-pointer transition-colors hover:bg-muted/60 bg-muted text-foreground"
              style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-base)", borderRadius: "var(--radius)", border: "none" }}
            >
              View Terms
            </button>
            <button
              className="h-[34px] px-[14px] cursor-pointer transition-colors hover:bg-muted/60 bg-muted text-foreground"
              style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-base)", borderRadius: "var(--radius)", border: "none" }}
            >
              View History
            </button>
          </div>

          {/* Separator */}
          <div className="mx-[0] mt-[20px]" style={{ borderBottom: "1px solid var(--border)" }} />

          {/* Properties */}
          {[
            { label: "Business Model", value: partner.businessModel },
            { label: "Prospect Stage", value: partner.prospectStage },
            { label: "Groups", value: partner.groups },
            { label: "Assigned to", value: partner.assignedTo },
          ].map((row) => (
            <div key={row.label}>
              <div className="flex items-center px-[24px] py-[14px]">
                <span className="w-[140px] shrink-0" style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 700, color: "var(--foreground)" }}>{row.label}</span>
                <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 400, color: row.value === "No groups" ? "var(--muted-foreground)" : "var(--foreground)" }}>{row.value}</span>
              </div>
              <div className="mx-[0]" style={{ borderBottom: "1px solid var(--border)" }} />
            </div>
          ))}

          {/* Activity */}
          <div className="px-[24px] pt-[20px] pb-[8px]">
            <span style={{ fontFamily: FONT, fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--foreground)" }}>Activity</span>
          </div>

          {/* Note input */}
          <div className="px-[24px] pb-[16px]">
            <input
              className="w-full h-[38px] px-[12px] bg-card text-foreground placeholder:text-muted-foreground"
              style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 400, borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
              placeholder="Type to add an internal note"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (!noteText.trim()) return;
                  const newAct: ActivityItem = {
                    user: "Christine Adams",
                    action: "added an internal note:",
                    detail: noteText,
                    date: "Today",
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  };
                  setLocalActivity(prev => [newAct, ...prev]);
                  setNoteText("");
                  triggerLocalToast("Internal note added!");
                }
              }}
            />
          </div>

          {/* Activity items */}
          {localActivity.map((act, i) => (
            <div key={i}>
              <div className="flex gap-[10px] px-[24px] py-[10px]">
                {/* Avatar */}
                <div
                  className="flex items-center justify-center size-[28px] shrink-0 mt-[1px]"
                  style={{ borderRadius: "50%", background: "#FF5C3E", color: "#fff", fontFamily: FONT, fontSize: "12px", fontWeight: 700 }}
                >
                  {act.user.split(" ").map((w) => w[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-[8px]">
                    <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", color: "var(--foreground)", lineHeight: "1.4" }}>
                      <strong style={{ fontWeight: 700 }}>{act.user}</strong>{" "}
                      <span style={{ fontWeight: 400 }}>{act.action}</span>
                    </span>
                    <span className="shrink-0 text-right" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)", lineHeight: "1.3" }}>
                      {act.date}<br />{act.time}
                    </span>
                  </div>
                  {act.detail && (
                    <p className="mt-[4px]" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--foreground)", lineHeight: "1.5", margin: 0 }}>
                      {act.detail}
                    </p>
                  )}
                </div>
              </div>
              {i < localActivity.length - 1 && (
                <div className="mx-[24px]" style={{ borderBottom: "1px solid var(--border)" }} />
              )}
            </div>
          ))}

          <div className="px-[24px] py-[12px]">
            <button
              className="cursor-pointer"
              style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 600, color: "var(--foreground)", background: "none", border: "none" }}
            >
              Show More
            </button>
          </div>

          <div className="h-[40px] shrink-0" />
        </div>

        {/* ─── Right panel ─── */}
        <div className="flex-1 flex flex-col overflow-y-auto bg-card">

          {/* Tab bar */}
          <div className="px-[20px] pt-[20px] pb-[0]">
            <div className="flex items-center gap-[4px] p-[4px]" style={{ borderRadius: "var(--radius-button)", background: "var(--muted)" }}>
              {(
                [
                  { id: "properties", label: "Properties" },
                  { id: "insights", label: "Insights" },
                  { id: "details", label: "Details" },
                  { id: "contact", label: "Contact" },
                  { id: "checkin", label: "Check-in Prep" },
                ] as { id: RightTab; label: string }[]
              ).map((tab) => (
                <button
                  key={tab.id}
                  className="flex-1 h-[30px] cursor-pointer transition-colors"
                  style={{
                    fontFamily: FONT,
                    fontSize: "var(--text-base)",
                    fontWeight: 600,
                    color: "var(--foreground)",
                    borderRadius: "var(--radius-button)",
                    border: "none",
                    background: rightTab === tab.id ? "var(--card)" : "transparent",
                    boxShadow: rightTab === tab.id ? "0px 2px 2px rgba(0,0,0,0.08)" : "none",
                  }}
                  onClick={() => setRightTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div className="flex-1 px-[20px] py-[20px]">

            {/* Properties tab = social media channels */}
            {rightTab === "properties" && (
              <div className="flex flex-col gap-[24px]">
                {partner.channels.map((ch, ci) => (
                  <div key={ci} className="flex flex-col gap-[10px]">
                    {/* Channel header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[6px]">
                        {PLATFORM_ICONS[ch.platform] || <WebsiteIcon />}
                        <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 700, color: "var(--foreground)" }}>{ch.handle}</span>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--foreground)" }}>{ch.audienceSize} Audience Size</span>
                        <div className="flex items-center gap-[5px]">
                          <USFlag />
                          <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--foreground)" }}>{ch.usPercent}</span>
                        </div>
                        <div className="flex items-center gap-[5px]">
                          <CAFlag />
                          <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--foreground)" }}>{ch.caValue}</span>
                        </div>
                        <div className="flex items-center gap-[5px]">
                          <GBFlag />
                          <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--foreground)" }}>{ch.gbPercent}</span>
                        </div>
                      </div>
                    </div>
                    {/* Screenshot(s) */}
                    {ch.screenshot1 && (
                      <div className="overflow-hidden" style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)", maxHeight: 320 }}>
                        <img src={ch.screenshot1} alt={ch.handle} className="w-full object-cover object-top" style={{ maxHeight: 320 }} />
                      </div>
                    )}
                    {ch.screenshot2 && (
                      <div className="overflow-hidden" style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)", maxHeight: 320 }}>
                        <img src={ch.screenshot2} alt={ch.handle} className="w-full object-cover object-top" style={{ maxHeight: 320 }} />
                      </div>
                    )}
                    {!ch.screenshot1 && (
                      <div
                        className="flex items-center justify-center h-[160px]"
                        style={{ borderRadius: "var(--radius)", border: "1px dashed var(--border)", background: "var(--muted)" }}
                      >
                        <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)" }}>No preview available</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Insights tab */}
            {rightTab === "insights" && (
              <div className="flex flex-col gap-[16px]">
                <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 400, color: "var(--muted-foreground)" }}>
                  Performance insights for {partner.name}
                </span>
                <div className="bg-card p-[16px] flex flex-col gap-[8px]" style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
                  <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 700, color: "var(--foreground)" }}>Audience Overlap</span>
                  <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)", lineHeight: "1.5" }}>
                    {partner.name}'s audience primarily resides in {partner.country}. Their content drives high-intent traffic with strong conversion potential.
                  </span>
                </div>
                <div className="bg-card p-[16px] flex flex-col gap-[8px]" style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
                  <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 700, color: "var(--foreground)" }}>Content Quality</span>
                  <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 400, color: "var(--muted-foreground)", lineHeight: "1.5" }}>
                    This partner produces editorial-quality content with strong organic reach. Recommended for featured placements.
                  </span>
                </div>
              </div>
            )}

            {/* Details tab */}
            {rightTab === "details" && (
              <div className="flex flex-col gap-[12px]">
                <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 400, color: "var(--muted-foreground)" }}>
                  Partnership details
                </span>
                {[
                  { label: "Partner ID", value: partner.id },
                  { label: "Website", value: partner.website },
                  { label: "Country", value: partner.country },
                  { label: "Business Model", value: partner.businessModel },
                  { label: "Partner Size", value: partner.sizeLabel },
                  { label: "Prospect Stage", value: partner.prospectStage },
                  { label: "Assigned To", value: partner.assignedTo },
                  { label: "Groups", value: partner.groups },
                ].map((row) => (
                  <div key={row.label} className="flex items-center py-[8px]" style={{ borderBottom: "1px solid var(--border)" }}>
                    <span className="w-[140px] shrink-0" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--muted-foreground)" }}>{row.label}</span>
                    <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 400, color: "var(--foreground)" }}>{row.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Contact tab */}
            {rightTab === "contact" && (
              <div className="flex flex-col gap-[16px]">
                <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 400, color: "var(--muted-foreground)" }}>
                  Contact information for {partner.name}
                </span>
                <div className="bg-card p-[16px] flex flex-col gap-[10px]" style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
                  <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 700, color: "var(--foreground)" }}>Account Manager</span>
                  <span style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 400, color: "var(--foreground)" }}>{partner.assignedTo}</span>
                  <button
                    className="self-start h-[32px] px-[14px] cursor-pointer transition-colors"
                    style={{ fontFamily: FONT, fontWeight: 600, fontSize: "var(--text-sm)", borderRadius: "var(--radius-button)", background: "var(--button-primary)", color: "var(--button-primary-foreground)", border: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--button-primary-hover)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "var(--button-primary)")}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            )}

            {/* Check-in Prep Tab */}
            {rightTab === "checkin" && (
              <div className="flex flex-col gap-[20px] relative">
                {/* Local Toast Alert */}
                {toastMessage && (
                  <div className="absolute -top-3 right-0 z-[300] bg-card border border-accent rounded-xl px-3 py-2 shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <span className="size-5 rounded-full bg-accent/15 text-accent flex items-center justify-center text-[10px] font-bold">✓</span>
                    <span className="text-foreground text-xs font-semibold">{toastMessage}</span>
                  </div>
                )}

                <div>
                  <h3 style={{ fontFamily: FONT, fontSize: "var(--text-base)", fontWeight: 700, color: "var(--foreground)", marginBottom: "4px" }}>
                    Preparing for Check-in Briefing
                  </h3>
                  <p style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--muted-foreground)", margin: 0 }}>
                    Review talking points, follow the prep checklist, and adjust terms directly.
                  </p>
                </div>

                {/* Cadence selection */}
                <div className="bg-card p-[16px] rounded-xl border border-border flex flex-col gap-[10px]">
                  <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--foreground)" }}>Check-in Cadence</span>
                  <div className="flex gap-[6px] bg-muted p-[4px] rounded-lg border">
                    {["Weekly", "Bi-weekly", "Monthly", "Quarterly"].map((cad) => (
                      <button
                        key={cad}
                        className="flex-1 py-[6px] text-xs font-semibold rounded-md cursor-pointer transition-colors"
                        style={{
                          background: checkinCadence === cad ? "var(--card)" : "transparent",
                          color: checkinCadence === cad ? "var(--accent)" : "var(--muted-foreground)",
                          border: "none",
                          boxShadow: checkinCadence === cad ? "0px 1px 2px rgba(0,0,0,0.06)" : "none"
                        }}
                        onClick={() => {
                          setCheckinCadence(cad);
                          triggerLocalToast(`Check-in cadence set to ${cad}`);
                        }}
                      >
                        {cad}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Check-in Prep Checklist */}
                <div className="bg-card p-[16px] rounded-xl border border-border flex flex-col gap-[12px]">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--foreground)" }}>Check-in Checklist</span>
                    <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--muted-foreground)" }}>
                      {Object.values(checklist).filter(Boolean).length} / 4 completed
                    </span>
                  </div>
                  {[
                    { key: "chk-1", text: `Review current performance (Revenue: ${partner.businessModel === "Coupon / Deals" || partner.businessModel === "Content Commerce" ? "$34,560" : "$1,450"})` },
                    { key: "chk-2", text: "Verify active marketing channels in Properties tab" },
                    { key: "chk-3", text: "Verify coupon codes and active tracking links" },
                    { key: "chk-4", text: "Log check-in discussion notes and action items" }
                  ].map((chk) => (
                    <label key={chk.key} className="flex items-center gap-[10px] cursor-pointer hover:opacity-85 select-none">
                      <input
                        type="checkbox"
                        checked={!!checklist[chk.key]}
                        className="rounded border-border text-accent focus:ring-accent size-[15px] cursor-pointer"
                        onChange={(e) => {
                          setChecklist(prev => ({ ...prev, [chk.key]: e.target.checked }));
                          if (e.target.checked) {
                            triggerLocalToast("Item completed!");
                          }
                        }}
                      />
                      <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--foreground)", fontWeight: checklist[chk.key] ? "500" : "normal", textDecoration: checklist[chk.key] ? "line-through" : "none", opacity: checklist[chk.key] ? 0.6 : 1 }}>
                        {chk.text}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Talking Points */}
                <div className="bg-card p-[16px] rounded-xl border border-border flex flex-col gap-[10px]">
                  <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--foreground)" }}>Talking Points & Insights</span>
                  <ul className="flex flex-col gap-[8px] pl-[18px] list-disc" style={{ fontFamily: FONT, fontSize: "var(--text-sm)", color: "var(--muted-foreground)", margin: 0 }}>
                    {partner.name === "CNN Digital" || partner.name === "CouponFollow" || partner.name === "Honey / PayPal" ? (
                      <>
                        <li>Highlight exceptional revenue performance (+18% growth this month).</li>
                        <li>Propose extending the current contract into new product categories.</li>
                        <li>Ask about Q3 editorial calendar slots for premium home page placement.</li>
                      </>
                    ) : (
                      <>
                        <li>Discuss the recent performance decline (-14% revenue drop).</li>
                        <li>Inquire about placement quality and potential conversion issues.</li>
                        <li>Propose a temporary welcome/performance bonus to incentivize outreach.</li>
                      </>
                    )}
                  </ul>
                </div>

                {/* Inline Quick Actions */}
                <div className="bg-card p-[16px] rounded-xl border border-border flex flex-col gap-[14px]">
                  <span style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--foreground)" }}>Inline Partner Actions</span>
                  
                  {/* Action 1: Issue Bonus */}
                  <div className="flex flex-col gap-[6px]">
                    <label style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--muted-foreground)" }}>Issue Performance Bonus</label>
                    <div className="flex gap-[8px]">
                      <input
                        type="text"
                        placeholder="e.g. $500"
                        className="flex-1 h-[34px] px-[10px] bg-card text-foreground border border-border"
                        style={{ borderRadius: "var(--radius)", fontFamily: FONT, fontSize: "var(--text-sm)" }}
                        value={bonusInput}
                        onChange={(e) => setBonusInput(e.target.value)}
                      />
                      <button
                        onClick={() => {
                          if (!bonusInput.trim()) return;
                          const amount = bonusInput;
                          const newAct: ActivityItem = {
                            user: "Christine Adams",
                            action: `issued a performance bonus of ${amount}`,
                            date: "Today",
                            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                          };
                          setLocalActivity(prev => [newAct, ...prev]);
                          setBonusInput("");
                          triggerLocalToast(`Bonus of ${amount} successfully issued!`);
                        }}
                        className="px-[12px] h-[34px] bg-accent hover:bg-accent/95 text-white font-semibold rounded-lg text-xs cursor-pointer border-none"
                      >
                        Issue Bonus
                      </button>
                    </div>
                  </div>

                  {/* Action 2: Update Baseline Terms */}
                  <div className="flex flex-col gap-[6px] border-t pt-3">
                    <label style={{ fontFamily: FONT, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--muted-foreground)" }}>Adjust Baseline Commission</label>
                    <div className="flex gap-[8px]">
                      <input
                        type="text"
                        placeholder="e.g. 8.5%"
                        className="flex-1 h-[34px] px-[10px] bg-card text-foreground border border-border"
                        style={{ borderRadius: "var(--radius)", fontFamily: FONT, fontSize: "var(--text-sm)" }}
                        value={commissionInput}
                        onChange={(e) => setCommissionInput(e.target.value)}
                      />
                      <button
                        onClick={() => {
                          if (!commissionInput.trim()) return;
                          const rate = commissionInput;
                          const newAct: ActivityItem = {
                            user: "Christine Adams",
                            action: `updated contract commission terms to ${rate}`,
                            date: "Today",
                            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                          };
                          setLocalActivity(prev => [newAct, ...prev]);
                          setCommissionInput("");
                          triggerLocalToast(`Contract commission set to ${rate}!`);
                        }}
                        className="px-[12px] h-[34px] bg-accent hover:bg-accent/95 text-white font-semibold rounded-lg text-xs cursor-pointer border-none"
                      >
                        Update Baseline
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
