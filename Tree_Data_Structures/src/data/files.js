export const FILES = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "bootstrap",
          children: [
            {
              name: "bootstrap.min.css",
            },
          ],
        },
        {
          name: "vite",
          children: [
            {
              name: "vite.config.json",
            },
          ],
        },
        {
          name: "css",
          children: [
            {
              name: "styles.css",
            },
            {
              name: "layouts",
              children: [
                {
                  name: "header",
                  children: [
                    {
                      name: "admin-header.css",
                    },
                    {
                      name: "user-header.css",
                    },
                  ],
                },
                {
                  name: "navbar",
                  children: [
                    {
                      name: "admin-navbar.css",
                    },
                    {
                      name: "user-navbar.css",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "public",
      children: [
        {
          name: "vite.svg",
        },
      ],
    },
    {
      name: "src",
      children: [
        {
          name: "data",
          children: [
            {
              name: "files.js",
            },
          ],
        },
        {
          name: "components",
          children: [
            {
              name: "Entry.tsx",
            },
          ],
        },
        {
          name: "App.tsx",
        },
        {
          name: "main.tsx",
        },
      ],
    },
    {
      name: "package.json",
    },
    {
      name: "vite.config.ts",
    },
    { name: "index.html" },
  ],
};
