import { reactive } from "vue";

export const store = reactive({
  keyCards: [
    {
      fontawe: "fa-solid fa-layer-group",
      name: "modular",
      prg: "composed in a pseudo-latin language which more or less corresponds.",
      readMore: "read more",
      angleRight: "fa-solid fa-angle-right",
    },
    {
      fontawe: "fa-solid fa-tv",
      name: "responsive",
      prg: "composed in a pseudo-latin language which more or less corresponds.",
      readMore: "read more",
      angleRight: "fa-solid fa-angle-right",
    },
    {
      fontawe: "fa-solid fa-arrows-to-eye",
      name: "customizable",
      prg: "composed in a pseudo-latin language which more or less corresponds.",
      readMore: "read more",
      angleRight: "fa-solid fa-angle-right",
    },
    {
      fontawe: "fa-solid fa-maximize",
      name: "scalable",
      prg: "composed in a pseudo-latin language which more or less corresponds.",
      readMore: "read more",
      angleRight: "fa-solid fa-angle-right",
    },
  ],

  priceCard: [
    {
      type: "basic",
      price: "9.00",
      month: "per month",
      prg: "all the basics for businesses that are just getting started.",

      full: "full access",
      security: "enhanced security",
      files: "source files",
      domain: "1 domain free",
      button: "buy now",
      credit: "*no credit card required",
    },
    {
      type: "business",
      price: "39.00",
      month: "per month",
      prg: "better for growing businesses that want more customers.",

      full: "full access",
      security: "enhanced security",
      files: "source files",
      domain: "1 domain free",
      button: "buy now",
      credit: "*no credit card required",
    },
    {
      type: "enterprise",
      price: "79.00",
      month: "per month",
      prg: "advanced features for pros who need more customization.",

      full: "full access",
      security: "enhanced security",
      files: "source files",
      domain: "1 domain free",
      button: "buy now",
      credit: "*no credit card required",
    },
  ],

  // FOOTER
  company: [
    {
      text: "About us",
    },
    {
      text: "Services",
    },
    {
      text: "Team",
    },
    {
      text: "Pricing",
    },
    {
      text: "Project",
    },
    {
      text: "Careers",
    },
    {
      text: "Blog",
    },
    {
      text: "Login",
    },
  ],

  usefull: [
    {
      text: "Terms of Services",
    },
    {
      text: "Privacy Policy",
    },
    {
      text: "Documentation",
    },
    {
      text: "Changelog",
    },
    {
      text: "Components",
    },
  ],
});
