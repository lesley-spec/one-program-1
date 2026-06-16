# PRD: Affiliate Creator Manager Dashboard
**Impact.com Brand UI — Jobs-to-be-Done Redesign**
*Version 1.0 — Working Draft*

---

## Overview

This document outlines the product requirements for a redesigned brand-side UI experience at Impact.com, focused on the **Affiliate Creator Manager** role. The design philosophy shifts from a feature-centric navigation model to a **jobs-to-be-done model**, where the platform surfaces the right information and actions based on what the user is actually trying to accomplish — not what role they were assigned at onboarding.

---

## Problem Statement

The current brand UI has significant usability challenges for advertisers managing affiliate and creator programs:

- **Fragmented job completion** — users must navigate to multiple places to complete a single job (e.g. preparing for a partner check-in requires visiting several disconnected screens)
- **The toggle problem** — multi-program advertisers are forced to toggle between programs, losing context and creating compounding friction
- **Stale role data** — existing role and permissions data is rarely updated by users, making it an unreliable signal for personalization
- **No job-aware surface** — the platform does not differentiate between users doing a daily scan, a weekly analysis, or a partner check-in prep — they all see the same UI

---

## Goals

1. Design a unified, **role-adaptive dashboard** for the Affiliate Creator Manager persona
2. Surface **relevant widgets and actions automatically** based on the user's current job or goal
3. Use **calendar signals and behavioral inference** to reduce the need for manual input
4. Implement a **lightweight role confirmation mechanism** (one-time or periodic) that doesn't interrupt flow
5. Merge the **affiliate program management** and **creator campaign management** workflows into a single coherent experience

---

## Non-Goals (for this phase)

- Full redesign of all advertiser roles (brand analyst, finance, etc.)
- Changes to the backend data model or role/permissions architecture
- Building the ML recommendation engine (behavioral inference is a future phase)

---

## Target Persona

**Role: Affiliate Creator Manager**

Manages both affiliate partner programs and creator campaigns. Responsible for:
- Recruiting new affiliate partners
- Onboarding partners with welcome bonuses or flat fees
- Managing ongoing partner relationships and performance
- Running creator campaigns and monitoring content performance
- Hitting revenue and growth targets across their portfolio

See **Personas** section below for three realistic examples.

---

## Jobs to be Done

### Job 1: Recruit New Partners
**Trigger:** Open recruitment pipeline, quarterly growth targets, low-performing partner mix
**What they need:**
- Discovery surface for prospective partners (filtered by vertical, audience size, engagement rate)
- Ability to send invites and track outreach status
- Suggested partners based on current program performance gaps

**Key actions:**
- Browse and filter partner marketplace
- Send recruitment invite with custom bonus offer
- Track invite status (sent → accepted → onboarded)

---

### Job 2: Onboard a New Partner
**Trigger:** Partner accepts invite
**What they need:**
- Onboarding checklist (contract signed, tracking link active, welcome bonus issued)
- Ability to set welcome bonus or flat fee inline
- Confirmation that partner is live and tracking

**Key actions:**
- Issue welcome bonus or flat fee
- Confirm tracking setup
- Send welcome message or brief

---

### Job 3: Manage Existing Relationships
**Trigger:** Scheduled partner check-in, performance alert, or calendar event
**What they need:**
- Partner performance snapshot (revenue, clicks, conversions, trend)
- Flags for at-risk partners (declining performance, no recent activity)
- Recommended actions (bonus, rate adjustment, outreach)

**Key actions:**
- View partner performance card
- Issue bonus or incentive
- Log a check-in note or schedule a call

---

### Job 4: Daily Portfolio Scan
**Trigger:** Start of day, Monday morning
**What they need:**
- Anomaly alerts (unexpected drops, spikes, missed targets)
- Top performers and underperformers at a glance
- Any actions requiring urgent attention

**Key actions:**
- Triage alerts
- Dismiss or action each flag
- Quick-view partner or campaign detail without leaving the dashboard

---

### Job 5: Prepare for a Partner Check-in
**Trigger:** Check-in on calendar (CSM or self-initiated)
**What they need:**
- Full performance summary for that specific partner
- Historical trend, recent activity, open issues
- Suggested talking points or incentive recommendations

**Key actions:**
- Pull partner check-in brief
- Note key discussion points
- Update partner terms or bonus inline

---

### Job 6: Run and Monitor Creator Campaigns
**Trigger:** Campaign live, content going out
**What they need:**
- Campaign status and content performance by creator
- Engagement metrics, conversion attribution
- Creators who are overperforming or underperforming

**Key actions:**
- View campaign performance by creator
- Adjust creator terms or extend campaign
- Flag content for review

---

## UX Principles for this Role

1. **Job-first surface** — when the user logs in, the dashboard surfaces the most relevant job based on calendar, recency, and behavior
2. **Progressive confirmation** — a lightweight periodic modal confirms their current focus ("Looks like you have a partner check-in Friday — prepping for that?") — not on every login
3. **Inline actions** — users should be able to complete most jobs (issue bonus, send invite, log note) without leaving the dashboard view
4. **Unified program view** — affiliate and creator programs visible in one surface, no toggling required
5. **Signal-driven recommendations** — platform uses performance data to surface "this partner is outperforming — consider a bonus" without the user having to find it

---

## Personas

### Persona 1 — **Aisha Thompson** *(Female)*
**Brand:** Walmart
**Title:** Senior Affiliate & Creator Partnerships Manager
**Age:** 34

Aisha manages Walmart's affiliate program across hundreds of partners alongside a growing roster of creator campaigns for seasonal promotions. She juggles a large portfolio across multiple categories — grocery, electronics, fashion — and spends her mornings doing a portfolio scan before her day fills up with internal calls. Her biggest frustration is that she can't see her full portfolio without toggling between programs, and she often misses performance dips until they become problems. She loves data but hates hunting for it.

**Primary jobs:** Daily portfolio scan, partner check-in prep, creator campaign monitoring
**Pain points:** Toggle friction, alert fatigue, no unified view across programs
**Motivations:** Hit quarterly revenue targets, keep top partners happy, find the next breakout creator

---

### Persona 2 — **Priya Nguyen** *(Female)*
**Brand:** Chewy
**Title:** Creator & Affiliate Partnerships Lead
**Age:** 28

Priya focuses heavily on the creator side — she manages a network of pet influencers and content creators for Chewy's affiliate program. She's always recruiting, always checking content performance, and is constantly looking for creators who are punching above their weight so she can lock them in with a better deal before a competitor does. She operates fast and needs the platform to keep up. Her biggest frustration is that the affiliate and creator sides feel like two separate products — she has to context-switch constantly even though her job is really one thing.

**Primary jobs:** Recruit new partners, monitor creator campaigns, issue incentives
**Pain points:** Disconnected affiliate/creator workflows, no proactive partner recommendations
**Motivations:** Grow the creator roster, maximize content ROI, be first to spot rising talent

---

### Persona 3 — **Marcus Delgado** *(Male)*
**Brand:** Fenty Beauty
**Title:** Affiliate Program Manager
**Age:** 31

Marcus manages Fenty Beauty's affiliate program, with a mix of traditional publishers, beauty bloggers, and micro-influencer creators. He's meticulous about relationships — he tracks every partner's performance closely and makes sure high performers feel valued. He does weekly reviews every Monday and bi-weekly check-ins with his top 20 partners. He also coordinates closely with his CSM at Impact. His frustration is that preparing for a check-in takes way too long — he has to pull data from multiple places and piece it together manually.

**Primary jobs:** Partner relationship management, weekly portfolio analysis, check-in prep
**Pain points:** Check-in prep is manual and time-consuming, no single partner performance brief
**Motivations:** Retain top partners, grow program revenue, run tight and efficient check-ins

---

## Success Metrics

- **Time-to-job-completion** — how long does it take a user to complete a core job from login?
- **Toggle rate** — reduction in program context switches per session
- **Inline action rate** — % of bonuses, invites, and notes completed without leaving the dashboard
- **Check-in prep time** — reduction in time spent manually pulling partner data before a call
- **Dashboard engagement** — % of users who engage with surfaced recommendations

---

## Open Questions

1. What calendar integration is feasible in the near term — Google Calendar, Outlook, or Impact CSM calendar only?
2. Is the toggle problem best solved by a unified multi-program view or a persistent program context throughout navigation?
3. What performance signals are available in real-time vs. delayed? This affects the daily scan design.
4. Who owns the check-in confirmation UX — the brand user, the CSM, or both?

---

*Next step: Wireframes for the Affiliate Creator Manager dashboard, covering daily scan, partner check-in prep, and recruit new partners flows.*
