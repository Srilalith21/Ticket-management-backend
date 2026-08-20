const tickets = [
  {
    id: 1001,
    title: "Laptop is running very slowly",
    description:
      "Laptop takes around 10 minutes to start and applications freeze.",
    requesterId: 101,
    assigneeId: 103,
    category: "HARDWARE",
    priority: "HIGH",
    status: "IN_PROGRESS",
    createdAt: "2026-08-15T09:30:00Z",
  },
  {
    id: 1002,
    title: "Cannot access payroll portal",
    description: "Payroll portal shows access denied after login.",
    requesterId: 102,
    assigneeId: null,
    category: "ACCESS",
    priority: "HIGH",
    status: "OPEN",
    createdAt: "2026-08-16T11:15:00Z",
  },
  {
    id: 1003,
    title: "VPN disconnects frequently",
    description:
      "VPN disconnects every 10 to 15 minutes while working from home.",
    requesterId: 105,
    assigneeId: 104,
    category: "NETWORK",
    priority: "MEDIUM",
    status: "IN_PROGRESS",
    createdAt: "2026-08-16T14:20:00Z",
  },
  {
    id: 1004,
    title: "Need software installation",
    description: "Please install the approved project management application.",
    requesterId: 101,
    assigneeId: null,
    category: "SOFTWARE",
    priority: "LOW",
    status: "OPEN",
    createdAt: "2026-08-17T08:45:00Z",
  },
  {
    id: 1005,
    title: "Email application crashes",
    description:
      "Desktop email application closes when opening large messages.",
    requesterId: 105,
    assigneeId: 103,
    category: "SOFTWARE",
    priority: "MEDIUM",
    status: "RESOLVED",
    createdAt: "2026-08-17T16:10:00Z",
  },
];

module.exports = tickets;
