// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Docs 4400",
      head: [
        {
          tag: "script",
          attrs: { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
        },
        {
          tag: "script",
          content: `
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `,
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
		{
			label: 'Documentación Cerbotics',
    		items: [{autogenerate: { directory: '' }}],
		}
        
      ],
    }),
  ],
});
