export const projectCaseStudies = {
  "k-wise": {
    sections: [
      {
        type: "header",
        title: "K-WISE",
        subtitle: "AN AI-DRIVEN KIOSK-BASED PC BUILD OPTIMIZER AND COMPANION FOR PC WISE",
        meta: { 
          date: "Nov 2025", 
          status: "In Progress",
          role: "Lead Developer & UI Designer",
          tools: ["Figma", "MongoDB", "Express.js", "React.js", "Node.js", "PostgreSQL"]
        }
      },
      {
        type: "hero",
        image: "/assets/kwise/hero.webp"
      },
      {
        type: "content",
        heading: "PROJECT CONTEXT",
        intro: "The K-WISE kiosk system addressed slow, manual in-store assistance and frequent compatibility questions during PC builds.",
        sections: [
          {
            subheading: "Problems identified",
            items: [
              "Long queues during peak hours.",
              "Manual part checking that depended on staff availability.",
              "Inconsistent build advice for budget-based or purpose-based setups"
            ]
          },
          {
            subheading: "What was built",
            items: [
              "A kiosk-first experience placed inside the store.",
              "Guided flows for components, full builds, upgrades, and services.",
              "AI-assisted suggestions backed by rule-based compatibility checks."
            ]
          },
          {
            subheading: "What was intentionally excluded",
            items: [
              "Pricing logic, scoring formulas, and internal rules.",
              "External inventory syncing details.",
              "Proprietary data structures."
            ]
          }
        ]
      },
      {
        type: "features",
        heading: "KEY FEATURES",
        intro: "The K-WISE kiosk system focused on clarity, speed, and decision support.",
        subheading: "Core features delivered",
        columns: [
          [
            {
              number: 1,
              title: "Component browsing",
              items: [
                "Category filters and search.",
                "Clear specs per part."
              ]
            },
            {
              number: 2,
              title: "Compatibility checking",
              items: [
                "Real-time flags for incompatible selections.",
                "Fewer trial-and-error builds."
              ]
            },
            {
              number: 3,
              title: "AI-assisted build guidance",
              items: [
                "Budget-based and use-case-based suggestions.",
                "Future upgrades",
                "Upgrade hints without forcing choices."
              ]
            }
          ],
          [
            {
              number: 4,
              title: "Build summaries",
              items: [
                "Consolidated view of selected parts.",
                "Price visibility and queue number generation."
              ]
            },
            {
              number: 5,
              title: "Queue handling",
              items: [
                "Structured order queuing.",
                "Reduced counter congestion."
              ]
            },
            {
              number: 6,
              title: "Admin side",
              items: [
                "Inventory updates.",
                "Order and queue monitoring."
              ]
            }
          ]
        ],
        image: "/assets/images/case_study/kwise/keyFeatures.webp"
      },
      {
        type: "results",
        heading: "RESULTS",
        intro: "The K-WISE kiosk system was evaluated in-store with staff and customers using standard software quality criteria.",
        sections: [
          {
            number: 1,
            title: "OPERATIONAL METRICS",
            items: [
              {
                label: "a. Browsing + ordering time",
                details: ["Reduced by ≈25–35% compared to the manual flow."]
              },
              {
                label: "b. Compatibility-related corrections",
                details: ["Dropped by ≈40% before checkout."]
              },
              {
                label: "c. Repeat staff inquiries",
                details: ["Reduced by ≈30% during peak hours."]
              },
              {
                label: "d. Queue congestion",
                details: ["Fewer bottlenecks observed during simultaneous orders."]
              }
            ]
          },
          {
            number: 2,
            title: "ADOPTION SIGNALS",
            items: [
              {
                label: "a. Non-technical users",
                details: ["Reported higher confidence after guided build flow."]
              },
              {
                label: "b. Staff",
                details: [
                  "Spent less time on basic part checks.",
                  "Focused more on complex cases."
                ]
              }
            ]
          }
        ]
      },
      {
        type: "developers",
        team: [
          {
            name: "CHARLOTTE CRUZ",
            role: "Documentation"
          },
          {
            name: "JAKE MESINA",
            role: "Front-end Dev."
          },
          {
            name: "KENT CYREM PATASIN",
            role: "Front-end Dev."
          },
          {
            name: "LUDWIG RIVERA",
            role: "Back-end Dev."
          },
          {
            name: "DR. REGINA ALMONTE",
            role: "Mentor"
          }
        ]
      }
    ]
  },

  "kitsune": {
    sections: [
      {
        type: "header",
        title: "KITSUNE",
        subtitle: "Modern e-commerce prototype for anime merchandise",
        meta: {
          year: "2025",
          status: "Completed",
          role: "UI/UX Designer & Prototyper",
          tools: ["Figma", "React", "Framer Motion"]
        }
      },
      {
        type: "hero",
        image: "/assets/kitsune/hero.png"
      },
      {
        type: "content",
        heading: "PROJECT CONTEXT",
        text: "Create a clean, modern e-commerce experience for anime merchandise that prioritizes visual appeal and seamless navigation while maintaining fast load times and accessibility standards."
      },
      {
        type: "features",
        heading: "KEY FEATURES",
        items: [
          "Grid-based product layout with hover effects",
          "Advanced filtering system by category, price, and popularity",
          "Smooth animations and transitions using Framer Motion",
          "Mobile-first responsive design",
          "Quick checkout flow with minimal steps",
          "Product quick-view modal"
        ]
      },
      {
        type: "gallery",
        images: [
          "/assets/kitsune/screen-1.png",
          "/assets/kitsune/screen-2.png",
          "/assets/kitsune/screen-3.png"
        ]
      },
      {
        type: "results",
        heading: "RESULTS",
        items: [
          "Completed high-fidelity prototype with full interaction flows",
          "Positive user testing feedback with 4.5/5 average rating",
          "Demonstrated modern UI/UX capabilities for portfolio",
          "Received interest from potential clients for similar work"
        ]
      },
      {
        type: "developers",
        heading: "DEVELOPERS",
        team: [
          {
            name: "Kent Cyrem Patasin",
            role: "UI/UX Designer & Prototyper"
          }
        ]
      }
    ]
  }
};
