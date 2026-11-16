import ddImg1 from '../assets/dd/dd-01.jpg';
import ddImg2 from '../assets/dd/dd-02.jpg';
import ddImg3 from '../assets/dd/dd-03.webp';
import ddImg4 from '../assets/dd/dd-04.jpg';
import ddImg5 from '../assets/dd/dd-05.jpg';
import ddImg6 from '../assets/dd/dd-06.jpg';

/* Guides data extracted from The Daily Dose design file */
export const ARTICLES = {
  "missed-dose": {
    cat: "Missed a dose",
    min: 5,
    date: "Nov 10, 2026",
    title: "Missed a dose? Do this first",
    img: ddImg1,
    alt: "A woman at home holding her pills and a glass of water",
    summary: "Don't panic, and don't double up - let the clock decide.",
    takeaway: "For most everyday medicines: if you remember within a few hours, take it. If the next dose is close, skip the missed one. Almost never take two doses at once to “catch up”.",
    stage: ["starting","hard-days"],
    body: "<h2>Step 1: Look at the clock, not the calendar</h2><p>What matters is how much time is left before your next dose. Under half the usual gap has passed, taking the missed dose is normally fine. Over half, the safer default is to skip it and take the next dose on time.</p>\n<h2>Step 2: Never double up by default</h2><p>Doubling turns a small mistake into a real problem. A few medicines have their own catch-up rules on the label - follow the label, not this page. If it says nothing, one dose at a time is the rule.</p>\n<h2>Step 3: Write it down while you remember why</h2><p>&ldquo;Missed Tuesday&rdquo; is useless data. &ldquo;Missed Tuesday - left the house before breakfast&rdquo; is a pattern you can fix. Log the dose as skipped with the reason, and after two or three entries you will see whether the problem is the time, the place, or the routine.</p>\n<h2>The exceptions to ask about</h2><p>Some medicines are time-critical - certain diabetes medicines, blood thinners, anti-seizure, transplant medicines and birth control all have stricter rules. If yours is one, a pharmacist can tell you its exact window today. One call, and you know forever.</p>",
    doIt: "In the app, a missed dose isn't silent: the reminder escalates if it goes unconfirmed, and you can mark it Taken, Snooze, or Skip right from the notification — with the reason saved to your adherence calendar.",
    related: ["timing","refills"]
  },
  "timing": {
    cat: "When to take it",
    min: 4,
    date: "Nov 8, 2026",
    title: "“3 times a day” doesn't mean every 8 hours",
    img: ddImg3,
    alt: "A weekly pill organizer with one compartment open, filled with the day's tablets and capsules",
    summary: "No 3 a.m. alarms - here is how to space doses across your waking day.",
    takeaway: "Unless your label says “every 8 hours”, “3 times a day” means spread across your waking hours: morning, midday, and evening. Use the Timing Calculator above to build yours.",
    stage: ["starting"],
    body: "<h2>Two different instructions that sound the same</h2><p>&ldquo;Take 3 times a day&rdquo; and &ldquo;take every 8 hours&rdquo; are different prescriptions. The first is built around your day; the second around the clock, and is usually reserved for medicines - some antibiotics - where steady levels matter enough to justify waking up at night. Your label says which one you have.</p>\n<h2>The waking-hours method</h2><table><tr><th>Prescription</th><th>Strict clock</th><th>Waking-hours version (7 a.m.–11 p.m.)</th></tr><tr><td>Twice a day</td><td>Every 12 hours</td><td>7 a.m. and 7–9 p.m.</td></tr><tr><td>3 times a day</td><td>Every 8 hours</td><td>7 a.m., 3 p.m., 11 p.m. — or breakfast, lunch, dinner</td></tr><tr><td>4 times a day</td><td>Every 6 hours</td><td>7 a.m., 12 p.m., 5 p.m., 10–11 p.m.</td></tr></table><p>Anchor doses to meals - the oldest trick in pharmacy, because meals happen even on chaotic days. If your medicine is taken with food anyway, the anchor does double duty.</p>\n<h2>Consistency beats perfection</h2><p>A schedule you keep at &ldquo;roughly&rdquo; the same times beats a perfect one you abandon by Friday. Pick times that survive your worst day, not your best - then set the reminders once and stop thinking about it.</p>",
    doIt: "The app supports daily, specific-weekday, cyclical, tapering, and as-needed (PRN) schedules — so the waking-hours plan you just built becomes reminders that match your real day, not the clock's.",
    related: ["missed-dose","food"]
  },
  "food": {
    cat: "Food & drink",
    min: 4,
    date: "Nov 5, 2026",
    title: "With food, or on an empty stomach?",
    img: ddImg4,
    alt: "A pharmacist explaining a prescription to a patient across the pharmacy counter",
    summary: "That one line on the label changes how much your body absorbs.",
    takeaway: "“With food” means with a real snack or meal, not two bites. “On an empty stomach” usually means 1 hour before or 2 hours after eating. When in doubt, the pharmacist who filled it knows your exact medicine.",
    stage: ["starting","routine"],
    body: "<h2>Why food changes the dose</h2><p>Food can speed a medicine up, slow it down, or block it. Some need fat in the stomach to be absorbed at all; others get soaked up by calcium or iron in a meal. The label instruction is part of the dose, not a suggestion.</p>\n<h2>The pairings people get wrong</h2><ul><li><b>Dairy and certain antibiotics</b> — calcium can bind them. Separate by a couple of hours.</li><li><b>Grapefruit</b> — blocks an enzyme dozens of medicines rely on. Check yours once, know forever.</li><li><b>Alcohol</b> — the risky one is often the drowsiness or liver load you don't feel coming. Your label will carry the warning if it applies.</li><li><b>Leafy greens and blood thinners</b> — it's not “never eat them”, it's “keep the amount steady”.</li></ul>\n<h2>Make the label do the work</h2><p>Pick up a new prescription and ask one question: &ldquo;With food, or away from food?&rdquo; Write the answer into the medicine&rsquo;s note before you leave the pharmacy. Future-you, standing in the kitchen at 8 p.m., will be grateful.</p>",
    doIt: "Every medicine in the app carries your own notes — including its food rule — right on the reminder. And drug-interaction and allergy checks flag the dangerous pairings before the first dose, not after.",
    related: ["timing","side-effects"]
  },
  "side-effects": {
    cat: "Side effects",
    min: 5,
    date: "Nov 2, 2026",
    title: "Side effects: what's normal, what's a phone call",
    img: ddImg5,
    alt: "A woman checking her blood pressure with a home monitor at her kitchen table",
    summary: "Most new-medicine symptoms fade in a week. A few should never wait.",
    takeaway: "Mild and fading is normal. New, worsening, or frightening is a phone call. Log what you feel, when it started, and how strong it was — that log is what turns a vague worry into a useful doctor conversation.",
    stage: ["routine","hard-days"],
    body: "<h2>The first-week rule</h2><p>Many medicines announce themselves: mild nausea, a headache, dry mouth, odd dreams, a dip in energy. These usually peak in the first few days and fade by week one or two. Stopping a medicine in that window - without telling anyone - is how people end up untreated and labelled &ldquo;non-compliant&rdquo; for what was actually a side effect.</p>\n<h2>Call the same day if you notice</h2><ul><li>Trouble breathing, swelling of lips or tongue, a spreading rash</li><li>Fainting, severe dizziness, or a racing/irregular heartbeat that doesn't settle</li><li>Unusual bleeding or bruising, black stools</li><li>Anything that frightens you — that is a valid reason on its own</li></ul>\n<h2>The diary that changes the appointment</h2><p>&ldquo;I think it makes me tired&rdquo; gets a shrug. &ldquo;Since March 3rd, an hour after the evening dose, rated 6 out of 10, gone by morning&rdquo; gets a dose change. Ten seconds per entry, three fields: what, when, how strong. After two weeks you have evidence instead of an impression - and patterns (only on workdays? only with the morning dose?) often point at the fix.</p>",
    doIt: "The app's side-effect log sits one tap from the dose it followed, and it travels into your PDF report — so your doctor sees the pattern, not your summary of it. Vitals like blood pressure, glucose, and weight log alongside.",
    related: ["food","care-report"]
  },
  "refills": {
    cat: "Refills & pharmacy",
    min: 4,
    date: "Oct 29, 2026",
    title: "The refill rule: reorder at 7, not at 0",
    img: ddImg3,
    alt: "A weekly pill organizer showing the week's compartments",
    summary: "Running out is a counting problem - not a pharmacy one.",
    takeaway: "Count what's left today. If it's under a week's supply, that's the reorder day — not when the bottle rattles empty. Use the Refill Countdown above with your real numbers.",
    stage: ["routine","hard-days"],
    body: "<h2>Why &ldquo;I&rsquo;ll reorder when it&rsquo;s low&rdquo; fails</h2><p>Three delays stack up: the pharmacy needs a day or two if stock is low, your prescriber needs time if a renewal is required, and weekends exist. Each is small; together they eat the buffer most people don&rsquo;t have. A 7-day reorder point absorbs all three with room to spare.</p>\n<h2>Count once, properly</h2><p>Once a week - same day, same moment, pill organizer refill time - count what is actually in the bottle and note it. Forecasting from the label (&ldquo;filled Oct 1, 90 tablets&rdquo;) fails, because real life includes the tablet dropped behind the sink in week two.</p>\n<h2>The travel exception</h2><p>Before any trip: supply for the whole trip plus 3 extra days, in your hand luggage - never in checked bags. Delayed luggage is common; a delayed dose shouldn&rsquo;t be.</p>",
    doIt: "Low-stock alerts in the app do this counting arithmetic for you: enter your supply once, and it warns you at the reorder point — not at zero.",
    related: ["travel","timing"]
  },
  "travel": {
    cat: "Storage & travel",
    min: 5,
    date: "Oct 26, 2026",
    title: "Traveling with medicine, without the worry",
    img: ddImg6,
    alt: "An open travel case neatly packed with medicine bottles and blister packs",
    summary: "Hand luggage, original labels, and a time-zone plan made before you leave. The checklist frequent travelers with daily medicine actually use.",
    takeaway: "Medicine travels in your hand luggage, in its original labeled packaging, with 3 extra days' supply. Time zones: shift doses gradually toward the new zone, anchored to meals and sleep.",
    stage: ["hard-days"],
    body: "<h2>Pack like the bag will be lost - the other bag</h2><ul><li><b>Hand luggage only</b> for anything you'd miss a dose of. Checked bags get lost; cabins don't.</li><li><b>Original packaging</b> keeps security and foreign pharmacies calm, and keeps the label's instructions with the pills.</li><li><b>Trip + 3 days</b> of supply, split between two bags if you're traveling with someone.</li><li><b>A photo of every label</b> on your phone — brand name, generic name, dose. That photo is what a foreign pharmacist needs.</li></ul>\n<h2>The time-zone question, answered simply</h2><p>For trips under 3 days, most people keep home time if the dose times stay sane. For longer trips, move the dose 1-2 hours per day toward destination time, using meals and bedtime as anchors. Twice-daily medicines are the most forgiving; strictly-timed ones deserve a quick pharmacist call before you fly.</p>\n<h2>Heat is the quiet problem</h2><p>A parked car or a beach bag can cook medicine past its storage range. Keep it in the shaded, room-temperature part of your bag - never the glove box.</p>",
    doIt: "Set a travel schedule in the app before you leave: reminder times shift with your plan, and the adherence calendar keeps home and away doses in one unbroken streak.",
    related: ["refills","missed-dose"]
  },
  "care-starter": {
    cat: "Caregiving",
    min: 5,
    date: "Oct 22, 2026",
    title: "Caring for a parent's medicines: a starter checklist",
    img: ddImg2,
    alt: "A daughter helping her mother sort prescription bottles and a weekly pill organizer at the kitchen table",
    summary: "Inherited someone's routine? Start with one list and one agreement.",
    takeaway: "Week one is not about perfection — it's about visibility. One written list of every medicine, one organizer or app holding the schedule, and one agreed plan for missed doses. Everything else can improve from there.",
    stage: ["caregiving","starting"],
    body: "<h2>1. Build the one true list</h2><p>Sit at the kitchen table with every bottle, packet and tube in the house - including the vitamins. Write down each one: name, strength, dose, time, and what it&rsquo;s for. Every doctor, pharmacist and hospital asks for this list, and it almost never exists until a caregiver makes it. Photograph it, share it with siblings, keep it current.</p>\n<h2>2. Put the schedule in one place</h2><p>A routine split across memory, a fridge note and hope is three routines, none reliable. Choose one home for it - an organizer for simple schedules, the app for anything with multiple times a day - and let everything else point back to it.</p>\n<h2>3. Agree the missed-dose plan before it happens</h2><p>How long can a dose stay unconfirmed before you hear about it? When an alert arrives: text first, or call? Who is the backup if you&rsquo;re unreachable? Having this conversation calmly, once, makes the 9 p.m. alert a small event instead of a family emergency.</p>\n<h2>4. Take over the refills</h2><p>Refills are the invisible failure point: nobody notices an emptying bottle until it&rsquo;s empty. Count supply weekly, reorder at seven days left, and keep the pharmacy&rsquo;s number in your phone - not just your parent&rsquo;s.</p>\n<h2>5. Be the memory at appointments</h2><p>Bring the list, the adherence picture, and three written questions. It turns you from &ldquo;the daughter who worries&rdquo; into the person the doctor actually plans with - which is what you already are.</p>",
    doIt: "Set your parent up once in the app — Senior Mode for bigger text and calmer reminders, caregiver alerts to you — and generate the medication report from their records before each appointment, instead of rebuilding it from memory.",
    related: ["care-alerts","care-senior"]
  },
  "care-alerts": {
    cat: "Caregiver series",
    min: 4,
    date: "Nov 11, 2026",
    title: "The alert that replaces the daily “Did you take it?” call",
    img: ddImg2,
    alt: "A daughter helping her mother sort prescription bottles at the kitchen table",
    summary: "The daily check-in call wears out both people. A missed-dose alert does the worrying for you — and leaves the calls for actual conversation.",
    takeaway: "Set it once: if a dose isn't confirmed within the window you choose, you get an alert. No news becomes good news — and the phone call goes back to being a phone call.",
    stage: ["caregiving"],
    body: "<h2>The call that stops working</h2><p>Every caregiver knows the script: &ldquo;Did you take your tablets?&rdquo; - &ldquo;Yes.&rdquo; - said with love, and sometimes because it&rsquo;s easier than the truth. The call isn&rsquo;t failing because anyone is dishonest; it&rsquo;s failing because it asks a person to be their own monitoring system, every day, forever.</p>\n<h2>Let the absence of an alert be the check-in</h2><p>The pattern that works: your parent taps Taken when the reminder arrives - one tap, big button, no menus. If nothing is tapped within the window you set together, the alert comes to you. Silence means handled. You&rsquo;re no longer auditing every dose, only hearing about the exceptions - the part that needs a human.</p>\n<h2>Agree the rules together</h2><p>The setup conversation matters more than the settings. Agree what &ldquo;late&rdquo; means, what you&rsquo;ll do when an alert arrives (text first, call second) and - important - that the alert is a safety net, not surveillance. Framed that way, most parents aren&rsquo;t just accepting it; they&rsquo;re relieved.</p>",
    doIt: "Caregiver alerts are built into the app: with Family Pro, a missed or unconfirmed dose notifies the person your parent chooses — no daily reporting, no spreadsheets.",
    related: ["care-senior","care-report"]
  },
  "care-report": {
    cat: "Caregiver series",
    min: 3,
    date: "Nov 4, 2026",
    title: "Walking into the doctor's office with a report, not a guess",
    img: ddImg5,
    alt: "A woman taking a blood pressure reading at home before a doctor's visit",
    summary: "“Has she been taking them?” shouldn't be answered from memory. A one-page report — adherence, side effects, readings — changes what a 10-minute appointment can do.",
    takeaway: "Before every appointment, generate the report: doses taken and missed, side-effect notes, and any BP or glucose readings. Print it or send it ahead. Doctors make better decisions from data than from recollection.",
    stage: ["caregiving","routine"],
    body: "<h2>The 10-minute problem</h2><p>Appointments are short, and &ldquo;how has she been on the new tablet?&rdquo; is usually answered from the last two days and a general feeling. But the decision made in that room - raise the dose, switch the medicine, add another - deserves the last three months, not the last two days.</p>\n<h2>What the one page should hold</h2><ul><li>Adherence: doses taken vs. missed, with the pattern (evenings are the problem, not mornings)</li><li>Side-effect entries with dates and severity</li><li>Vitals logged at home: blood pressure, glucose, weight</li><li>Your three questions, written down, in priority order</li></ul>\n<h2>Send it before, not during</h2><p>If the clinic accepts email or a patient portal, send the report the day before. The doctor reads it without the clock running, and the appointment starts at the decision instead of the data hunt.</p>",
    doIt: "The app exports exactly this as a PDF or CSV — adherence calendar, side-effect log, and vitals — generated from the same records you already keep by tapping Taken.",
    related: ["side-effects","care-alerts"]
  },
  "care-senior": {
    cat: "Caregiver series",
    min: 3,
    date: "Oct 20, 2026",
    title: "Senior Mode: bigger text, fewer taps, calmer reminders",
    img: ddImg1,
    alt: "A senior woman comfortably taking her medicine at home",
    summary: "Most reminder apps are designed by people with perfect eyesight and no arthritis. Senior Mode is the version your parent would design.",
    takeaway: "Larger type, one big Taken button, gentle escalation instead of alarm-siren reminders, and a home-screen widget that needs no app-opening at all.",
    stage: ["caregiving"],
    body: "<h2>Designed for real hands and real eyes</h2><p>The barriers are rarely motivation. They&rsquo;re a 14-pixel button, a reminder that looks like every other notification, and a confirmation buried two screens deep. Senior Mode removes all three: text sized to be read without hunting for glasses, and a single large Taken target.</p>\n<h2>Calm, then persistent</h2><p>A reminder that shouts gets muted. One that speaks politely, waits, and only escalates if a dose goes unconfirmed - that one survives. The escalation ladder (gentle reminder → repeat → notify the caregiver) builds persistence into the system, so the tone never has to be.</p>\n<h2>The widget does the heavy lifting</h2><p>For many seniors the winning feature is never opening the app: the home- and lock-screen widgets show the next dose and take the Taken tap right there. Fewer steps, fewer chances to get lost.</p>",
    doIt: "Senior Mode is a switch in the app's settings — set it up once during a visit, and pair it with caregiver alerts so you're only contacted when a dose truly goes unconfirmed.",
    related: ["care-alerts","care-report"]
  },
  "vomit": {
    cat: "60-second guide",
    min: 1,
    date: "Nov 12, 2026",
    title: "Threw up after taking your pills?",
    img: ddImg4,
    alt: "A pharmacist ready to advise a patient at the counter",
    summary: "The 30-minute question: did the medicine have time to get in? The general rule — and when to just call the pharmacist.",
    takeaway: "If you can see the tablet, it didn't count. If it was over an hour ago, it almost certainly did. In between: this is precisely what pharmacists answer for free, in one call.",
    stage: ["hard-days"],
    body: "<h2>The rule of thumb</h2><p>Under about 15-30 minutes, most of the dose is likely still in the stomach - if you can see an intact tablet, it definitely didn&rsquo;t count. Past an hour, absorption has usually happened. In between it depends on the medicine, so the honest answer is: check the label, and if it&rsquo;s silent, call the pharmacist rather than guessing or re-dosing.</p>\n<h2>Never re-dose these without asking</h2><p>Narrow-margin medicines - where a little extra matters - should never be re-taken on a guess. When you call, say the medicine name, the dose and the time you took it. That&rsquo;s all they need.</p>",
    doIt: "Log it in the app as a skipped dose with the note “vomited ~20 min after” — future you (and your doctor) get the context, not just a red mark on the calendar.",
    related: ["missed-dose"]
  },
  "switch-times": {
    cat: "60-second guide",
    min: 1,
    date: "Nov 9, 2026",
    title: "Switching dose times without missing a dose",
    img: ddImg3,
    alt: "A weekly pill organizer used to plan a new dose schedule",
    summary: "Moving an 8 a.m. dose to 8 p.m. isn't a jump — it's a walk. Shift 1–2 hours a day, or make one planned long gap.",
    takeaway: "Move the dose gradually — 1 to 2 hours per day — until it lands where you want it. One planned, slightly-long gap beats a week of “roughly evenings”.",
    stage: ["routine"],
    body: "<h2>Why the gradual walk works</h2><p>Your body and your routine both dislike sudden jumps. Shifting a dose by an hour or two a day keeps every gap within a safe range, and lets the new time attach itself to a new anchor - dinner instead of breakfast - before the old anchor is gone.</p>\n<h2>The anchor swap</h2><p>Pick the new anchor first (a meal, a commute, bedtime), then walk the dose toward it. When dose and anchor meet, stop walking. Set the new reminder time that day, not &ldquo;when it settles&rdquo; - it settles because the reminder says so.</p>",
    doIt: "Edit the schedule in the app day by day, or use a tapering-style schedule — the calendar keeps the streak honest through the transition.",
    related: ["timing","missed-dose"]
  },
  "bp-readings": {
    cat: "60-second guide",
    min: 1,
    date: "Nov 6, 2026",
    title: "Home BP readings: making them mean something",
    img: ddImg5,
    alt: "A woman measuring her blood pressure correctly at home",
    summary: "Same time, same arm, feet on the floor, two readings a minute apart. The five habits that turn a home cuff into evidence.",
    takeaway: "Sit 5 minutes first, cuff on bare skin, arm supported at heart height, no talking. Take two readings and log both — the average is the number your doctor wants.",
    stage: ["routine"],
    body: "<h2>The five habits</h2><ul><li><b>Rest first</b> — 5 quiet minutes. A reading taken mid-rush measures the rush.</li><li><b>Feet flat, back supported, arm at heart height</b> — each shortcut costs a few points of accuracy.</li><li><b>Bare arm, right cuff size</b> — over a sleeve or with a too-small cuff, the number lies upward.</li><li><b>Two readings, one minute apart</b> — log both; use the average.</li><li><b>Same times daily</b> — morning before medicine and food, evening before dinner, for a week before appointments.</li></ul>\n<h2>Log it next to the doses</h2><p>A BP reading means more beside the record of what was actually taken. A &ldquo;high&rdquo; week with three missed doses is a different conversation than a high week with perfect adherence.</p>",
    doIt: "Vitals live beside doses in the app — blood pressure, glucose, weight, heart rate — and flow into the same PDF report you hand your doctor.",
    related: ["care-report","side-effects"]
  },
  "double-dose": {
    cat: "60-second guide",
    min: 1,
    date: "Nov 3, 2026",
    title: "Took a double dose by accident?",
    img: ddImg4,
    alt: "A pharmacist at the counter, the right first call after a dosing mistake",
    summary: "Stay calm, don't take the next dose early, and make one phone call. What to say, and what to watch for.",
    takeaway: "For most everyday medicines a single double dose is an inconvenience, not an emergency — but the call to your pharmacist or poison line is still the move. Tell them the medicine, the amount, and the time.",
    stage: ["hard-days"],
    body: "<h2>The first ten minutes</h2><p>Don&rsquo;t drive yourself anywhere, don&rsquo;t try to &ldquo;undo&rdquo; it, and don&rsquo;t skip tomorrow&rsquo;s doses on your own initiative. Note the time and amount, then call your pharmacist or local poison information line. For most common medicines they&rsquo;ll reassure you and say what to watch for; for a small set they&rsquo;ll want you seen - which is why the call comes first, not after symptoms.</p>\n<h2>Then fix the system, not the person</h2><p>Double doses almost always come from ambiguity: &ldquo;Did I take it?&rdquo; A ticked box - or a Taken tap that stamps the time - removes the question entirely. The organizer or the app log is the memory; yours is free for other things.</p>",
    doIt: "Marking a dose Taken in the app stamps the exact time, and the reminder for that dose disappears — so “did I take it?” always has an answer.",
    related: ["missed-dose","vomit"]
  }
};

export const CORNERSTONE = ["missed-dose","timing","food","side-effects","refills","care-starter"];
export const LATEST = ["vomit","travel","switch-times","bp-readings","double-dose"];
export const FILTERS = [{"key":"all","label":"All guides"},{"key":"Missed a dose","label":"Missed a dose"},{"key":"When to take it","label":"When to take it"},{"key":"Food & drink","label":"Food & drink"},{"key":"Side effects","label":"Side effects"},{"key":"Refills & pharmacy","label":"Refills"},{"key":"Caregiving","label":"Caregiving"}];

export const HERO_IMG = ddImg1;
export const CAREGIVER_IMG = ddImg2;
