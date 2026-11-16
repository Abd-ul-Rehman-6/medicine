/* FAQs content extracted from the approved design file */
export const FAQ_JSONLD = "{\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"FAQPage\",\n      \"mainEntity\": [\n        {\"@type\":\"Question\",\"name\":\"I missed a dose. What should I do?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Do not take a double dose to catch up. In most cases you either take the missed dose when you remember (if the next dose is not close) or skip it and take the next dose at its normal time. Mark the dose as Skipped in the app with a short reason so your adherence record stays honest, and ask your doctor or pharmacist if you are unsure.\"}},\n        {\"@type\":\"Question\",\"name\":\"Why didn't my reminder arrive?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Check three things: notifications are allowed for the app in your phone settings, the medicine's schedule is active and not paused, and battery optimisation is not putting the app to sleep. Quiet hours also hold reminders back until they end.\"}},\n        {\"@type\":\"Question\",\"name\":\"How do I change a medicine's schedule?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Open the medicine, tap Edit Schedule, change the times, days or dose pattern, and save. The new schedule applies from the next dose onward; doses you already took are not changed.\"}},\n        {\"@type\":\"Question\",\"name\":\"What is the difference between Free, Solo Pro and Family Pro?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Free covers the essentials for one person. Solo Pro ($6.99/month) adds advanced schedules, interaction and allergy checks, vitals tracking and PDF/CSV reports. Family Pro ($12.99/month) adds up to 5 profiles and caregiver alerts.\"}},\n        {\"@type\":\"Question\",\"name\":\"How do I track a parent's medicines from my account?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"With Family Pro, add a profile for your parent, set up their medicines and reminders, and turn on caregiver alerts. You will be notified when a dose is missed, and they keep control over what you can see.\"}},\n        {\"@type\":\"Question\",\"name\":\"How do I export or delete my data?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Go to Settings, then Privacy & Data. You can export your medicines, dose history and reports as PDF or CSV at any time, or delete your account and all of its data permanently from the same screen.\"}}\n      ]\n    }";

export const QUICK_CHIPS = [
  {
    "value": "missed dose",
    "label": "Missed a dose"
  },
  {
    "value": "reminder not",
    "label": "Reminder didn't arrive"
  },
  {
    "value": "refill",
    "label": "Refills"
  },
  {
    "value": "parent caregiver",
    "label": "Caring for a parent"
  },
  {
    "value": "cancel",
    "label": "Cancel Pro"
  }
];

export const CATEGORIES = [
  {
    "key": "all",
    "label": "All topics"
  },
  {
    "key": "start",
    "label": "Getting started"
  },
  {
    "key": "reminders",
    "label": "Reminders & missed doses"
  },
  {
    "key": "schedules",
    "label": "Schedules"
  },
  {
    "key": "refills",
    "label": "Stock & refills"
  },
  {
    "key": "safety",
    "label": "Safety"
  },
  {
    "key": "family",
    "label": "Family & caregivers"
  },
  {
    "key": "reports",
    "label": "Reports & doctor"
  },
  {
    "key": "account",
    "label": "Account & plans"
  },
  {
    "key": "privacy",
    "label": "Privacy & data"
  }
];

export const TOP_QUESTIONS = [
  {
    "target": "q-missed",
    "q": "I missed a dose. What should I do?",
    "small": "Never double up - and how to log it."
  },
  {
    "target": "q-noreminder",
    "q": "Why didn't my reminder arrive?",
    "small": "Three settings cause almost every case."
  },
  {
    "target": "q-change",
    "q": "How do I change a medicine's schedule?",
    "small": "New times apply from the next dose."
  },
  {
    "target": "q-plans",
    "q": "Free vs Pro — what's the difference?",
    "small": "Solo Pro $6.99/mo, Family Pro $12.99/mo - what each adds."
  },
  {
    "target": "q-parent",
    "q": "How do I track my parent's medicines?",
    "small": "Their profile, their reminders, alerts for missed doses."
  },
  {
    "target": "q-data",
    "q": "How do I export or delete my data?",
    "small": "Export as PDF/CSV, or delete your account."
  }
];

export const GROUPS = [
  {
    "key": "start",
    "title": "Getting started",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10.5 20.5a5.3 5.3 0 0 1-7.5-7.5l9-9a5.3 5.3 0 1 1 7.5 7.5z\"/><path d=\"m7 17 9-9\"/></svg>",
    "items": [
      {
        "id": "q-add",
        "cat": "start",
        "q": "How do I add my first medicine?",
        "answer": "<p>Tap <b>Add Medicine</b>, then search the drug database by name or scan your label - the app reads the name and dose for you. Check it against the bottle, set the times, save. Your first reminder is set.</p>\n\n<div class=\"do-box\"><b>In the app</b>Home → Add Medicine → Search or Scan label → Confirm → Set times → Save.</div>"
      },
      {
        "id": "q-scan",
        "cat": "start",
        "q": "The scan read my label wrong. What now?",
        "answer": "<p>Nothing saves until you confirm. Tap any wrong field - name, strength, directions - and type the value from the bottle. If the photo was blurry, retake it in brighter light, label flat.</p>\n\n<div class=\"do-box\"><b>In the app</b>On the review screen, tap a field to edit it. The bottle in your hand always wins over the scan.</div>"
      },
      {
        "id": "q-senior",
        "cat": "start",
        "q": "What is Senior Mode, and how do I turn it on?",
        "answer": "<p>Senior Mode makes the home screen easier to read: larger text, bigger Taken / Skip / Snooze buttons, only today&rsquo;s doses up front. It changes how the app looks, not your medicines.</p>\n\n<div class=\"do-box\"><b>In the app</b>Settings → Accessibility → Senior Mode. You can turn it off again any time.</div>"
      }
    ]
  },
  {
    "key": "reminders",
    "title": "Reminders & missed doses",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\"/><path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\"/></svg>",
    "items": [
      {
        "id": "q-missed",
        "cat": "reminders",
        "q": "I missed a dose. What should I do?",
        "answer": "<p>First rule: <b>never take a double dose to catch up</b>. If the next dose isn&rsquo;t close, take the missed dose when you remember; if it&rsquo;s nearly due, skip it and carry on. Log it honestly in the app.</p>\n\n<div class=\"do-box\"><b>In the app</b>Open the dose → Skip → add a short reason (“left home early”). The pattern matters more than one miss.</div>\n                <div class=\"warn-box\"><b>Not medical advice</b>This is general information only. If you are unsure about a specific medicine, ask your doctor or pharmacist.</div>"
      },
      {
        "id": "q-noreminder",
        "cat": "reminders",
        "q": "Why didn't my reminder arrive?",
        "answer": "<p>Almost always one of three:</p>\n\n<ul>\n<li><b>Notifications are off</b> for the app in your phone&rsquo;s settings.</li>\n<li><b>The schedule is paused</b>, or the time was edited after the reminder was set.</li>\n<li><b>Battery saving</b> is sleeping the app - allow it to run in the background.</li>\n</ul>\n\n<p>Quiet hours hold reminders back until they end.</p>\n\n<div class=\"do-box\"><b>In the app</b>Settings → Notifications → “Test reminder” sends one now, so you can confirm it works.</div>"
      },
      {
        "id": "q-buttons",
        "cat": "reminders",
        "q": "What do Taken, Skip and Snooze actually do?",
        "answer": "<p><b>Taken</b> logs the dose now. <b>Snooze</b> reminds you again shortly - the dose stays &ldquo;due&rdquo;. <b>Skip</b> closes it as not taken, with a reason. You can answer straight from the notification, without opening the app.</p>\n\n<div class=\"do-box\"><b>Good to know</b>No reply? The app nudges again after 10 minutes, then marks the dose missed - and alerts a caregiver, if you have that on.</div>"
      },
      {
        "id": "q-widget",
        "cat": "reminders",
        "q": "Can I see my doses without opening the app?",
        "answer": "<p>Yes. Add the home- or lock-screen widget and today&rsquo;s next dose is always visible, with its time. To mark a dose Taken, tap through to the reminder or the app.</p>\n\n<div class=\"do-box\"><b>On your phone</b>Long-press the home screen → Widgets → Medicine Reminder → choose the small or large widget.</div>"
      }
    ]
  },
  {
    "key": "schedules",
    "title": "Schedules",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M16 2v4M8 2v4M3 10h18\"/></svg>",
    "items": [
      {
        "id": "q-change",
        "cat": "schedules",
        "q": "How do I change a medicine's schedule?",
        "answer": "<p>Medicine &rarr; <b>Edit Schedule</b>, then change the times, days or pattern. It applies from the next dose onward - doses you already took keep their times, so your history stays accurate.</p>\n\n<div class=\"do-box\"><b>In the app</b>Medicine → Edit Schedule → adjust → Save. No need to delete and re-add the medicine.</div>"
      },
      {
        "id": "q-weekdays",
        "cat": "schedules",
        "q": "Can I set reminders for specific weekdays only?",
        "answer": "<p>Yes. Besides daily, pick specific weekdays (for example Monday, Wednesday, Friday), a repeating cycle (3 weeks on, 1 off), or different times on different days.</p>\n\n<div class=\"do-box\"><b>In the app</b>Edit Schedule → Repeat → Specific days → tap the days → Save.</div>"
      },
      {
        "id": "q-prn",
        "cat": "schedules",
        "q": "What are PRN and tapering schedules?",
        "answer": "<p><b>PRN</b> means &ldquo;as needed&rdquo;: no fixed times, you log each dose, and the app warns you if doses get too close. A <b>tapering</b> schedule steps the dose down or up over days or weeks, exactly as your doctor set it.</p>\n\n<div class=\"do-box\"><b>In the app</b>Add Medicine → Schedule type → As needed (PRN) or Tapering. Always enter the taper exactly as prescribed.</div>"
      }
    ]
  },
  {
    "key": "refills",
    "title": "Stock & refills",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z\"/><path d=\"m3.3 7 8.7 5 8.7-5M12 22V12\"/></svg>",
    "items": [
      {
        "id": "q-lowstock",
        "cat": "refills",
        "q": "How do low-stock alerts work?",
        "answer": "<p>Tell the app how many tablets you have. It counts down as you log doses and alerts you at about a week&rsquo;s supply - early enough to order without rushing. Took a dose without logging it? Adjust the count by hand.</p>\n\n<div class=\"do-box\"><b>In the app</b>Medicine → Stock → set the count and your alert level. Restocked? Tap “Refilled” and enter the new amount.</div>"
      },
      {
        "id": "q-refillwhen",
        "cat": "refills",
        "q": "When should I order a refill?",
        "answer": "<p>Order at about <b>7 days left</b>: pharmacies take a day or two, and some medicines need a doctor&rsquo;s repeat approval first. The low-stock alert defaults to that same point.</p>\n\n<p>The Daily Dose guide <i>&ldquo;Running low? How refills and low-stock alerts work&rdquo;</i> has the full version.</p>\n\n<div class=\"do-box\"><b>In the app</b>When the alert arrives, tap it to see exactly how many days of stock remain.</div>"
      }
    ]
  },
  {
    "key": "safety",
    "title": "Safety",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"m9 12 2 2 4-4\"/></svg>",
    "items": [
      {
        "id": "q-interactions",
        "cat": "safety",
        "q": "How do interaction and allergy checks work?",
        "answer": "<p>When you add a medicine, the app checks it against the medicines and allergies already on your profile. Known clashes show a clear warning before you save - nothing is blocked silently, and the warning tells you what to ask your pharmacist.</p>\n\n<div class=\"warn-box\"><b>Important</b>A safety net, not a guarantee - and not medical advice. Tell your doctor and pharmacist about every medicine you take, including over-the-counter ones and supplements.</div>"
      },
      {
        "id": "q-sideeffects",
        "cat": "safety",
        "q": "How do I log a side effect?",
        "answer": "<p>Open the dose or medicine &rarr; <b>Log a side effect</b>. Note what you felt, when it started and how strong - one honest line a day. It goes into your doctor report, which is what lets a doctor judge if a feeling is medicine-related.</p>\n\n<p>Not sure what&rsquo;s normal? The Daily Dose guide <i>&ldquo;Side effects: when they are normal, when to call your doctor&rdquo;</i> explains the difference.</p>\n\n<div class=\"do-box\"><b>In the app</b>Medicine → Side-Effect Log → Add entry. Severe or worrying symptoms: contact a doctor first, log later.</div>"
      },
      {
        "id": "q-dosage",
        "cat": "safety",
        "q": "Will the app ever tell me what dose to take?",
        "answer": "<p>No. The app repeats the dose <b>you</b> entered from your label - it never calculates, recommends or changes one. If the app and your label ever disagree, the label wins: fix the entry, and ask your pharmacist if you&rsquo;re unsure.</p>"
      }
    ]
  },
  {
    "key": "family",
    "title": "Family & caregivers",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75\"/></svg>",
    "items": [
      {
        "id": "q-parent",
        "cat": "family",
        "q": "How do I track my parent's medicines from my account?",
        "answer": "<p>With Family Pro, add a profile for your parent, set up their medicines and reminders, and turn on caregiver alerts. Their phone reminds them; you hear only when something needs attention.</p>\n\n<div class=\"do-box\"><b>In the app</b>Profiles → Add profile → add their medicines → Caregiver alerts → On.</div>"
      },
      {
        "id": "q-permissions",
        "cat": "family",
        "q": "What can a caregiver see? Who controls it?",
        "answer": "<p>The person stays in control. They pick the level: <b>alerts only</b> (you&rsquo;re told about missed doses), <b>view</b> (also schedule and adherence), or <b>manage</b> (edit medicines and schedules). Access can be changed or removed any time, from their side.</p>\n\n<div class=\"do-box\"><b>In the app</b>Profile → Caregivers → pick a person → choose Alerts only, View, or Manage.</div>"
      },
      {
        "id": "q-carealert",
        "cat": "family",
        "q": "When exactly do I get a missed-dose alert for someone I care for?",
        "answer": "<p>Not at the first beep. They get the reminder, then a follow-up 10 minutes later. Only if the dose is still unconfirmed after that are you alerted - so you&rsquo;re contacted when it matters, not for every late tap.</p>\n\n<div class=\"do-box\"><b>In the app</b>Caregiver alerts can be set per medicine, so critical medicines alert you and routine ones don't have to.</div>"
      }
    ]
  },
  {
    "key": "reports",
    "title": "Reports & doctor visits",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8\"/></svg>",
    "items": [
      {
        "id": "q-report",
        "cat": "reports",
        "q": "How do I make a report for my doctor?",
        "answer": "<p>Pick a date range and the app builds a report: medicines, adherence, missed doses, side-effect log and vitals. Export as <b>PDF</b> to show or print, or <b>CSV</b> if your clinic wants the raw data.</p>\n\n<div class=\"do-box\"><b>In the app</b>Reports → New report → pick the dates → Export as PDF or CSV.</div>"
      },
      {
        "id": "q-vitals",
        "cat": "reports",
        "q": "Can I track blood pressure, glucose and other vitals?",
        "answer": "<p>Yes. Log blood pressure, glucose, weight and heart rate next to your doses, and they land in the same trends and doctor reports - so &ldquo;I felt dizzy on Tuesday&rdquo; sits beside Tuesday&rsquo;s readings.</p>\n\n<div class=\"do-box\"><b>In the app</b>Home → Vitals → Add reading. Log at the same time of day for the clearest trends.</div>"
      }
    ]
  },
  {
    "key": "account",
    "title": "Account & plans",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/><path d=\"M2 10h20\"/></svg>",
    "items": [
      {
        "id": "q-plans",
        "cat": "account",
        "q": "What is the difference between Free, Solo Pro and Family Pro?",
        "answer": "<p><b>Free</b>: reminders, basic schedules, low-stock alerts. <b>Solo Pro ($6.99/mo)</b>: advanced schedules, interaction and allergy checks, vitals, PDF/CSV reports. <b>Family Pro ($12.99/mo)</b>: up to 5 profiles + caregiver alerts.</p>\n\n<div class=\"do-box\"><b>In the app</b>Settings → Plan → Compare plans. Upgrading keeps all your medicines and history exactly as they are.</div>"
      },
      {
        "id": "q-cancel",
        "cat": "account",
        "q": "How do I cancel my subscription?",
        "answer": "<p>Cancel in your app store: phone Settings &rarr; your name &rarr; Subscriptions &rarr; Medicine Reminder &rarr; Cancel. You keep Pro until the period ends, then the account returns to Free. Your medicines, history and reports are <b>not</b> deleted.</p>\n\n<div class=\"do-box\"><b>Good to know</b>Deleting the app does not cancel a subscription — cancel in the store first, then delete if you want to.</div>"
      },
      {
        "id": "q-downgrade",
        "cat": "account",
        "q": "What happens to my data if I go back to Free?",
        "answer": "<p>Nothing is lost. Medicines, dose history, side-effect log and vitals stay put. Pro-only features just pause - extra family profiles become view-only - and return if you resubscribe.</p>"
      }
    ]
  },
  {
    "key": "privacy",
    "title": "Privacy & data",
    "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></svg>",
    "items": [
      {
        "id": "q-data",
        "cat": "privacy",
        "q": "How do I export or delete my data?",
        "answer": "<p>One place for both. <b>Export</b> downloads your medicines, dose history, side-effect log and vitals as PDF or CSV, any time. <b>Delete</b> erases your account and all its data - confirmed twice, no undo.</p>\n\n<div class=\"do-box\"><b>In the app</b>Settings → Privacy &amp; Data → Export my data, or Delete account.</div>"
      },
      {
        "id": "q-who",
        "cat": "privacy",
        "q": "Who can see my health information?",
        "answer": "<p>You, and only the caregivers you invite - at the level you choose (alerts, view, manage). Nobody is added without an invite, access can be removed any time, and reports exist only when you export them.</p>\n\n<div class=\"do-box\"><b>In the app</b>Settings → Privacy &amp; Data → “Who has access” shows everyone with access, and lets you remove them.</div>"
      }
    ]
  }
];

export const DISCLAIMER_HTML = "<b>Please note:</b> these answers are general information about using the app, not medical advice. The app reminds you of the dose on your prescription label — it never recommends or changes a dose. If you are unsure about any medicine, ask your doctor or pharmacist.";

export const FOOT_NOTE_HTML = "Medicine Reminder App — FAQs &amp; Help Desk. Answers grow from the questions people actually ask support.";

export const ASSISTANT_BOX_HTML = "<b>Want an instant answer instead?</b>\n              <p style=\"margin:4px 0 8px\">The app has a built-in AI assistant for quick questions, day or night: <b>Help / Support → Ask the assistant</b>. It answers from these same FAQs — and if it can't help, it hands you straight to human support.</p>\n              <a href=\"#topH\" id=\"assistantSearchLink\">Or search the answers on this page first →</a>";
