export const BLOG_POSTS = [
  {
    slug: 'ten-minute-rule-adherence',
    theme: 'teal',
    art: 'reminder',
    eyebrow: 'Smart reminders',
    headline: 'Adherence',
    date: 'November 12, 2026',
    read: '6 min read',
    category: 'Medication Management',
    title: 'The 10-Minute Rule: How Smart Reminders Build 98% Dose Adherence',
    excerpt:
      'Every reminder is another chance to confirm a dose. Pillo escalates, snoozes and comes back until you tap — turning good intentions into a habit that sticks.',
    author: {
      name: 'Dr. Amina Rahman',
      role: 'Clinical Content Lead, MediLife',
      initials: 'AR',
    },
    body: [
      {
        type: 'lead',
        text: 'Most missed doses are not decisions. They are gaps — ten minutes between the alarm and the actual swallow. Close that gap and adherence almost takes care of itself.',
      },
      {
        type: 'stats',
        items: [
          { value: '98%', label: 'Doses confirmed on time' },
          { value: '10 min', label: 'Average follow-up window' },
          { value: '2.4M', label: 'Reminders sent daily' },
        ],
      },
      {
        type: 'h2',
        text: 'Why ten minutes matters',
      },
      {
        type: 'p',
        text: 'A reminder is a prompt, not a promise. Research on daily routines shows that the gap between an alert and the action it asks for is where most plans fail — a phone call, a meeting, a distracted moment. The dose was never skipped on purpose; it was simply never taken.',
      },
      {
        type: 'p',
        text: 'This is why confirmation matters as much as the reminder itself. A reminder that asks nothing can be ignored quietly, and an ignored reminder is indistinguishable from a forgotten one. A reminder that expects a tap creates a small, repeatable moment of accountability.',
      },
      {
        type: 'h2',
        text: 'What escalation actually changes',
      },
      {
        type: 'p',
        text: 'Escalation is often misunderstood as nagging. Used well, it does something much simpler: it shortens the gap. The first alert asks. The follow-up removes the excuse that the first alert was missed.',
      },
      {
        type: 'ul',
        items: [
          'First alert arrives exactly at the scheduled dose time, with the medication name and strength.',
          'A short grace period gives you room to act without pressure — a meeting that ends, a train that stops.',
          'If nothing is confirmed, the reminder returns rather than disappearing into the notification shade.',
          'Snoozing is a choice, not an escape: you pick the next window, and the app holds the plan until then.',
        ],
      },
      {
        type: 'note',
        tone: 'info',
        title: 'Designed for real routines',
        text: 'Escalation stops the moment you confirm. There is no penalty loop and no daily nagging once your doses are logged — the system backs off exactly as quickly as it follows up.',
      },
      {
        type: 'h2',
        text: 'Designing a plan you can actually keep',
      },
      {
        type: 'p',
        text: 'The strongest medication plans attach each dose to something you already do. Breakfast, brushing your teeth, leaving the house. When a dose time maps to a routine, the decision is already made for you and the reminder only has to confirm it.',
      },
      {
        type: 'ul',
        items: [
          'Anchor each dose to a daily habit instead of a clock time that rarely survives a busy week.',
          'Keep dose windows realistic — a window you can hit consistently beats a perfect time you miss.',
          'Record the reason when you skip. "Forgot" and "felt unwell" need very different follow-ups.',
          'Review your own adherence weekly; patterns are easier to fix than single bad days.',
        ],
      },
      {
        type: 'takeaways',
        items: [
          'Short gaps, not more notifications, are what turn reminders into taken doses.',
          'Confirmation is the signal — a reminder that expects a tap changes behaviour.',
          'Escalation should fade the moment you confirm, not build pressure.',
          'Plans built on existing routines survive bad weeks far better than plans built on the clock.',
        ],
      },
    ],
    related: ['refill-windows', 'caregiver-shared-plans'],
  },
  {
    slug: 'refill-windows',
    theme: 'navy',
    art: 'refill',
    eyebrow: 'Refill tracking',
    headline: 'Refills',
    date: 'November 11, 2026',
    read: '4 min read',
    category: 'Medication Management',
    title: 'Never Run Out: A Simple System for Tracking Refill Windows',
    excerpt:
      'Stock counts, refill alerts and a linked pharmacy mean you always know how many days of medicine are left — long before the empty box finds you.',
    author: {
      name: 'Marcus Hale',
      role: 'Product Lead, Medication Experience',
      initials: 'MH',
    },
    body: [
      {
        type: 'lead',
        text: 'Running out of a medicine is not a planning failure — it is a visibility failure. You cannot manage what you cannot see, and most people manage their stock by memory.',
      },
      {
        type: 'stats',
        items: [
          { value: '12', label: 'Doses left in stock' },
          { value: '5 days', label: 'Until next refill window' },
          { value: '1 tap', label: 'To raise a refill alert' },
        ],
      },
      {
        type: 'h2',
        text: 'Count days, not boxes',
      },
      {
        type: 'p',
        text: 'Most people estimate remaining supply in half-used boxes sitting in a drawer. Boxes are a poor unit: they ignore how many doses are actually taken per day, whether a course has just started, and how long a prescription is meant to last.',
      },
      {
        type: 'p',
        text: 'Counting in days fixes this. If a medicine is taken twice daily and 12 doses remain, the real answer is six days — a number you can actually plan a refill around.',
      },
      {
        type: 'h2',
        text: 'A refill window that matches reality',
      },
      {
        type: 'p',
        text: 'A single hard deadline treats every medicine the same. In practice, a fixed 30-day course, an as-needed medicine and a chronic daily tablet need completely different warning windows.',
      },
      {
        type: 'ul',
        items: [
          'Chronic daily medicines: start warning when about a week of supply remains.',
          'Short courses and antibiotics: flag the end date, because there is no next refill.',
          'As-needed medicines: track usage over time so the window follows real consumption.',
          'Tapering doses: reduce the count automatically as the schedule steps down.',
        ],
      },
      {
        type: 'note',
        tone: 'info',
        title: 'One pharmacy, one record',
        text: 'Linking your pharmacy keeps the linked medications, refill alerts and prescription details in the same place — so the number you see matches what the store actually holds.',
      },
      {
        type: 'h2',
        text: 'Turn the warning into a two-minute job',
      },
      {
        type: 'p',
        text: 'The best refill system is the one that needs no decision at the moment the warning appears. Preset the days, keep the linked prescription number visible, and make raising the request a single tap. Then the warning becomes a prompt rather than a problem.',
      },
      {
        type: 'takeaways',
        items: [
          'Days remaining is a far more useful number than a half-empty box.',
          'Warning windows should follow the medicine — chronic, short-course and as-needed need different lead times.',
          'Linking your pharmacy removes the guesswork from every refill request.',
          'Automate what you can, so the refill takes two minutes instead of an evening.',
        ],
      },
    ],
    related: ['ten-minute-rule-adherence', 'side-effect-journal'],
  },
  {
    slug: 'caregiver-shared-plans',
    theme: 'teal',
    art: 'shared',
    eyebrow: 'Caregiver alerts',
    headline: 'Shared',
    date: 'November 10, 2026',
    read: '5 min read',
    category: 'Caregiver Support',
    title: 'Dose Plans That Still Work When Someone Else Helps',
    excerpt:
      'Invite a family member as a viewer or co-manager. When a dose is missed, they get a separate alert — and your plan keeps running either way.',
    author: {
      name: 'Dr. Amina Rahman',
      role: 'Clinical Content Lead, MediLife',
      initials: 'AR',
    },
    body: [
      {
        type: 'lead',
        text: 'Asking for help with medicines is an act of independence, not a loss of it. The plan stays yours; someone you trust simply gets a clear view of the parts that matter.',
      },
      {
        type: 'stats',
        items: [
          { value: '30 min', label: 'Grace period before alerts' },
          { value: '2 roles', label: 'Viewer or co-manager' },
          { value: '1 link', label: 'Secure, private invite' },
        ],
      },
      {
        type: 'h2',
        text: 'Who should see what',
      },
      {
        type: 'p',
        text: 'Caregiving is not all-or-nothing. Most people want visibility without takeover: enough to help if something goes wrong, not so much that the plan stops being theirs.',
      },
      {
        type: 'ul',
        items: [
          'Viewer: sees adherence and dose status, can nudge you, but cannot change the plan.',
          'Co-manager: can edit the schedule and log doses for you when they are physically present.',
          'Dependent profile: for children or anyone whose full routine you administer yourself.',
          'Nobody is invited automatically — access starts only after they accept.',
        ],
      },
      {
        type: 'note',
        tone: 'info',
        title: 'Health data stays private',
        text: 'An invite is a secure link sent by email or phone. Nothing is shared until the person accepts, and you can revoke access at any time.',
      },
      {
        type: 'h2',
        text: 'Alerts that help without alarming',
      },
      {
        type: 'p',
        text: 'The point of a caregiver alert is to close a gap quickly, not to create panic. That means it should arrive after a grace period, carry the facts, and suggest a next step.',
      },
      {
        type: 'ul',
        items: [
          'Wait for the grace period so a single delayed dose does not trigger a message.',
          'Send the medicine, the strength and how late the dose is — context, not just an alarm.',
          'Escalate only after the first alert is ignored, and stop once someone responds.',
          'Keep a single record so the caregiver and the patient never tell different stories.',
        ],
      },
      {
        type: 'h2',
        text: 'Keep the plan owned by the patient',
      },
      {
        type: 'p',
        text: 'Shared access works best when the plan stays simple and the roles stay clear. The person taking the medicine still decides when to snooze, which dose to skip and what the schedule should be — the caregiver simply gains visibility and a way to step in.',
      },
      {
        type: 'takeaways',
        items: [
          'Define the role first: visibility, or the ability to manage.',
          'Grace periods prevent alarming alerts for ordinary delays.',
          'Facts in the alert make it actionable instead of worrying.',
          'One shared record removes contradictions between patient and caregiver.',
        ],
      },
    ],
    related: ['ten-minute-rule-adherence', 'side-effect-journal'],
  },
  {
    slug: 'side-effect-journal',
    theme: 'navy',
    art: 'journal',
    eyebrow: 'Side effects',
    headline: 'Journal',
    date: 'November 10, 2026',
    read: '7 min read',
    category: 'Health Insights',
    title: 'Why Logging Side Effects Beside Your Doses Matters',
    excerpt:
      'A dose skipped for nausea looks different from a dose skipped because you forgot. Tagging the reason keeps your history honest, useful and doctor-ready.',
    author: {
      name: 'Marcus Hale',
      role: 'Product Lead, Medication Experience',
      initials: 'MH',
    },
    body: [
      {
        type: 'lead',
        text: 'A dose log without reasons is a diary of behaviour, not a record of health. Adding the "why" turns a list of taken and skipped doses into something a clinician can actually use.',
      },
      {
        type: 'stats',
        items: [
          { value: '3', label: 'One-tap skip reasons' },
          { value: '100%', label: 'Of skips explained' },
          { value: '1 tap', label: 'To share a history' },
        ],
      },
      {
        type: 'h2',
        text: 'Two skips, two different problems',
      },
      {
        type: 'p',
        text: 'When every missed dose looks the same, patterns hide. If you skip a medicine three times a month, the cause decides what happens next: forgetfulness needs a better reminder, while side effects need a clinician conversation. The remedy for one is the opposite of the remedy for the other.',
      },
      {
        type: 'p',
        text: 'One tap is enough to separate them. Tagging a skip as forgotten, a side effect, or a finished supply makes the difference visible within weeks.',
      },
      {
        type: 'h2',
        text: 'What is worth recording',
      },
      {
        type: 'ul',
        items: [
          'The reason a dose was skipped, in one word, chosen from a short list.',
          'The timing of symptoms relative to the dose — before, a few hours after, or overnight.',
          'Anything unusual that followed: nausea, dizziness, a rash, an upset stomach.',
          'The days you felt fine, because a good record needs contrast to be useful.',
        ],
      },
      {
        type: 'note',
        tone: 'warn',
        title: 'Never change a prescription on your own',
        text: 'This journal is for conversations with your clinician, not for self-adjusting a plan. If a medicine repeatedly causes side effects, bring the log to your prescriber and let them decide what to change.',
      },
      {
        type: 'h2',
        text: 'Making the history doctor-ready',
      },
      {
        type: 'p',
        text: 'A stack of loose notes is hard to use. A dated history with a clear status per dose — taken, missed, skipped with a reason — can be read in seconds, which is exactly how it gets used in a short appointment.',
      },
      {
        type: 'ul',
        items: [
          'Keep every entry dated so the sequence is obvious.',
          'Group by medication when you share, so each drug and its history stand apart.',
          'Include the reason column — it is usually the most valuable part of the export.',
          'Share only the window your clinician asked about; everything stays private until you send it.',
        ],
      },
      {
        type: 'takeaways',
        items: [
          'A skip without a reason hides whether you need a better reminder or medical advice.',
          'One-tap reasons take seconds and change how the history reads.',
          'Record symptoms and timing, not just doses — context is what makes it clinical.',
          'A dated, shareable history is what turns a log into something actionable.',
        ],
      },
    ],
    related: ['refill-windows', 'caregiver-shared-plans'],
  },
];

export function getPost(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug) || null;
}
