import type { CollectionConfig } from "payload";

export const CommercialProposals: CollectionConfig = {
  slug: "commercial-proposals",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "status", "createdAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "status",
      type: "select",
      options: [
        {
          label: "Draft",
          value: "draft",
        },
        {
          label: "Published",
          value: "published",
        },
      ],
      defaultValue: "draft",
      admin: {
        position: "sidebar",
      },
    },
    // Hero Section
    {
      name: "hero",
      type: "group",
      fields: [
        {
          name: "enabled",
          type: "checkbox",
          label: "Mostrar seção",
          defaultValue: true,
        },
        {
          name: "title",
          type: "text",
        },
        {
          name: "subtitle",
          type: "textarea",
        },
        {
          name: "description",
          type: "richText",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "ctaText",
          type: "text",
          defaultValue: "Solicitar Proposta",
        },
        {
          name: "ctaLink",
          type: "text",
        },
      ],
    },
    // Parceiros Section
    {
      name: "partners",
      type: "group",
      fields: [
        {
          name: "enabled",
          type: "checkbox",
          label: "Mostrar seção",
          defaultValue: true,
        },
        {
          name: "title",
          type: "text",
          defaultValue: "Nossos Parceiros",
        },
        {
          name: "logos",
          type: "array",
          fields: [
            {
              name: "logo",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "name",
              type: "text",
            },
            {
              name: "link",
              type: "text",
            },
          ],
        },
      ],
    },
    // Proposta de Valor Section
    {
      name: "valueProposition",
      type: "group",
      fields: [
        {
          name: "enabled",
          type: "checkbox",
          label: "Mostrar seção",
          defaultValue: true,
        },
        {
          name: "title",
          type: "text",
        },
        {
          name: "subtitle",
          type: "textarea",
        },
        {
          name: "description",
          type: "richText",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    // Benefícios Section
    {
      name: "benefits",
      type: "group",
      fields: [
        {
          name: "enabled",
          type: "checkbox",
          label: "Mostrar seção",
          defaultValue: true,
        },
        {
          name: "title",
          type: "text",
          defaultValue: "Benefícios",
        },
        {
          name: "items",
          type: "array",
          fields: [
            {
              name: "title",
              type: "text",
            },
            {
              name: "description",
              type: "textarea",
            },
            {
              name: "icon",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "highlight",
              type: "checkbox",
              defaultValue: false,
            },
          ],
        },
      ],
    },
    // Opções de Pagamento Section
    {
      name: "paymentOptions",
      type: "group",
      fields: [
        {
          name: "enabled",
          type: "checkbox",
          label: "Mostrar seção",
          defaultValue: true,
        },
        {
          name: "title",
          type: "text",
          defaultValue: "Opções de Pagamento",
        },
        {
          name: "options",
          type: "array",
          fields: [
            {
              name: "title",
              type: "text",
            },
            {
              name: "description",
              type: "textarea",
            },
            {
              name: "price",
              type: "text",
            },
            {
              name: "discount",
              type: "text",
            },
            {
              name: "features",
              type: "array",
              fields: [
                {
                  name: "feature",
                  type: "text",
                },
              ],
            },
            {
              name: "ctaText",
              type: "text",
              defaultValue: "Escolher Plano",
            },
            {
              name: "ctaLink",
              type: "text",
            },
            {
              name: "highlight",
              type: "checkbox",
              defaultValue: false,
            },
          ],
        },
      ],
    },
    // Agradecimentos Section
    {
      name: "testimonials",
      type: "group",
      fields: [
        {
          name: "enabled",
          type: "checkbox",
          label: "Mostrar seção",
          defaultValue: true,
        },
        {
          name: "title",
          type: "text",
          defaultValue: "O que nossos clientes dizem",
        },
        {
          name: "items",
          type: "array",
          fields: [
            {
              name: "name",
              type: "text",
            },
            {
              name: "company",
              type: "text",
            },
            {
              name: "testimonial",
              type: "textarea",
            },
            {
              name: "avatar",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "rating",
              type: "number",
              min: 1,
              max: 5,
              defaultValue: 5,
            },
          ],
        },
      ],
    },
    // Rodapé Section
    {
      name: "footer",
      type: "group",
      fields: [
        {
          name: "enabled",
          type: "checkbox",
          label: "Mostrar seção",
          defaultValue: true,
        },
        {
          name: "companyName",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
        {
          name: "contact",
          type: "group",
          fields: [
            {
              name: "email",
              type: "email",
            },
            {
              name: "phone",
              type: "text",
            },
            {
              name: "address",
              type: "textarea",
            },
          ],
        },
        {
          name: "socialLinks",
          type: "array",
          fields: [
            {
              name: "platform",
              type: "text",
            },
            {
              name: "url",
              type: "text",
            },
            {
              name: "icon",
              type: "upload",
              relationTo: "media",
            },
          ],
        },
      ],
    },
  ],
};
