/* For Caregivers - content extracted from the approved design file */
import cgHero from '../assets/cg/cg-01.jpg';
import ddPhoto from '../assets/dd/dd-05.jpg';
import cgSenior from '../assets/cg/cg-02.webp';

export const HERO_IMG = cgHero;
export const SENIOR_IMG = cgSenior;
export const DEMO_BG = ddPhoto;
export const HEADINGS = {
  "worries-h": {
    "title": "The worries this takes off your list",
    "sub": "The stress isn&rsquo;t the medicine &mdash; it&rsquo;s not knowing. Here&rsquo;s what changes."
  },
  "demo-h": {
    "title": "Watch a missed dose reach you",
    "sub": "Mum&rsquo;s 8:00 dose. Tap her phone &mdash; or fast-forward to see what lands on yours."
  },
  "family-h": {
    "title": "One account, up to five people",
    "sub": "A parent, a spouse, a child with an inhaler &mdash; each gets their own profile, schedule and reminders. Link up to five."
  },
  "perm-h": {
    "title": "They stay in charge. You see only what they allow.",
    "sub": "Care works when it doesn&rsquo;t feel like surveillance. Each profile has its own permission level."
  },
  "senior-h": {
    "title": "Made for the phone at the other end, too",
    "sub": ""
  },
  "more-h": {
    "title": "More than reminders, when you&rsquo;re the one keeping track",
    "sub": ""
  },
  "setup-h": {
    "title": "Set up together, in four steps",
    "sub": "Most families do this at the kitchen table in one sitting."
  },
  "faq-h": {
    "title": "Questions every caregiver asks first",
    "sub": ""
  }
};
export const HERO = {
  "h1": "Stop calling every morning: <em>&ldquo;Did you take your pill?&rdquo;</em>",
  "lede": "Link their medicines - see each dose, hear when one is missed.",
  "facts": [
    {
      "icon": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#006F56\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20 6 9 17l-5-5\"/></svg>",
      "text": "Up to 5 people on one account"
    },
    {
      "icon": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#006F56\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20 6 9 17l-5-5\"/></svg>",
      "text": "Alert only when a dose is missed"
    },
    {
      "icon": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#006F56\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20 6 9 17l-5-5\"/></svg>",
      "text": "They decide what you can see"
    }
  ]
};
export const HERO_CTA = {
  "primary": "See how a missed-dose alert works",
  "ghost": "Set up in 4 steps"
};
export const ALERT_CHIP = {
  "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#F2A000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\"/><path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\"/></svg>",
  "title": "Missed-dose alert",
  "text": "Mum&rsquo;s 8:00 dose hasn&rsquo;t been confirmed yet &mdash; tap to call her."
};
export const WORRIES = [
  {
    "q": "&ldquo;Did she take it &mdash; or just say yes so I&rsquo;d stop asking?&rdquo;",
    "arrow": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg>",
    "a": "One tap on the notification &mdash; Taken, Snooze or Skip &mdash; and you see the answer and the time."
  },
  {
    "q": "&ldquo;What if he forgets and nobody notices?&rdquo;",
    "arrow": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg>",
    "a": "It reminds again after 10 minutes. Still nothing, and the alert reaches you."
  },
  {
    "q": "&ldquo;The doctor asks how the month went. Nobody remembers.&rdquo;",
    "arrow": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg>",
    "a": "The adherence calendar keeps every day; one tap gives you a PDF or CSV report for the doctor."
  },
  {
    "q": "&ldquo;The bottle runs out on a Friday night.&rdquo;",
    "arrow": "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/></svg>",
    "a": "Low-stock alerts warn you early &mdash; the refill is planned, not an emergency."
  }
];
export const DEMO = {
  "timeline": [
    {
      "t": "8:00",
      "text": "Reminder sent to Mum, with Taken / Snooze / Skip on the notification."
    },
    {
      "t": "8:10",
      "text": "No confirmation yet &mdash; the reminder escalates and rings her again."
    },
    {
      "t": "8:15",
      "text": "Still nothing &mdash; a missed-dose alert is sent to you."
    }
  ],
  "week": [
    {
      "cls": "done",
      "letter": "M",
      "attrs": ""
    },
    {
      "cls": "done",
      "letter": "T",
      "attrs": ""
    },
    {
      "cls": "done",
      "letter": "W",
      "attrs": ""
    },
    {
      "cls": "done",
      "letter": "T",
      "attrs": ""
    },
    {
      "cls": "today",
      "letter": "F",
      "attrs": "id=\"todayDot\""
    },
    {
      "cls": "",
      "letter": "S",
      "attrs": ""
    },
    {
      "cls": "",
      "letter": "S",
      "attrs": ""
    }
  ],
  "weekLabel": "Mum&rsquo;s week &mdash; morning dose: 4 of 5 taken"
};
export const DEMO_ALERT = {
  "title": "Missed-dose alert &mdash; Mum",
  "text": "Her 8:00 morning tablets still aren&rsquo;t confirmed. This is often just a phone left in another room &mdash; a quick call usually settles it.",
  "nudge": "Send a nudge",
  "checked": "Mark as checked &mdash; she&rsquo;s fine"
};
export const DEMO_META = {
  "phoneName": "Mum&rsquo;s phone",
  "phoneSub": "Reminder notification",
  "notifTime": "Today &middot; 8:00 AM",
  "notifMed": "Morning tablets",
  "notifDose": "2 medicines &middot; with breakfast",
  "status": "Waiting for a tap&hellip;",
  "ffwd": "No reply? Fast-forward 15 minutes &rarr;",
  "reset": "Reset the demo",
  "careTitle": "Your phone, as her caregiver",
  "careSub": "You are not watching all day. You only hear from the app when something needs you."
};
export const PROFILES = [
  {
    "avatar": "M",
    "name": "Mum",
    "sub": "3 medicines &middot; 2 doses a day",
    "stat1": "This week",
    "stat1v": "13 of 14 taken",
    "bar": "93%",
    "stat2": "Current streak",
    "stat2v": "6 days",
    "chip": "On track",
    "chipCls": "ok"
  },
  {
    "avatar": "D",
    "name": "Dad",
    "sub": "2 medicines &middot; 1 dose a day",
    "stat1": "This week",
    "stat1v": "7 of 7 taken",
    "bar": "100%",
    "stat2": "Tablets left",
    "stat2v": "4 &mdash; refill soon",
    "chip": "Low stock &mdash; 4 days left",
    "chipCls": "warn"
  },
  {
    "add": true,
    "title": "+ Add a person",
    "text": "Three of five profiles used. Add a spouse, a child, or another parent whenever you need to.",
    "chip": "Family Pro &middot; 5 profiles"
  }
];
export const PROFILES_CAPTION = "An example family view &mdash; names and numbers are illustrative. Your view fills in from the profiles you link.";
export const PERM_NOTE = {
  "title": "Set per person, not per family.",
  "text": "You might fully manage Dad&rsquo;s medicines while Mum &mdash; who handles hers well &mdash; only shares her missed-dose alerts with you. The person being cared for approves the link, and either side can change or remove it."
};
export const SENIOR = {
  "points": [
    {
      "icon": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#006F56\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20 6 9 17l-5-5\"/></svg>",
      "text": "Bigger text and buttons &mdash; one large Taken button, nothing small to miss."
    },
    {
      "icon": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#006F56\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20 6 9 17l-5-5\"/></svg>",
      "text": "One thing per screen &mdash; no menus to get lost in between the reminder and the tap."
    },
    {
      "icon": "<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#006F56\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20 6 9 17l-5-5\"/></svg>",
      "text": "Home &amp; lock-screen widgets &mdash; the next dose is visible without opening anything."
    }
  ]
};
export const SENIOR_TEXT = "If the app is hard for your parent to read, the best reminder system in the world won&rsquo;t help. Senior Mode strips their side of the app down to the essentials.";
export const MORE = [
  {
    "icon": "<svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/><path d=\"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h6.27\"/></svg>",
    "title": "Side effects, written down together",
    "text": "&ldquo;I felt dizzy after the new tablet&rdquo; goes in the Side-Effect Log with the date &mdash; a record, not a recollection."
  },
  {
    "icon": "<svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M3 3v18h18\"/><path d=\"m7 14 4-4 3 3 5-6\"/></svg>",
    "title": "Vitals in the same record",
    "text": "Blood pressure, glucose, weight and heart rate sit with the doses, so patterns and the doctor see the whole picture."
  },
  {
    "icon": "<svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"m9 12 2 2 4-4\"/></svg>",
    "title": "A safety check on every new medicine",
    "text": "Every new prescription is checked for drug&ndash;drug interactions and allergies against everything they already take."
  },
  {
    "icon": "<svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"M10 9H8\"/><path d=\"M16 13H8\"/><path d=\"M16 17H8\"/></svg>",
    "title": "A report the doctor actually reads",
    "text": "Export any profile&rsquo;s month as PDF or CSV &mdash; doses taken and missed, side effects, vitals &mdash; ready before the appointment."
  }
];
export const STEPS = [
  {
    "num": "1",
    "title": "Create your account",
    "text": "Install on both phones and sign up &mdash; yours is the caregiver account."
  },
  {
    "num": "2",
    "title": "Add their medicines",
    "text": "Scan the label or search the drug database &mdash; name, dose and times fill in, then adjust together."
  },
  {
    "num": "3",
    "title": "Link the profile",
    "text": "Send the invite; they accept it on theirs. Pick the permission level together first."
  },
  {
    "num": "4",
    "title": "Pick your alerts",
    "text": "Missed dose, low stock, weekly summary &mdash; turn on only what you want. Silence is the default."
  }
];
export const PLAN = {
  title: "Family Pro is the caregiver plan",
  text: "Your own reminders are free, forever. When you link a second person, Family Pro covers the whole family.",
  bullets: [
    "Up to 5 linked profiles",
    "Missed-dose &amp; low-stock caregiver alerts",
    "Interaction &amp; allergy checks, reports &amp; vitals"
  ],
  price: "$12.99 / month",
  note: "or $79.99 a year &mdash; for all five profiles, not per person.",
  cta: "Start free, upgrade when you link"
};
export const FAQS = [
  {
    "q": "Does the person I care for need their own phone?",
    "a": "Yes &mdash; the reminders ring on their phone, and their Taken / Snooze / Skip tap is what you see on yours. If reading a normal app is hard for them, turn on Senior Mode: bigger text, one large Taken button, and a widget that shows the next dose on the home and lock screens."
  },
  {
    "q": "Can my brother or sister help too?",
    "a": "Yes. More than one caregiver can be linked to the same profile, and each person gets their own permission level &mdash; so a sibling who lives nearby can be a full manager while you, further away, keep view-only access and the missed-dose alerts."
  },
  {
    "q": "What if they tap Skip by mistake?",
    "a": "Nothing is hidden. A skip is logged with its time &mdash; and a reason, if they add one &mdash; and it shows in the profile&rsquo;s day view and weekly record, so you can ask about it on your next call instead of wondering."
  },
  {
    "q": "What if they just ignore the reminder?",
    "a": "The reminder escalates once after 10 minutes. If the dose still isn&rsquo;t confirmed, you get the missed-dose alert &mdash; try the demo above to see the exact sequence. You choose which alerts you receive, per person."
  },
  {
    "q": "Can they stop sharing with me?",
    "a": "Any time. The link is approved by the person being cared for, and either side can lower the permission level or remove the connection. Their medicines and history stay in their own account."
  }
];
export const FOOTER_DISC = "For Caregivers is part of the Medicine Reminder App website, alongside Features, The Daily Dose blog and the Help Desk. This page is general information about how the app works &mdash; it is not medical advice. Always follow the prescription label, and ask a doctor or pharmacist if you are unsure about a medicine or a missed dose.";
export const FOOTER_PHOTO = "a mother and daughter reviewing her medication at home.";

export const PERMISSIONS = {
  view: {
    desc: "For the family member who wants reassurance, not a second job. They can look - they can't change anything.",
    items: [
      ["See today's schedule and what's been taken", true],
      ['See the adherence calendar and streaks', true],
      ['Receive missed-dose alerts', true],
      ['Mark a dose as taken or skipped', false],
      ['Add or edit medicines and times', false],
      ['Export doctor reports', false]
    ]
  },
  help: {
    desc: 'For the person who is actually there at dose time - a spouse, or a sibling who lives nearby.',
    items: [
      ["See today's schedule and what's been taken", true],
      ['See the adherence calendar and streaks', true],
      ['Receive missed-dose alerts', true],
      ['Mark a dose as taken or skipped', true],
      ['Log side effects and vitals', true],
      ['Add or edit medicines and times', false],
      ['Export doctor reports', true]
    ]
  },
  manage: {
    desc: 'For the main caregiver who runs the whole routine - medicines, refills, appointments and all.',
    items: [
      ["See today's schedule and what's been taken", true],
      ['See the adherence calendar and streaks', true],
      ['Receive missed-dose and low-stock alerts', true],
      ['Mark a dose as taken or skipped', true],
      ['Log side effects and vitals', true],
      ['Add or edit medicines and times', true],
      ['Export doctor reports', true]
    ]
  }
};
