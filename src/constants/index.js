export const navLinks = [
  {
    name: "Home",
    path: "/",
    icon: "ic:baseline-home",
    dropdown: false,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "ic:baseline-dashboard",
    dropdown: false,
  },
  {
    name: "Account",
    path: "/account",
    icon: "mdi:account",
    dropdown: true,
    submenu: [
      {
        name: "Profile",
        path: "/account/profile",
        icon: "gg:profile",
        dropdown: false,
      },
      {
        name: "Address",
        path: "/account/address",
        icon: "mdi:location",
        dropdown: false,
      },
      {
        name: "Emergency Contact",
        path: "/account/emergency-contact",
        icon: "ic:baseline-phone",
        dropdown: false,
      },
      {
        name: "More",
        path: "/account/more",
        icon: "icon-park-outline:more",
        dropdown: true,
        submenu2: [
          {
            name: "Care Provider",
            path: "/account/more/care-provider",
            icon: "fontisto:nurse",
          },
          {
            name: "Other",
            path: "/account/more/other",
            icon: "ic:baseline-more",
          },
        ],
      },
    ],
  },
  {
    name: "Vitals",
    path: "/vitals",
    icon: "mdi:clipboard-vitals",
    dropdown: false,
  },
  {
    name: "Medical History",
    path: "/medical-history",
    icon: "mdi:medical-bag",
    dropdown: false,
    dropdown: true,
    submenu: [
      {
        name: "Patient",
        path: "/medical-history/patient",
        icon: "mdi:patient",
      },
      {
        name: "Family",
        path: "/medical-history/family",
        icon: "icon-park-outline:family",
      },
    ],
  },
  {
    name: "More",
    path: "/more",
    icon: "icon-park-outline:more",
    dropdown: true,
    submenu: [
      {
        name: "Appointments",
        path: "/more/appointments",
        icon: "teenyicons:appointments-outline",
      },
      {
        name: "Lab Tests",
        path: "/more/lab-tests",
        icon: "healthicons:virus-lab-research-syringe",
      },
      {
        name: "Medicines",
        path: "/more/medicines",
        icon: "game-icons:medicine-pills",
      },
      {
        name: "Tracker & Scheduler",
        path: "/more/tracker-scheduler",
        icon: "solar:health-linear",
      },
      {
        name: "Members",
        path: "/more/members",
        icon: "tdesign:member",
      },
    ],
  },
];
